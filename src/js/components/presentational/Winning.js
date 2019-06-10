import React from "react";

const Winning = (props) => {
    console.log(props)
    return(
        <div>
            {props.prize?
                <h3>You win:{props.coefficient} * {props.stake} =  {props.prize}</h3>:
                <h3> No Winning Rows ths time</h3>
            }  
        </div>
        
    )
}

export default Winning;