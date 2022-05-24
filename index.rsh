'reach 0.1';

const Common = {
  ...hasRandom,
  informTimeout: Fun([], Null),
  seeTransfer: Fun([], Null),
  Task1: Bytes(128),
  Task2: Bytes(128),
  Task3: Bytes(128),
  Task04: Bytes(128),
  Task5: Bytes(128),
  Task6: Bytes(128),
  Task7: Bytes(128), 
  settingtasks: Fun([], Bool),
  setTask1: Fun([], Null),
  setTask2: Fun([], Null),
  setTask3: Fun([], Null),
  setTask04: Fun([], Null),
  setTask5: Fun([], Null),
  setTask6: Fun([], Null),
  setTask7: Fun([], Null),
  taskFinish: Fun([], Bool),
  starting: Bool,
  donetasks: Bool,
};

export const main = Reach.App(() => {
  const A = Participant('Alice', {
    ...Common,
  reward: UInt,
  payment: UInt, 
  deadline: UInt,
  });

  const B = Participant('Bob', {
    ...Common,
    accchallenge: Fun([UInt], Null),
    termsAccepted: Bool,
    Response1: Bytes(128),
  });
  init();

  A.only(() => {
    const reward = declassify(interact.reward);  
    const deadline = declassify(interact.deadline);
    const payment = declassify(interact.payment);
    });

  A.publish(reward, payment, deadline);
  commit();
  A.pay(reward);
  commit();
  
  B.only(() => {
 
   const termsAccepted =
   declassify(interact.accchallenge(payment));
  });
  
  B.pay(payment);

  // To make the program pause to engage in the tasks.
  B.only(() => {const starting = declassify(interact.settingtasks());
  });

  /*
  //Possible hooks for rewarding individual tasks.
  // Not cuurently in use
  B.only(() =>{interact.setTask1();
                interact.setTask2();
                interact.setTask3();
                interact.setTask04();
                interact.setTask5();
                interact.setTask6();
                interact.setTask7();
  });
*/
B.only(() => {const donetasks = declassify(interact.taskFinish());
});
transfer(payment).to(A);
transfer(reward).to(B);

each([A, B], () => interact.seeTransfer());
commit();

exit();

})