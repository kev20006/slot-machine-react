import React, { useState } from "react";
import BalanceDisplay from "../presentational/BalanceDisplay";
import GameGrid from "../presentational/GameGrid"
import ReactDOM from "react-dom";

function SlotMachine(){
    const [balance, setBalance] = useState(0);
    const [stake, setStake] = useState(0);
    const [errorState, setErrorState] = useState("");
    const [gameBoard, setGameBoard] = useState([["","",""],
                                                ["","",""],
                                                ["","",""],
                                                ["","",""]]);

    //functions for managing users money
    const addBalance = (value) => setBalance(balance + value);
    const placeBet = (value) => {
        if (value <= balance){
            setBalance(balance - value);
            setStake(value);
            newGameBoard();
        }
        else{
            setErrorState("Not Enough Credit");
        }
        
    };

    //functions for game
    const genSymbol = () => {
        //function to randomly generate symbol and coefficient
        let randomNumber = Math.floor(Math.random() * 100) + 1;
        switch(true){
            case randomNumber <= 45:
                return {symbol: "A", coefficient: 0.4};
            case randomNumber > 45 && randomNumber <= 80:
                return {symbol: "B", coefficient: 0.6};
            case randomNumber > 80 && randomNumber <= 95:
                return {symbol: "P", coefficient: 0.8};
            case randomNumber >= 95:
                return {symbol: "*", coefficient: 0}
        }
    }

    const newGameBoard = () =>{
        // function to generate a new randomised game board
        let board= []        
        for (let i = 0; i < 4; i ++){
            let row = []
            for ( let j = 0; j < 3; j++){
                row.push(genSymbol())
            }
            board.push(row);
        }
        setGameBoard(board);
    }

    const moneyActions = {
        addBalance: addBalance,
        placeBet: placeBet
    };

    return(
        <div id="slot-machine">
            <BalanceDisplay 
                balance={balance} 
                actions={{
                    addBalance: addBalance,
                    placeBet: placeBet
                }}
                stake= {stake}
                errorState= {errorState}
            />
            <GameGrid board={gameBoard}/>
        </div>
    )
}

export default SlotMachine;

const appContainer = document.querySelector("#app");
app? ReactDOM.render(<SlotMachine />, appContainer): false;
