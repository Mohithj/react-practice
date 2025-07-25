import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { incrementCount, decrementCount } from "../store/action";

const CounterOne = () => {
    const count2 = useSelector((state) => state?.countReducer?.count);
    
    const dispatch = useDispatch();
    const handleIncrement = () => {
        dispatch(incrementCount());
    }
    const handleDecrement = () => {
        dispatch(decrementCount());
    }
    return (
        <>
            <button onClick={handleDecrement}>-</button>
            <p>{count2}</p>
            <button onClick={handleIncrement}>+</button>
        </>
    );
};

export default CounterOne;