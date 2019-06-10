import React from "react";
import GameRow from "./GameRow";

const GameGrid = (props) => {
    console.log(props)
    return(
        <div>
            {props.board.map((element, index)=> <GameRow key={"row-" + index} row={element} actions={props.actions}/>)}
        </div>
    )
}

export default GameGrid;