/* eslint-disable import/extensions */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import NewBalancePopUp from './NewBalancePopUp.jsx';

const AddBalance = ({ addBalance }) => {
  const [popUpState, setPopUpState] = useState(false);
  return (
    <div>
      {popUpState && (
        <NewBalancePopUp
          addBalance={addBalance}
          popupState={popUpState}
          setPopUpState={setPopUpState}
        />
      )}

      <input
        id="add-balance"
        onClick={() => setPopUpState('notHidden')}
        className="flat-button"
        type="button"
        value="add credit"
      />
    </div>
  );
};

AddBalance.propTypes = {
  addBalance: PropTypes.func.isRequired
};

export default AddBalance;
