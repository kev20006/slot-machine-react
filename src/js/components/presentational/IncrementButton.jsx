import React from 'react';
import PropTypes from 'prop-types';

const IncrementButton = ({ value, increment, disabledCondition }) => {
  return (
    <input
      key={`increase-${value}`}
      type="button"
      onClick={() => increment(value)}
      value={value}
      disabled={disabledCondition}
    />
  );
};

IncrementButton.propTypes = {
  value: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
  disabledCondition: PropTypes.bool.isRequired
};

export default IncrementButton;
