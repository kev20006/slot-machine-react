/* eslint-disable import/extensions */
import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import AddBalance from './AddBalance.jsx';
import ManageBalance from './ManageBalance.jsx';

const BalanceDisplay = ({ balance, addBalance, placeBet, stake, errorState }) => {
  const moneyInput = useRef(null);

  const getBalance = () => {
    return parseInt(moneyInput.current.value, 10);
  };
  const clearBalance = () => {
    moneyInput.current.value = ``;
  };
  return (
    <div>
      <h1>
        Current Balance:
        {balance}
      </h1>
      {
        <h3>
          Last Stake:
          {stake}
        </h3>
      }
      <input id="money-input" type="number" ref={moneyInput} />
      {!balance ? (
        <AddBalance
          addBalance={addBalance}
          errorState={errorState}
          getBalance={getBalance}
          clearBalance={clearBalance}
        />
      ) : (
        <ManageBalance
          placeBet={placeBet}
          errorState={errorState}
          getBalance={getBalance}
          clearBalance={clearBalance}
        />
      )}
    </div>
  );
};

BalanceDisplay.propTypes = {
  balance: PropTypes.number.isRequired,
  addBalance: PropTypes.func.isRequired,
  stake: PropTypes.number.isRequired,
  placeBet: PropTypes.func.isRequired,
  errorState: PropTypes.string.isRequired
};

export default BalanceDisplay;
