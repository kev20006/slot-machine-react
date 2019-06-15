/* eslint-disable import/extensions */
import React, { useState } from 'react';

import Bet from './Bet.jsx';
import Header from './Header.jsx';
import GameGrid from '../presentational/GameGrid.jsx';
import Winning from '../presentational/Winning.jsx';
import logic from '../logic/logicWrapper';

import '../../../styles/css/app.css';

const App = () => {
  const [balance, setBalance] = useState(0);
  const [stake, setStake] = useState(0);
  const [lastStake, setLastStake] = useState(0);
  const [errorState, setErrorState] = useState('');
  const [coefficient, setCoefficient] = useState(0);
  const [isPrize, setIsPrize] = useState(false);
  const [prize, setPrize] = useState(0);
  const [winnings, setWinnings] = useState(0);
  const [animate, setAnimate] = useState('');
  const [gameBoard, setGameBoard] = useState(
    (object => {
      const board = [];
      for (let i = 0; i <= 3; i += 1) {
        board.push([]);
        for (let j = 0; j <= 2; j += 1) {
          board[i].push(object);
        }
      }
      return board;
    })({
      symbol: 'X',
      coefficient: 0
    })
  );
  // eslint-disable-next-line no-unused-vars
  const [hasWon, rowTotal, newGameBoard] = logic;

  const newSpin = () => {
    setAnimate('rotate');
    setGameBoard(newGameBoard().board);
    setTimeout(() => {
      setAnimate('');
      const board = newGameBoard();
      setCoefficient(board.boardTotal);
      setPrize(stake * board.boardTotal);
      setLastStake(stake);
      setStake(0);
    }, 1000);
  };

  return (
    <div className="test" id="slot-machine">
      <Header setBalance={setBalance} setErrorState={setErrorState} errorState={errorState} />
      <GameGrid board={gameBoard} animate={animate} />
      <Winning
        balance={balance}
        setIsPrize={setIsPrize}
        setWinnings={setWinnings}
        isPrize={isPrize}
        prize={prize}
        coefficient={coefficient}
        stake={lastStake}
        errorState={errorState}
        setErrorState={setErrorState}
      />
      <Bet
        balance={balance}
        setBalance={setBalance}
        newSpin={newSpin}
        stake={stake}
        winnings={winnings}
        setStake={setStake}
        errorState={errorState}
        setErrorState={setErrorState}
        setIsPrize={setIsPrize}
        setWinnings={setWinnings}
      />
    </div>
  );
};

export default App;
