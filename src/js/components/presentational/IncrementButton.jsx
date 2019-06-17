import React from 'react';
import PropTypes from 'prop-types';

const IncrementButton = ({ value, increment, color, disabledCondition }) => {
  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    <input
      className={`${color}`}
      key={`increase-${value}`}
      type="button"
      onClick={() => increment(value)}
      disabled={disabledCondition}
      value={`${value}`}
    />
  );
};

IncrementButton.propTypes = {
  value: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
  disabledCondition: PropTypes.bool.isRequired,
  color: PropTypes.string.isRequired
};

export default IncrementButton;
