import React from "react";

const AddBalance = (props) => {
    return(
        <div>
            <input type="button" onClick={()=>{ 
                    props.actions.addBalance(parseInt(document.querySelector("#money-input").value))
                    document.querySelector("#money-input").value = "";
            }} value="add money"/>   
            {props.errorState == "Invalid Balance" && <p>Please enter a numerical value</p>} 
        </div>
        
    )
}

export default AddBalance;