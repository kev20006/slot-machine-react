/* eslint-disable import/extensions */
import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import AddBalance from '../presentational/headercomponents/AddBalance.jsx';

const Header = ({ setBalance, setErrorState, errorState, balance }) => {
  const moneyInput = useRef(null);
  const addBalance = value => {
    if (!value || typeof value !== 'number') {
      setErrorState('please enter a value');
    } else {
      // eslint-disable-next-line no-shadow
      setBalance(balance => balance + value);
    }
  };
  const getBalance = () => {
    return parseInt(moneyInput.current.value, 10);
  };
  const clearBalance = () => {
    moneyInput.current.value = ``;
  };
  return (
    <div className="slot-header">
      <AddBalance
        addBalance={addBalance}
        errorState={errorState}
        getBalance={getBalance}
        clearBalance={clearBalance}
      />
      <input
        type="button"
        value="cash out"
        className="green"
        onClick={() => {
          // this is pure placeholder - i understand that alerts are bad practice
          // eslint-disable-next-line no-alert
          // eslint-disable-next-line no-undef
          alert(`Adding ${balance} to your account `);
        }}
      />
    </div>
  );
};

Header.propTypes = {
  setBalance: PropTypes.func.isRequired,
  setErrorState: PropTypes.func.isRequired,
  errorState: PropTypes.string.isRequired,
  balance: PropTypes.number.isRequired
};
export default Header;
