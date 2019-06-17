import React from 'react';
import PropTypes from 'prop-types';

const GameRow = ({ row, rowKey, animate }) => {
  const colorClassMap = {
    '*': 'purple',
    A: 'green',
    B: 'yellow',
    P: 'blue',
    X: 'grey'
  };
  const renderRow = row.map((element, index) => (
    <div
      // manually allowing pattern, as cells have no unique attributes
      // eslint-disable-next-line react/no-array-index-key
      key={`${rowKey}-cell-${index}`}
      animate={animate}
      symbol={element.symbol}
      className={`game-square ${animate} ${colorClassMap[element.symbol]}`}
    >
      <p>{element.symbol}</p>
    </div>
  ));
  return <div className="game-row">{renderRow}</div>;
};

GameRow.propTypes = {
  row: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object, PropTypes.string])).isRequired,
  rowKey: PropTypes.string.isRequired,
  animate: PropTypes.string.isRequired
};

export default GameRow;
