import React, {useState} from "react";

function Button ({symbol, btnClick}) {
    return (
        <button onClick={btnClick}>{symbol}</button>
    );
}

export default Button;