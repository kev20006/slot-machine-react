/* eslint-disable import/extensions */
import React from 'react';
import PropTypes from 'prop-types';
import PlaceBet from './PlaceBet.jsx';

const BetControls = ({ balance, stake, increaseStake, clearStake, placeBet, errorState }) => {
  const betWrapperStyle = {
    display: 'flex',
    justifyContent: 'space-betweeen',
    alignItems: 'center'
  };

  return (
    <div style={betWrapperStyle}>
      <input type="button" onClick={() => clearStake()} value="Clear" disabled={!stake} />
      {[10, 100, 1000].map(element => {
        return (
          <input
            key={`increase-${element}`}
            type="button"
            onClick={() => increaseStake(element)}
            value={element}
            disabled={balance < element}
          />
        );
      })}
      <PlaceBet placeBet={placeBet} stake={stake} errorState={errorState} />
    </div>
  );
};

BetControls.propTypes = {
  balance: PropTypes.number.isRequired,
  stake: PropTypes.number.isRequired,
  placeBet: PropTypes.func.isRequired,
  increaseStake: PropTypes.func.isRequired,
  clearStake: PropTypes.func.isRequired,
  errorState: PropTypes.string.isRequired
};

export default BetControls;
