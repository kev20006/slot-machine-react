import React from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line import/extensions
import IncrementButton from './IncrementButton.jsx';

const IncrementButtonsArray = ({ upperBound, value, increment, array }) => {
  return array.map(({ buttonVal, color, message }) => {
    return (
      <IncrementButton
        key={`${message}-${buttonVal}`}
        value={buttonVal}
        color={color}
        increment={increment}
        message={message}
        disabledCondition={upperBound === 0 || upperBound < value + buttonVal}
      />
    );
  });
};

IncrementButtonsArray.PropTypes = {
  upperBound: PropTypes.number,
  array: PropTypes.arrayOf(PropTypes.object).isRequired,
  value: PropTypes.number,
  increment: PropTypes.func.isRequired,
  message: PropTypes.string.isRequired
};

export default IncrementButtonsArray;
