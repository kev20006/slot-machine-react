import React from "react";

const ManageBalance = (props) => {
    console.log(props.errorState)
    return(
        <div>
            <input type="button" 
                onClick={()=>{
                        props.action(parseInt(document.querySelector("#money-input").value));
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