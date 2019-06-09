import React from "react";

const AddBalance = (balance) => {
    console.log(balance)
    return(
        <div>
            <input type="button" onClick={()=>{
                    balance.action(parseInt(document.querySelector("#money-input").value))
                    document.querySelector("#money-input").value = "";
            }} value="add money"/>    
        </div>
        
    )
}

export default AddBalance;