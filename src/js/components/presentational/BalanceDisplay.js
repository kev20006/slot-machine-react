import React from "react";
import AddBalance from "./AddBalance"
import ManageBalance from "./ManageBalance"

const BalanceDisplay = (props) => {
    console.log(props);
    return(
        <div>
            <h1>Current Balance: {props.balance}</h1>
            {<h3>Last Stake: {props.stake}</h3>}
            <input id="money-input" type="number" />
            {!props.balance?
                <AddBalance action={props.actions.addBalance}/>:
                <ManageBalance
                    balance = {props.balance} 
                    action={props.actions.placeBet}
                    errorState={props.errorState}
                />
            }   
        </div>
        
    )
}

export default BalanceDisplay;