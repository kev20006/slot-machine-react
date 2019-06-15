import React from 'react';
import PropTypes from 'prop-types';

const GameRow = ({ row, rowKey, animate }) => {
  const rowStyles = {
    display: 'flex'
  };

  const renderRow = row.map((element, index) => (
    // manually allowing pattern, as cells have no unique attributes
    // eslint-disable-next-line react/no-array-index-key
    <div key={`${rowKey}-cell-${index}`} className={`game-square ${animate}`}>
      <p>{element.symbol}</p>
    </div>
  ));
  return (
    <div className="game-row" style={rowStyles}>
      {renderRow}
    </div>
  );
};

GameRow.propTypes = {
  row: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object, PropTypes.string])).isRequired,
  rowKey: PropTypes.string.isRequired,
  animate: PropTypes.string.isRequired
};

export default GameRow;
