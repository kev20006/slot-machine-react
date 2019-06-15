/* eslint-disable import/extensions */
import React from 'react';
import PropTypes from 'prop-types';
import GameRow from './GameRow.jsx';

const GameGrid = ({ board, animate }) => {
  return (
    <div className="game-grid">
      {board.map((element, index) => (
        // manually allowing pattern, as rows have no unique attributes
        <GameRow
          // eslint-disable-next-line react/no-array-index-key
          key={`row-${index}`}
          row={element}
          rowKey={`row-${index}`}
          animate={animate}
        />
      ))}
    </div>
  );
};

GameGrid.propTypes = {
  board: PropTypes.arrayOf(
    PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object, PropTypes.string]))
  ).isRequired,
  animate: PropTypes.string.isRequired
};

export default GameGrid;
