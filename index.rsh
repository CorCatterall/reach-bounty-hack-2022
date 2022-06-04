'reach 0.1';

const Common = {
  ...hasRandom,
  informTimeout: Fun([], Null),
  seeTransfer: Fun([UInt,UInt], Null),
  Task1: Bytes(128),
  Task2: Bytes(128),
  Task3: Bytes(128),
  Task04: Bytes(128),
  Task5: Bytes(128),
  Task6: Bytes(128),
  Task7: Bytes(128), 
  settingtasks: Fun([], Null),
  setTask1: Fun([], Null),
  setTask2: Fun([], Null),
  setTask3: Fun([], Null),
  setTask04: Fun([], Null),
  setTask5: Fun([], Null),
  setTask6: Fun([], Null),
  setTask7: Fun([], Null),
  taskFinish: Fun([], Null),
  checkstart: Bool,
  checkfinish: Bool,
  checktask1: Bool,
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
    accchallenge: Fun([UInt,UInt], Null),
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
   declassify(interact.accchallenge(payment, reward));
  });
  
  B.pay(payment);

  // To make the program pause to engage in the tasks.
  B.only(() => {const checkstart = declassify(interact.settingtasks());
  });
  commit();
  B.publish(checkstart);
  B.only(() => {const checktask1 = declassify(interact.setTask1());
  });
  // commit();
  // B.publish(checktask1);
  B.only(() => {const checktask2 = declassify(interact.setTask2());
  });
  // commit();
  // B.publish(checktask2);
  B.only(() => {const checktask3 = declassify(interact.setTask3());
  });
 // commit();
 // B.publish(checktask3);
  B.only(() => {const checktask04 = declassify(interact.setTask04());
  });
 // commit();
 // B.publish(checktask04);
  B.only(() => {const checktask5 = declassify(interact.setTask5());
  });
 // commit();
 //  B.publish(checktask5);
  B.only(() => {const checktask6 = declassify(interact.setTask6());
  });
 // commit();
 // B.publish(checktask6);
  B.only(() => {const checktask7 = declassify(interact.setTask7());
  });
// commit();
//  B.publish(checktask7);
  
B.only(() => {const checkfinish = declassify(interact.taskFinish());
});
commit();
B.publish(checkfinish);

transfer(payment).to(A);
transfer(reward).to(B);

each([A, B], () => interact.seeTransfer(payment,reward));
commit();

exit();

})