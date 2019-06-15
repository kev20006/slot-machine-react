/* eslint-disable import/extensions */
import React from 'react';
import PropTypes from 'prop-types';
import PlaceBet from './PlaceBet.jsx';
import IncrementButtonsArray from './IncrementButtonsArray.jsx';

const BetControls = ({
  balance,
  stake,
  increaseStake,
  clearStake,
  placeBet,
  errorState,
  transferWinnings,
  winnings
}) => {
  return (
    <div className="controls-wrapper">
      <div className="bet-controls">
        <input type="button" onClick={() => clearStake()} value="Clear" disabled={!stake} />
        {IncrementButtonsArray({
          upperBound: balance,
          value: stake,
          increment: increaseStake
        })}
      </div>
      <div className="transfer-controls">
        {IncrementButtonsArray({
          upperBound: winnings,
          value: 0,
          increment: transferWinnings
        })}
      </div>
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
  errorState: PropTypes.string.isRequired,
  transferWinnings: PropTypes.func.isRequired,
  winnings: PropTypes.number.isRequired
};

export default BetControls;
