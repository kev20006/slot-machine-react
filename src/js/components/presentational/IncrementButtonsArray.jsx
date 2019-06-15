import React from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line import/extensions
import IncrementButton from './IncrementButton.jsx';

const IncrementButtonsArray = ({ upperBound, value, increment }) => {
  return [10, 100, 1000].map(element => {
    return (
      <IncrementButton
        key={element}
        value={element}
        increment={increment}
        disabledCondition={upperBound === 0 || upperBound < value + element}
      />
    );
  });
};

IncrementButtonsArray.PropTypes = {
  upperBound: PropTypes.number,
  value: PropTypes.number,
  increment: PropTypes.func.isRequired
};

export default IncrementButtonsArray;
