// Automatically generated with Reach 0.1.10 (31c3a32d)
/* eslint-disable */
export const _version = '0.1.10';
export const _versionHash = '0.1.10 (31c3a32d)';
export const _backendVersion = 12;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1, ctc1],
      2: [ctc0, ctc1, ctc1],
      3: [ctc0, ctc1, ctc1, ctc0]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function Alice(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Alice expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Alice expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_Address;
  
  
  const v101 = stdlib.protect(ctc0, interact.deadline, 'for Alice\'s interact field deadline');
  const v102 = stdlib.protect(ctc0, interact.payment, 'for Alice\'s interact field payment');
  const v103 = stdlib.protect(ctc0, interact.reward, 'for Alice\'s interact field reward');
  
  const txn1 = await (ctc.sendrecv({
    args: [v103, v102, v101],
    evt_cnt: 3,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:47:5:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0, ctc0, ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:47:5:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v116, v117, v118], secs: v120, time: v119, didSend: v47, from: v115 } = txn1;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v116, v117, v118], secs: v120, time: v119, didSend: v47, from: v115 } = txn1;
  ;
  const txn2 = await (ctc.sendrecv({
    args: [v115, v116, v117],
    evt_cnt: 0,
    funcNum: 1,
    lct: v119,
    onlyIf: true,
    out_tys: [],
    pay: [v116, []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v123, time: v122, didSend: v54, from: v121 } = txn2;
      
      sim_r.txns.push({
        amt: v116,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v126 = stdlib.addressEq(v115, v121);
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v123, time: v122, didSend: v54, from: v121 } = txn2;
  ;
  const v126 = stdlib.addressEq(v115, v121);
  stdlib.assert(v126, {
    at: './index.rsh:49:5:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Alice'
    });
  const txn3 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 2,
    out_tys: [],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v132, time: v131, didSend: v64, from: v130 } = txn3;
  ;
  const txn4 = await (ctc.sendrecv({
    args: [v115, v116, v117, v130],
    evt_cnt: 0,
    funcNum: 3,
    lct: v131,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:83:3:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn4) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v137, time: v136, didSend: v69, from: v135 } = txn4;
      
      ;
      const v138 = stdlib.addressEq(v115, v135);
      ;
      sim_r.txns.push({
        amt: v117,
        kind: 'from',
        to: v115,
        tok: undefined /* Nothing */
        });
      sim_r.txns.push({
        amt: v116,
        kind: 'from',
        to: v130,
        tok: undefined /* Nothing */
        });
      
      sim_r.txns.push({
        kind: 'halt',
        tok: undefined /* Nothing */
        })
      sim_r.isHalt = true;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc0, ctc0, ctc2],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v137, time: v136, didSend: v69, from: v135 } = txn4;
  ;
  const v138 = stdlib.addressEq(v115, v135);
  stdlib.assert(v138, {
    at: './index.rsh:83:3:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Alice'
    });
  ;
  ;
  stdlib.protect(ctc1, await interact.seeTransfer(), {
    at: './index.rsh:86:40:application',
    fs: ['at ./index.rsh:86:5:application call to [unknown function] (defined at: ./index.rsh:86:17:function exp)'],
    msg: 'seeTransfer',
    who: 'Alice'
    });
  
  return;
  
  
  
  
  
  
  
  
  };
export async function Bob(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Bob expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bob expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Bool;
  const ctc2 = stdlib.T_Null;
  const ctc3 = stdlib.T_Address;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 3,
    funcNum: 0,
    out_tys: [ctc0, ctc0, ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v116, v117, v118], secs: v120, time: v119, didSend: v47, from: v115 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 1,
    out_tys: [],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v123, time: v122, didSend: v54, from: v121 } = txn2;
  ;
  const v126 = stdlib.addressEq(v115, v121);
  stdlib.assert(v126, {
    at: './index.rsh:49:5:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Bob'
    });
  stdlib.protect(ctc1, await interact.accchallenge(v116, v117), {
    at: './index.rsh:65:36:application',
    fs: ['at ./index.rsh:60:9:application call to [unknown function] (defined at: ./index.rsh:60:13:function exp)'],
    msg: 'accchallenge',
    who: 'Bob'
    });
  
  const txn3 = await (ctc.sendrecv({
    args: [v115, v116, v117],
    evt_cnt: 0,
    funcNum: 2,
    lct: v122,
    onlyIf: true,
    out_tys: [],
    pay: [v117, []],
    sim_p: (async (txn3) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v132, time: v131, didSend: v64, from: v130 } = txn3;
      
      sim_r.txns.push({
        amt: v117,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v132, time: v131, didSend: v64, from: v130 } = txn3;
  ;
  const txn4 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 3,
    out_tys: [],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v137, time: v136, didSend: v69, from: v135 } = txn4;
  ;
  const v138 = stdlib.addressEq(v115, v135);
  stdlib.assert(v138, {
    at: './index.rsh:83:3:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Bob'
    });
  ;
  ;
  stdlib.protect(ctc2, await interact.seeTransfer(), {
    at: './index.rsh:86:40:application',
    fs: ['at ./index.rsh:86:5:application call to [unknown function] (defined at: ./index.rsh:86:17:function exp)'],
    msg: 'seeTransfer',
    who: 'Bob'
    });
  
  return;
  
  
  
  
  
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `BiAHAAEDAiggCCYCAQAAIjUAMRhBAeEpZEkiWzUBIQZbNQI2GgAXSUEAByI1BCM1BgA2GgIXNQQ2GgM2GgEXSSUMQACuSSQMQABWJBJEJDQBEkQ0BEkiEkw0AhIRRChkSTUDVwAgNf+ABKdlxLSwNP8xABJEsSKyATQDIQRbsggjshA0/7IHs7EisgE0AyEFW7III7IQNANXMCCyB7NCAQdIJTQBEkQ0BEkiEkw0AhIRRChkSTUDSUlXACA1/yEFWzX+IQRbNf2ABEGxQE2wNP2IAS00/zT+FlA0/RZQMQBQKEsBVwBQZ0gkNQEyBjUCQgDRSSMMQABVSCM0ARJENARJIhJMNAISEUQoZEk1A0lJVwAgNf8hBVs1/iEEWzX9gASai5F0sDT+iADVNP8xABJENP80/hZQNP0WUChLAVcAMGdIJTUBMgY1AkIAdkgiNAESRDQESSISTDQCEhFESTUFSUkiWzX/IQZbNf6BEFs1/YAE93ETTTT/FlA0/hZQNP0WULCBoI0GiAB1MQA0/xZQNP4WUChLAVcAMGdIIzUBMgY1AkIAHDEZgQUSRLEisgEisggjshAyCbIJMgqyB7NCAAUxGSISRCk0ARY0AhZQZzQGQQAKgAQVH3x1NAdQsDQASSMIMgQSRDEWEkQjQzEZIhJEQv/fIjUBIjUCQv/DNABJSiMINQA4BzIKEkQ4ECMSRDgIEkSJ`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 1,
  stateSize: 80,
  unsupported: [],
  version: 10,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v116",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v117",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v118",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v116",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v117",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v118",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T4",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T4",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e2",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T4",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e3",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T4",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T4",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m2",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T4",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m3",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405162000cd338038062000cd383398101604081905262000026916200022f565b600080554360035560408051825181526020808401518051828401529081015182840152820151606082015290517f756807fe21484d54421b0dab51b98946711df868f9dc26ba5d9f68d9584b653d9181900360800190a16200008c3415600762000128565b620000ba604051806060016040528060006001600160a01b0316815260200160008152602001600081525090565b338082526020838101805151828501908152905182015160408086019182526001600081905543905580518085019590955291518483015251606080850191909152815180850390910181526080909301905281516200011f92600292019062000152565b50505062000303565b816200014e5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b8280546200016090620002c6565b90600052602060002090601f016020900481019282620001845760008555620001cf565b82601f106200019f57805160ff1916838001178555620001cf565b82800160010185558215620001cf579182015b82811115620001cf578251825591602001919060010190620001b2565b50620001dd929150620001e1565b5090565b5b80821115620001dd5760008155600101620001e2565b604051606081016001600160401b03811182821017156200022957634e487b7160e01b600052604160045260246000fd5b60405290565b600081830360808112156200024357600080fd5b604080519081016001600160401b03811182821017156200027457634e487b7160e01b600052604160045260246000fd5b604052835181526060601f19830112156200028e57600080fd5b62000298620001f8565b9150602084015182526040840151602083015260608401516040830152816020820152809250505092915050565b600181811c90821680620002db57607f821691505b60208210811415620002fd57634e487b7160e01b600052602260045260246000fd5b50919050565b6109c080620003136000396000f3fe6080604052600436106100565760003560e01c80631e93b0f11461005f5780632c10a1591461008357806373b4522c146100965780637eea518c146100a957806383230757146100bc578063ab53f2c6146100d157005b3661005d57005b005b34801561006b57600080fd5b506003545b6040519081526020015b60405180910390f35b61005d6100913660046107ae565b6100f4565b61005d6100a43660046107ae565b6102c3565b61005d6100b73660046107ae565b610487565b3480156100c857600080fd5b50600154610070565b3480156100dd57600080fd5b506100e6610616565b60405161007a9291906107c6565b610104600160005414600a6106b3565b61011e8135158061011757506001548235145b600b6106b3565b60008080556002805461013090610823565b80601f016020809104026020016040519081016040528092919081815260200182805461015c90610823565b80156101a95780601f1061017e576101008083540402835291602001916101a9565b820191906000526020600020905b81548152906001019060200180831161018c57829003601f168201915b50505050508060200190518101906101c19190610874565b90507f79ca1a789d797004bc78dff9632d64e202e102f2d008dcc20c5a645ef7d4a7d1826040516101f291906108e3565b60405180910390a161020b8160200151341460086106b3565b8051610223906001600160a01b0316331460096106b3565b610250604051806060016040528060006001600160a01b0316815260200160008152602001600081525090565b81516001600160a01b0316808252602080840151818401908152604080860151818601908152600260005543600155815193840194909452905190820152905160608201526080015b604051602081830303815290604052600290805190602001906102bd9291906106d8565b50505050565b6102d360036000541460116106b3565b6102ed813515806102e657506001548235145b60126106b3565b6000808055600280546102ff90610823565b80601f016020809104026020016040519081016040528092919081815260200182805461032b90610823565b80156103785780601f1061034d57610100808354040283529160200191610378565b820191906000526020600020905b81548152906001019060200180831161035b57829003601f168201915b5050505050806020019051810190610390919061090d565b90507f25e9400ad0fddc8c71fc4eb2845b4d0fc13ca66f2a17e1b7e0f544d275234c09826040516103c191906108e3565b60405180910390a16103d53415600f6106b3565b80516103ed906001600160a01b0316331460106106b3565b805160408083015190516001600160a01b039092169181156108fc0291906000818181858888f1935050505015801561042a573d6000803e3d6000fd5b5080606001516001600160a01b03166108fc82602001519081150290604051600060405180830381858888f1935050505015801561046c573d6000803e3d6000fd5b50600080805560018190556104839060029061075c565b5050565b610497600260005414600d6106b3565b6104b1813515806104aa57506001548235145b600e6106b3565b6000808055600280546104c390610823565b80601f01602080910402602001604051908101604052809291908181526020018280546104ef90610823565b801561053c5780601f106105115761010080835404028352916020019161053c565b820191906000526020600020905b81548152906001019060200180831161051f57829003601f168201915b50505050508060200190518101906105549190610874565b90507f82e152e8b1d7e41adffbddbd5b2fe2e130356df9b7ab7d06526a80d7888af3e18260405161058591906108e3565b60405180910390a161059e81604001513414600c6106b3565b604080516080808201835260008083526020808401828152848601838152606080870185815289516001600160a01b03908116808a528b87015186528b8b015185523383526003909755436001558951958601969096529251978401979097525195820195909552935116908301529060a001610299565b60006060600054600280805461062b90610823565b80601f016020809104026020016040519081016040528092919081815260200182805461065790610823565b80156106a45780601f10610679576101008083540402835291602001916106a4565b820191906000526020600020905b81548152906001019060200180831161068757829003601f168201915b50505050509050915091509091565b816104835760405163100960cb60e01b81526004810182905260240160405180910390fd5b8280546106e490610823565b90600052602060002090601f016020900481019282610706576000855561074c565b82601f1061071f57805160ff191683800117855561074c565b8280016001018555821561074c579182015b8281111561074c578251825591602001919060010190610731565b50610758929150610799565b5090565b50805461076890610823565b6000825580601f10610778575050565b601f0160209004906000526020600020908101906107969190610799565b50565b5b80821115610758576000815560010161079a565b6000604082840312156107c057600080fd5b50919050565b82815260006020604081840152835180604085015260005b818110156107fa578581018301518582016060015282016107de565b8181111561080c576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c9082168061083757607f821691505b602082108114156107c057634e487b7160e01b600052602260045260246000fd5b80516001600160a01b038116811461086f57600080fd5b919050565b60006060828403121561088657600080fd5b6040516060810181811067ffffffffffffffff821117156108b757634e487b7160e01b600052604160045260246000fd5b6040526108c383610858565b815260208301516020820152604083015160408201528091505092915050565b813581526040810160208301358015158082146108ff57600080fd5b806020850152505092915050565b60006080828403121561091f57600080fd5b6040516080810181811067ffffffffffffffff8211171561095057634e487b7160e01b600052604160045260246000fd5b60405261095c83610858565b8152602083015160208201526040830151604082015261097e60608401610858565b6060820152939250505056fea26469706673582212200bc51708e5941ddf493d1d87c9df121cf0bf736a75fc1e3e595757798428851464736f6c634300080c0033`,
  BytecodeLen: 3283,
  Which: `oD`,
  version: 6,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:48:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: './index.rsh:50:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:69:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:87:9:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Alice": Alice,
  "Bob": Bob
  };
export const _APIs = {
  };
