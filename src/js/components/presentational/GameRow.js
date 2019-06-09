import React from "react";

const GameRow = (props) => {
    const styleObject = {
        border: "1px solid black",
        display: "inline-block"
    }
    const row = props.row.map(element => <div style={styleObject}>{element.symbol}</div>)
    return(
        <div>
            {row}   
        </div>
        
    )
}

export default GameRow;