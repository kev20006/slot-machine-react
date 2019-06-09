import React from "react";
import GameRow from "./GameRow";

const GameGrid = (props) => {
    console.log(props)
    return(
        <div>
            {props.board.map(element=> <GameRow row={element}/>)}
        </div>
    )
}

export default GameGrid;