/* eslint-disable import/extensions */
import React from 'react';
import PropTypes from 'prop-types';

const BetDisplay = ({ balance, stake, winnings }) => {
  return (
    <div>
      <div className="bet-wrapper">
        <div className="value-display">
          <h4>Credits:</h4>
          <h4 className="lcd">{balance}</h4>
        </div>
        <div className="value-display">
          <h4>Bet Stake:</h4>
          <h4 className="lcd">{stake}</h4>
        </div>
        <div className="value-display">
          <h4>Winnings:</h4>
          <h4 className="lcd">{winnings}</h4>
        </div>
      </div>
    </div>
  );
};

BetDisplay.propTypes = {
  balance: PropTypes.number.isRequired,
  stake: PropTypes.number.isRequired,
  winnings: PropTypes.number.isRequired
};

export default BetDisplay;
