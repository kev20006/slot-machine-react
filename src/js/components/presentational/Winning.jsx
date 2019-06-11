import React from 'react';
import PropTypes from 'prop-types';

const Winning = ({ isPrize, addWinning, prize, coefficient, stake }) => {
  if (isPrize) {
    addWinning(prize);
  }
  return (
    <div>
      {prize ? (
        <h3>{`You win: ${coefficient}*${stake}=${prize}`}</h3>
      ) : (
        <h3> No Winning Rows ths time</h3>
      )}
    </div>
  );
};

Winning.propTypes = {
  isPrize: PropTypes.bool.isRequired,
  addWinning: PropTypes.func.isRequired,
  prize: PropTypes.number.isRequired,
  coefficient: PropTypes.number.isRequired,
  stake: PropTypes.number.isRequired
};
export default Winning;
