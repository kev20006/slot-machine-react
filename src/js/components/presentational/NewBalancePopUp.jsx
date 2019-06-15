import React, { useState } from 'react';
import PropTypes from 'prop-types';
// eslint-disable-next-line import/extensions
import IncrementButton from './IncrementButton.jsx';

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
        {[1000, 100, 10].map(element => {
          return (
            <IncrementButton
              key={element}
              value={element}
              increment={updateNewBalance}
              disabledCondition={false}
            />
          );
        })}
        <input type="button" value="add new balance" onClick={() => updateBalance()} />
      </div>
    </div>
  );
};

NewBalancePopUp.propTypes = {
  addBalance: PropTypes.func.isRequired,
  setPopUpState: PropTypes.func.isRequired
};

export default NewBalancePopUp;
