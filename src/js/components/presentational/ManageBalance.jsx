import React from 'react';
import PropTypes from 'prop-types';

const ManageBalance = ({ placeBet, errorState, getBalance, clearBalance }) => {
  return (
    <div>
      <input
        type="button"
        onClick={() => {
          placeBet(getBalance());
          clearBalance();
        }}
        value="place bet"
      />
      {errorState === 'Not Enough Credit' && <p>Not Enough Credit</p>}
    </div>
  );
};

ManageBalance.propTypes = {
  placeBet: PropTypes.func.isRequired,
  errorState: PropTypes.string.isRequired,
  getBalance: PropTypes.func.isRequired,
  clearBalance: PropTypes.func.isRequired
};

export default ManageBalance;
