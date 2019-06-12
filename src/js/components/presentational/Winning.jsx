import React from 'react';
import PropTypes from 'prop-types';

const Winning = ({ isPrize, setIsPrize, prize, coefficient, stake, setBalance }) => {
  const addWinning = newPrize => {
    setIsPrize(false);
    // eslint-disable-next-line no-shadow
    setBalance(balance => balance + newPrize);
  };

  if (isPrize) {
    addWinning(prize);
  }
  return (
    <div>
      {prize ? (
        <p className="lcd">{`You win: ${coefficient}*${stake}=${prize}`}</p>
      ) : (
        <p className="lcd"> No Winning Rows ths time</p>
      )}
    </div>
  );
};

Winning.propTypes = {
  isPrize: PropTypes.bool.isRequired,
  setIsPrize: PropTypes.func.isRequired,
  setBalance: PropTypes.func.isRequired,
  prize: PropTypes.number.isRequired,
  coefficient: PropTypes.number.isRequired,
  stake: PropTypes.number.isRequired
};
export default Winning;
