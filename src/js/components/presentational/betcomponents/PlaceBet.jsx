import React from 'react';
import PropTypes from 'prop-types';

const PlaceBet = ({ placeBet, stake }) => {
  return (
    <input
      className="big-button red button"
      type="button"
      onClick={() => {
        placeBet(stake);
      }}
      value="SPIN"
      disabled={!stake}
    />
  );
};

PlaceBet.propTypes = {
  placeBet: PropTypes.func.isRequired,
  stake: PropTypes.number.isRequired
};

export default PlaceBet;
