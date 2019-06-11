/* eslint-disable import/extensions */
import React, { useState } from 'react';

import Balance from './Balance.jsx';
import GameGrid from '../presentational/GameGrid.jsx';
import Winning from '../presentational/Winning.jsx';

function App() {
  const [balance, setBalance] = useState(0);
  const [stake, setStake] = useState(0);
  const [errorState, setErrorState] = useState('');
  const [gameBoard, setGameBoard] = useState([
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ]);
  const [coefficient, setCoefficient] = useState(0);
  const [prize, setPrize] = useState(false);

  const addWinning = newPrize => {
    setPrize(false);
    // eslint-disable-next-line no-shadow
    setBalance(balance + newPrize);
  };

  // functions for game logic
  const genSymbol = () => {
    // function to randomly generate symbol and coefficient
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    switch (true) {
      case randomNumber <= 45:
        return { symbol: 'A', coefficient: 4 };
      case randomNumber > 45 && randomNumber <= 80:
        return { symbol: 'B', coefficient: 6 };
      case randomNumber > 80 && randomNumber <= 95:
        return { symbol: 'P', coefficient: 8 };
      case randomNumber >= 95:
        return { symbol: '*', coefficient: 0 };
      default:
        return 0;
    }
  };

  // functions to calculate winnings
  const hasWon = row => {
    // function to determine if a Row has won
    const totals = {};
    row.forEach(element => {
      totals[element.symbol] = totals[element.symbol] ? totals[element.symbol] + 1 : 1;
    });
    if (Object.keys(totals).length === 1 || (Object.keys(totals).length === 2 && totals['*'])) {
      return true;
    }
    return false;
  };

  const calcPrizeRow = row => {
    // return total coefficient for a row
    const reducer = (accumulator, element) => {
      return accumulator + element.coefficient;
    };
    const total = row.reduce(reducer, 0);
    return total / 10;
  };

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
        boardTotal += calcPrizeRow(board[i]);
      }
    }
    return {
      board,
      boardTotal
    };
  };

  const newSpin = () => {
    const board = newGameBoard();
    setGameBoard(board.board);
    setCoefficient(board.boardTotal);
  };

  return (
    <div id="slot-machine">
      <Balance
        balance={balance}
        setBalance={setBalance}
        newSpin={newSpin}
        stake={stake}
        setStake={setStake}
        errorState={errorState}
        setErrorState={setErrorState}
        setPrize={setPrize}
      />
      <GameGrid board={gameBoard} hasWon={hasWon} calcPrize={calcPrizeRow} />
      <Winning
        board={gameBoard}
        coefficient={coefficient}
        stake={stake}
        balance={balance}
        prize={stake * coefficient}
        isPrize={prize}
        addWinning={addWinning}
      />
    </div>
  );
}

export default App;
