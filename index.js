import React from 'react';
import AppViews from './views/AppViews.js';
import DeployerViews from './views/DeployerViews.js';
import AttacherViews from './views/AttacherViews.js';
import {renderDOM, renderView} from './views/render.js';
import './index.css';
import * as backend from './build/index.main.mjs';
import { loadStdlib } from '@reach-sh/stdlib';
//import { ALGO_MyAlgoConnect as MyAlgoConnect } from '@reach-sh/stdlib';
const reach = loadStdlib(process.env);
const {standardUnit} = reach;
const defaults = {defaultFundAmt: '10', defaultprice: '1', defaultreward: '2', standardUnit};
reach.setWalletFallback(reach.walletFallback({}));
// reach.setWalletFallback(reach.walletFallback({
// providerEnv: 'TestNet', MyAlgoConnect }));

class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {view: 'ConnectAccount', ...defaults};
    }
    async componentDidMount() {
      const acc = await reach.getDefaultAccount();
      const balAtomic = await reach.balanceOf(acc);
      const bal = reach.formatCurrency(balAtomic, 4);
      this.setState({acc, bal});
      if (await reach.canFundFromFaucet()) {
        this.setState({view: 'FundAccount'});
      } else {
        this.setState({view: 'DeployerOrAttacher'});
      }
    }
    async fundAccount(fundAmount) {
        await reach.fundFromFaucet(this.state.acc, reach.parseCurrency(fundAmount));
        this.setState({view: 'DeployerOrAttacher'});
      }
    async skipFundAccount() { this.setState({view: 'DeployerOrAttacher'}); } 
    async updateBal(newbal) {newbal = reach.parseCurrency(balAtomic + fundAmount);}
    selectAttacher() { this.setState({view: 'Wrapper', ContentView: Attacher}); }
    selectDeployer() { this.setState({view: 'Wrapper', ContentView: Deployer}); }

    render() { return renderView(this, AppViews); }
}
class Common extends React.Component {
  random() { return reach.hasRandom.random(); }
  informTimeout() { this.setState({view: 'Timeout'}); }
  async settingtasks() { 
    return await new Promise(resolveStart => 
    this.setState({view: 'settingTasks', resolveStart})
    )
    ;}
  checkstart(){
    this.state.resolveStart();
  }
  async setTask1() {
    return await new Promise(resolveTask1 =>    
    this.setState({view:'setTask1', resolveTask1})); }
    checktask1(){
      this.state.resolveTask1();
    }

  async setTask2() { 
    return await new Promise(resolveTask2 =>
    this.setState({view:'setTask2', resolveTask2})); }
    checktask2(){
      this.state.resolveTask2();
    }
    
  async setTask3() { 
    return await new Promise(resolveTask3 =>
    this.setState({view:'setTask3',resolveTask3})); }
    checktask3(){
      this.state.resolveTask3();
    }
    
  async setTask04() { 
    return await new Promise(resolveTask04 => 
    this.setState({view:'setTask04',resolveTask04})); }
    checktask04(){
      this.state.resolveTask04();
    }
    
  async setTask5() { 
    return await new Promise(resolveTask5 =>  
    this.setState({view:'setTask5', resolveTask5})); }
    checktask5(){
      this.state.resolveTask5();
    }
    
  async setTask6() { 
    return await new Promise(resolveTask6 => 
    this.setState({view:'setTask6',resolveTask6})); }
    checktask6(){
      this.state.resolveTask6();
    }
    
  async setTask7() { 
    return await new Promise(resolveTask7 => 
    this.setState({view:'setTask7',resolveTask7})); }
    checktask7(){
      this.state.resolveTask7();
    }
    
  async taskFinish() { 
    return await new Promise(resolveFinish => 
     this.setState({view:'taskFinish', resolveFinish})
    ) 
    ;}
    checkfinish(){
      this.state.resolveFinish();
    }
  seeTransfer(paymentAtomic, rewardAtomic) {
    const reward = reach.formatCurrency(rewardAtomic, 4);
    const payment = reach.formatCurrency(paymentAtomic, 4); 
     this.setState({view: 'Done', payment, reward}); }    
  }
class Deployer extends Common {
    constructor(props) {
        super(props);
        this.state = {view: 'Setchallenge'};
    } 
    
    setchallenge(reward, payment, deadline) 
    { this.setState({view: 'Deploy', reward, payment, deadline}); }
    async deploy() {
      const ctc = this.props.acc.contract(backend);
      this.setState({view: 'Deploying', ctc});
      this.reward = reach.parseCurrency(this.state.reward); // UInt
      this.deadline = {ETH: 10, ALGO: 100, CFX: 1000}[reach.connector];
      this.payment = reach.parseCurrency(this.state.payment);

      backend.Alice(ctc, this);
      const ctcInfoStr = JSON.stringify(await ctc.getInfo(), null, 2);
      this.setState({view: 'WaitingForAttacher', ctcInfoStr});
    }
   
    render() { return renderView(this, DeployerViews); }
  }
  class Attacher extends Common {
    constructor(props) {
      super(props);
      this.state = {view: 'Attach'};
    }
    attach(ctcInfoStr) {
      const ctc = this.props.acc.contract(backend, JSON.parse(ctcInfoStr));
      this.setState({view: 'Attaching'});

    backend.Bob(ctc, this);
    }
  
    async accchallenge(paymentAtomic, rewardAtomic){
      const reward = reach.formatCurrency(rewardAtomic, 4);
      const payment = reach.formatCurrency(paymentAtomic, 4);  
       return await new Promise(resolveAcceptedP => {
        this.setState({view: 'AcceptTerms', payment, reward, resolveAcceptedP});
      });
    }

    
    termsAccepted() {
      this.state.resolveAcceptedP();
    //  this.setState({view: 'settingTasks'});
    }
    render() { return renderView(this, AttacherViews); }
  }

renderDOM(<App />);