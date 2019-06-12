import React from 'react';
import PropTypes from 'prop-types';

const PlaceBet = ({ placeBet, stake }) => {
  return (
    <div>
      <input
        type="button"
        onClick={() => {
          placeBet(stake);
        }}
        value="SPIN"
        disabled={!stake}
      />
    </div>
  );
};

PlaceBet.propTypes = {
  placeBet: PropTypes.func.isRequired,
  stake: PropTypes.number.isRequired
};

export default PlaceBet;
