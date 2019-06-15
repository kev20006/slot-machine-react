import genSymbol from './genRandomSymbol';
import hasWon from './hasWon';
import rowTotal from './rowTotal';

const newGameBoard = () => {
  // function to generate a new randomised game board
  // and determine winning value
  const board = [];
  let boardTotal = 0;
  for (let i = 0; i < 4; i += 1) {
    board.push([]);
    for (let j = 0; j < 3; j += 1) {
      board[i].push(genSymbol());
    }
    if (hasWon(board[i])) {
      boardTotal += rowTotal(board[i]);
    }
  }
  return {
    board,
    boardTotal: boardTotal / 10
  };
};

export default newGameBoard;
