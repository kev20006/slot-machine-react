import React, { useState } from "react";
import Input from "../presentational/Input.js";
import ReactDOM from "react-dom";

function SlotMachine(){
    const [title, setTitle] = useState("");

    return(
        <div id="slot-machine">
            <Input name="bob" />
        </div>
    )
}

export default SlotMachine;

const appContainer = document.querySelector("#app");
app? ReactDOM.render(<SlotMachine />, appContainer): false;
