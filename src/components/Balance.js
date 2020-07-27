import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  const amount = transactions.map((transaction) => transaction.amount);

  const total = amount.reduce((acc, current) => {
    return acc + current;
  }, 0);
  return (
    <>
      <h4>Your Balance</h4>
      <h1 id='balance'>${total.toFixed(2)}</h1>
    </>
  );
};

export default Balance;
