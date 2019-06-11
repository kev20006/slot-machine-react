/* eslint-disable import/extensions */
import React from 'react';
import PropTypes from 'prop-types';
import BalanceDisplay from '../presentational/BalanceDisplay.jsx';

const Balance = ({
  balance,
  setBalance,
  stake,
  setStake,
  newSpin,
  setErrorState,
  setPrize,
  errorState
}) => {
  const addBalance = value => {
    if (!value || typeof value !== 'number') {
      setErrorState('Invalid Balance');
    } else {
      setBalance(balance + value);
    }
  };

  const placeBet = newStake => {
    if (newStake <= balance) {
      setStake(newStake);
      newSpin();
      // eslint-disable-next-line no-shadow
      setBalance(balance => balance - newStake);
      setPrize(true);
    } else {
      setErrorState('Not Enough Credit');
    }
  };

  return (
    <BalanceDisplay
      balance={balance}
      addBalance={addBalance}
      placeBet={placeBet}
      stake={stake}
      errorState={errorState}
    />
  );
};

Balance.propTypes = {
  balance: PropTypes.number.isRequired,
  setBalance: PropTypes.func.isRequired,
  stake: PropTypes.number.isRequired,
  setStake: PropTypes.func.isRequired,
  newSpin: PropTypes.func.isRequired,
  errorState: PropTypes.string.isRequired,
  setErrorState: PropTypes.func.isRequired,
  setPrize: PropTypes.func.isRequired
};

export default Balance;
