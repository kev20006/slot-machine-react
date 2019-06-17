import React from 'react';
import PropTypes from 'prop-types';

const Winning = ({
  isPrize,
  setIsPrize,
  prize,
  coefficient,
  stake,
  setWinnings,
  errorState,
  setErrorState
}) => {
  const addWinning = newPrize => {
    setIsPrize(false);
    // eslint-disable-next-line no-shadow
    setWinnings(winnings => winnings + newPrize);
  };

  if (isPrize) {
    setErrorState(`you win: ${stake} * ${coefficient} = ${prize}`);
    addWinning(prize);
  }
  return (
    <div>
      <p className="win-display">{errorState}</p>
    </div>
  );
};

Winning.propTypes = {
  isPrize: PropTypes.bool.isRequired,
  setIsPrize: PropTypes.func.isRequired,
  setWinnings: PropTypes.func.isRequired,
  prize: PropTypes.number.isRequired,
  coefficient: PropTypes.number.isRequired,
  stake: PropTypes.number.isRequired,
  errorState: PropTypes.string.isRequired,
  setErrorState: PropTypes.func.isRequired
};
export default Winning;
