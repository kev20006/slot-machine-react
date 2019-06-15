/* eslint-disable import/extensions */
import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import AddBalance from '../presentational/AddBalance.jsx';

const Header = ({ setBalance, setErrorState, errorState }) => {
  const moneyInput = useRef(null);
  const addBalance = value => {
    if (!value || typeof value !== 'number') {
      setErrorState('please enter a value');
    } else {
      setBalance(value);
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
      <div />
      <h1>SLOT MACHINE!!!</h1>
      <AddBalance
        addBalance={addBalance}
        errorState={errorState}
        getBalance={getBalance}
        clearBalance={clearBalance}
      />
    </div>
  );
};

Header.propTypes = {
  setBalance: PropTypes.func.isRequired,
  setErrorState: PropTypes.func.isRequired,
  errorState: PropTypes.string.isRequired
};
export default Header;
