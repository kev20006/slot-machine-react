import React from "react";

const GameRow = (props) => {
    const rowStyles = {
        display: "flex",
    };

    const cellStyles = {
        border: "1px solid black",
        margin: 2
    }

    const row = props.row
        .map((element, index) => <div key={"cell-" +index} 
                                        style={cellStyles} 
                                        className="game-square">
                                            {element.symbol}
                                        </div>);
    return(
        <div className="game-row" style={rowStyles}>
            {row}   
            {props.actions.hasWon(props.row)&&(props.actions.calcPrize(props.row)?<div> {props.actions.calcPrize(props.row)}</div>:<div></div>)}
        </div>
    
        
    )
}

export default GameRow;