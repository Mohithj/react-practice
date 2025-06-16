import React, {useState} from "react";
import Button from "./Button";
import Display from "./Display";

function FunComp () {
    const [counter, setCounter] = useState(0);
    
    const handleIncrement = () => {
        setCounter((prevState) => prevState+1);
    }

    const handleDecrement = () => {
        setCounter((prevState) => prevState-1);
    }

    return (
        <div>
            <h1>Counter App using Function components</h1>
            <Button btnClick={handleIncrement} symbol="+"/>
            <Display count={counter}/>
            <Button btnClick={handleDecrement} symbol="-"/>
        </div>
    );
}

export default FunComp;