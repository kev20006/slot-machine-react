/* eslint-disable import/extensions */
import React from 'react';
import PropTypes from 'prop-types';

const BetDisplay = ({ balance, stake, prize }) => {
  return (
    <div>
      <div className="bet-wrapper">
        <div>
          <h4>Credits:</h4>
          <h4 className="lcd">{balance}</h4>
        </div>
        <div>
          <h4>Bet Stake:</h4>
          <h4 className="lcd">{stake}</h4>
        </div>
        <div>
          <h4>Winnings:</h4>
          <h4 className="lcd">{prize}</h4>
        </div>
      </div>
    </div>
  );
};

BetDisplay.propTypes = {
  balance: PropTypes.number.isRequired,
  stake: PropTypes.number.isRequired,
  prize: PropTypes.number.isRequired
};

export default BetDisplay;
