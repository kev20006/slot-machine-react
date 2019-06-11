import React from 'react';
import PropTypes from 'prop-types';

const AddBalance = ({ addBalance, errorState, getBalance, clearBalance }) => {
  return (
    <div>
      <input
        type="button"
        onClick={() => {
          addBalance(getBalance());
          clearBalance();
        }}
        value="add money"
      />
      {errorState === 'Invalid Balance' && <p>Please enter a numerical value</p>}
    </div>
  );
};

AddBalance.propTypes = {
  addBalance: PropTypes.func.isRequired,
  errorState: PropTypes.string.isRequired,
  getBalance: PropTypes.func.isRequired,
  clearBalance: PropTypes.func.isRequired
};

export default AddBalance;
