/* eslint-disable import/extensions */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import PlaceBet from './PlaceBet.jsx';
import IncrementButtonsArray from '../IncrementButtonsArray.jsx';
import TransferBalancePopup from './TransferBalancePopup.jsx';

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
  const [transferOpen, setTransferOpen] = useState(false);
  return (
    <div className="controls-wrapper">
      {transferOpen ? (
        <TransferBalancePopup
          transferWinnings={transferWinnings}
          winnings={winnings}
          balance={balance}
          setTransferOpen={setTransferOpen}
        />
      ) : null}
      <div className="small-buttons">
        <div className="bet-controls">
          {IncrementButtonsArray({
            upperBound: balance,
            value: stake,
            array: [
              { buttonVal: 1000, color: 'orange', message: 'bet' },
              { buttonVal: 100, color: 'yellow', message: 'bet' },
              { buttonVal: 10, color: 'grey', message: 'bet' }
            ],
            increment: increaseStake
          })}
          <input
            className="green"
            type="button"
            onClick={() => increaseStake(balance)}
            value="Max"
            disabled={balance === stake}
          />
        </div>
        <div className="transfer-controls">
          <input
            className="purple"
            type="button"
            onClick={() => setTransferOpen(true)}
            value="Transfer Winnings"
            disabled={!winnings}
          />
          <input
            className="blue"
            type="button"
            onClick={() => clearStake()}
            value="Clear"
            disabled={!stake}
          />
        </div>
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
