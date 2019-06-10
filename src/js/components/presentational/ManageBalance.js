import React from "react";

const ManageBalance = (props) => {
    return(
        <div>
            <input type="button" 
                onClick={()=>{
                        props.actions.placeBet(parseInt(document.querySelector("#money-input").value));
                        document.querySelector("#money-input").value = "";
                    }
                } 
                value="place bet"
            />
            {props.errorState == "Not Enough Credit" && <p>Not Enough Credit</p>}  
        </div>
        
    )
}

export default ManageBalance;