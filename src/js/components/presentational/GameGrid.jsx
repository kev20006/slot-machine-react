/* eslint-disable import/extensions */
import React from 'react';
import PropTypes from 'prop-types';
import GameRow from './GameRow.jsx';

const GameGrid = ({ board, hasWon, calcPrize }) => {
  return (
    <div>
      {board.map((element, index) => (
        // manually allowing pattern, as rows have no unique attributes
        <GameRow
          // eslint-disable-next-line react/no-array-index-key
          key={`row-${index}`}
          row={element}
          hasWon={hasWon}
          calcPrize={calcPrize}
          rowKey={`row-${index}`}
        />
      ))}
    </div>
  );
};

GameGrid.propTypes = {
  hasWon: PropTypes.func.isRequired,
  calcPrize: PropTypes.func.isRequired,
  board: PropTypes.arrayOf(
    PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object, PropTypes.string]))
  ).isRequired
};

export default GameGrid;
