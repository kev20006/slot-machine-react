import React, { useState, useEffect } from "react";
import BalanceDisplay from "../presentational/BalanceDisplay";
import GameGrid from "../presentational/GameGrid"
import Winning from "../presentational/Winning"
import ReactDOM from "react-dom";

function SlotMachine(){
    
    const [balance, setBalance] = useState(0);
    const [stake, setStake] = useState(0);
    const [errorState, setErrorState] = useState("");
    const [gameBoard, setGameBoard] = useState([["","",""],
                                                ["","",""],
                                                ["","",""],
                                                ["","",""]]);
    const [coefficient, setCoefficient] = useState(0);
    const [prize, setPrize] = useState(0);

    
    //function to for a turn in the game
    // and update state
    const newSpin = () => {
        setCoefficient(0);   
        newGameBoard();     
    };

    //functions for managing users money
    const addBalance = (value) => {
        if(!value || typeof(value) !== "number"){
            setErrorState("Invalid Balance");
        }
        else{
            setBalance(balance => balance + value);
        }
    };
    
    const placeBet = (stake) => {
        if(stake <= balance){
            newSpin()
            setStake(stake);
            console.log(balance)
            setBalance(balance => balance - stake);
            setPrize(true);
        }
        else{
            setErrorState("Not Enough Credit");
        }
    }
   

    const addWinning = (prize) => {
        setPrize(false);
        setBalance(balance => balance + prize);
    }


    //functions for game logic
    const genSymbol = () => {
        //function to randomly generate symbol and coefficient
        let randomNumber = Math.floor(Math.random() * 100) + 1;
        switch(true){
            case randomNumber <= 45:
                return {symbol: "A", coefficient: 4};
            case randomNumber > 45 && randomNumber <= 80:
                return {symbol: "B", coefficient: 6};
            case randomNumber > 80 && randomNumber <= 95:
                return {symbol: "P", coefficient: 8};
            case randomNumber >= 95:
                return {symbol: "*", coefficient: 0}
        }
    }

    const newGameBoard = (setup) =>{
        // function to generate a new randomised game board
        // and determine winning value
        let board= []
        let boardTotal = 0        
        for (let i = 0; i < 4; i ++){
            let row = []
            for ( let j = 0; j < 3; j++){
                row.push(genSymbol())
            }
            board.push(row);
            if(hasWon(row)) boardTotal += calcPrizeRow(row)
            setup
        }
        setCoefficient(coefficient => coefficient + boardTotal);
        setGameBoard(board);
    }

    //functions to calculate winnings
    const hasWon = (row) => {
        //function to determine if a Row has won
        let totals = {};
        row.forEach(element => {
            totals[element.symbol]= totals[element.symbol]? totals[element.symbol] + 1 : 1; 
        })
        if(Object.keys(totals).length == 1 || (Object.keys(totals).length == 2 && totals["*"])){
            return true;
        }
        return false; 
    };
    
    
    const calcPrizeRow = (row) => {
        //return total coefficient for a row
        const reducer = (accumulator, element) => {
            return accumulator + element.coefficient
        };
        let total = row.reduce(reducer, 0)
        return total/10;
    };

    
    
    return(
        <div id="slot-machine">
            <BalanceDisplay 
                balance={balance} 
                actions={{
                    addBalance: addBalance,
                    newSpin: placeBet
                }}
                stake= {stake}
                errorState= {errorState}
            />
            <GameGrid board={gameBoard}
                      actions={{
                        hasWon: hasWon,
                        calcPrize:calcPrizeRow
                      }}
            />
            <Winning board = {gameBoard}
                    coefficient= {coefficient}
                    stake = {stake}
                    balance = {balance}
                    prize = {stake * coefficient}
                    isPrize = { prize }
                    actions = {{
                        addWinning: addWinning
                    }}   
            />
        </div>
    )
}

export default SlotMachine;

const appContainer = document.querySelector("#app");
app? ReactDOM.render(<SlotMachine />, appContainer): false;
