/* eslint-disable no-shadow */
/* eslint-disable import/extensions */
import React from 'react';
import PropTypes from 'prop-types';
import BetDisplay from '../presentational/BetDisplay.jsx';
import BetControls from '../presentational/BetControls.jsx';

const Bet = ({
  balance,
  setBalance,
  stake,
  setStake,
  newSpin,
  setErrorState,
  setIsPrize,
  errorState,
  prize
}) => {
  const placeBet = newStake => {
    if (newStake <= balance) {
      setStake(newStake);
      setBalance(balance => balance - newStake);
      newSpin();
      // eslint-disable-next-line no-shadow
      setIsPrize(true);
    } else {
      setErrorState('Not Enough Credit');
    }
  };

  const increaseStake = value => {
    setStake(stake => stake + value);
  };

  const clearStake = () => {
    setStake(0);
  };

  return (
    <div>
      <BetDisplay balance={balance} stake={stake} prize={prize} />
      <BetControls
        balance={balance}
        stake={stake}
        increaseStake={increaseStake}
        clearStake={clearStake}
        placeBet={placeBet}
        errorState={errorState}
      />
    </div>
  );
};

Bet.propTypes = {
  balance: PropTypes.number.isRequired,
  setBalance: PropTypes.func.isRequired,
  stake: PropTypes.number.isRequired,
  setStake: PropTypes.func.isRequired,
  newSpin: PropTypes.func.isRequired,
  errorState: PropTypes.string.isRequired,
  setErrorState: PropTypes.func.isRequired,
  setIsPrize: PropTypes.func.isRequired,
  prize: PropTypes.number.isRequired
};

export default Bet;
