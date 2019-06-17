import React from 'react';
import PropTypes from 'prop-types';
// eslint-disable-next-line import/extensions
import IncrementButtonsArray from '../IncrementButtonsArray.jsx';

const TransferBalancePopup = ({ transferWinnings, winnings, balance, setTransferOpen }) => {
  return (
    <div className="pop-up">
      <h3>Transfer Winnings</h3>
      <p> Winnings</p>
      <p>{winnings}</p>
      <p> Balance</p>
      <p>{balance}</p>
      <div className="button-wrapper">
        {IncrementButtonsArray({
          upperBound: winnings,
          value: 0,
          array: [
            { buttonVal: 1000, color: 'orange', message: 'transfer' },
            { buttonVal: 100, color: 'yellow', message: 'transfer' },
            { buttonVal: 10, color: 'grey', message: 'transfer' }
          ],
          increment: transferWinnings
        })}
        <input type="button" value="done" className="red" onClick={() => setTransferOpen(false)} />
      </div>
    </div>
  );
};

TransferBalancePopup.propTypes = {
  transferWinnings: PropTypes.func.isRequired,
  winnings: PropTypes.number.isRequired,
  balance: PropTypes.number.isRequired,
  setTransferOpen: PropTypes.func.isRequired
};

export default TransferBalancePopup;
