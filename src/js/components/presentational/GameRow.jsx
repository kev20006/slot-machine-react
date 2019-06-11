import React from 'react';
import PropTypes from 'prop-types';

const GameRow = ({ hasWon, calcPrize, row, rowKey }) => {
  const rowStyles = {
    display: 'flex'
  };

  const cellStyles = {
    border: '1px solid black',
    margin: 2
  };
  const winningRow = hasWon(row) && calcPrize(row);
  const renderRow = row.map((element, index) => (
    // manually allowing pattern, as cells have no unique attributes
    // eslint-disable-next-line react/no-array-index-key
    <div key={`${rowKey}-cell-${index}`} style={cellStyles} className="game-square">
      {element.symbol}
    </div>
  ));
  return (
    <div className="game-row" style={rowStyles}>
      {renderRow}
      {winningRow && <div>{calcPrize(row)}</div>}
    </div>
  );
};

GameRow.propTypes = {
  hasWon: PropTypes.func.isRequired,
  calcPrize: PropTypes.func.isRequired,
  row: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object, PropTypes.string])).isRequired,
  rowKey: PropTypes.string.isRequired
};

export default GameRow;
