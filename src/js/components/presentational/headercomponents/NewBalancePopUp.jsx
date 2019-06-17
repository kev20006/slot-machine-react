import React, { useState } from 'react';
import PropTypes from 'prop-types';
// eslint-disable-next-line import/extensions
import IncrementButtonsArray from '../IncrementButtonsArray.jsx';

const NewBalancePopUp = ({ addBalance, setPopUpState }) => {
  const [newBalance, setNewBalance] = useState(0);
  const updateBalance = () => {
    addBalance(newBalance);
    setPopUpState(false);
  };

  const updateNewBalance = value => {
    // eslint-disable-next-line no-shadow
    setNewBalance(newBalance => newBalance + value);
  };

  return (
    <div className="pop-up">
      <h3>New Balance</h3>
      <p>{newBalance}</p>
      <div className="button-wrapper">
        {IncrementButtonsArray({
          upperBound: 1000000,
          value: 0,
          array: [
            { buttonVal: 1000, color: 'orange', message: 'add' },
            { buttonVal: 100, color: 'yellow', message: 'add' },
            { buttonVal: 10, color: 'grey', message: 'add' }
          ],
          increment: updateNewBalance
        })}
        <input
          type="button"
          value="add new balance"
          className="red"
          onClick={() => updateBalance()}
        />
      </div>
    </div>
  );
};

NewBalancePopUp.propTypes = {
  addBalance: PropTypes.func.isRequired,
  setPopUpState: PropTypes.func.isRequired
};

export default NewBalancePopUp;
