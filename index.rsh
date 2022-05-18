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

};

export const main = Reach.App(() => {
  const A = Participant('Alice', {
    ...Common,
  //  setchallenge: Fun([], Tuple(UInt, UInt, UInt)),
  reward: UInt,
  payment: UInt, 
  deadline: UInt,
  });

  const B = Participant('Bob', {
    ...Common,
    accchallenge: Fun([UInt, UInt], Bool),
    termsAccepted: Bool,
    Response1: Bytes(128),
//    ichoice: UInt,
  });
  init();

  A.only(() => {
    const reward = declassify(interact.reward);  
    const deadline = declassify(interact.deadline);
    const payment = declassify(interact.payment);
  //  const price0 = declassify(interact.price0);
  //  const price1 = declassify(interact.price1);
  //  const price2 = declassify(interact.price2);
 
  //  const [ reward, payment, deadline ]
  //   = declassify(interact.setchallenge());
    });

  A.publish(reward, payment, deadline);
  commit();
  A.pay(reward );
  commit();
  /* A.publish(reward);
  commit();
  A.publish(price0);
  commit();
  A.publish(price1);
  commit();
  A.publish(price2);
  commit();
*/
  B.only(() => {
  //const ichoice = declassify(interact.ichoice);

 // const bwhen = 
   const termsAccepted =
   declassify(interact.accchallenge(reward, payment));
  });
  
  B.pay(payment)
  commit();



 // .when(bwhen)
 // .timeout(relativeTime(deadline), () => {
 //   A.publish();
 //   transfer(reward).to(A);
 //   each([A, B], () => interact.informTimeout());
 //   commit();
 //   exit();
 // });


A.publish();
transfer(payment).to(A);
transfer(reward).to(B);
each([A, B], () => interact.seeTransfer());
commit();

exit();
})