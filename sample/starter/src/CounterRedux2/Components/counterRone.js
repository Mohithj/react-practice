import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrementCount2, incrementCount2 } from "../store/action";

const CounterRone = () => {
    const count = useSelector((state) => state.countReducer2.count);
    const dispatch = useDispatch();
    const handleIncrement = () => {
        dispatch(incrementCount2());
    };

    const handleDecrement = () => {
        dispatch(decrementCount2());
    };

    return (
        <>
            <button onClick={handleDecrement}>-</button>
            <span>{count}</span>
            <button onClick={handleIncrement}>+</button>
        </>
    )
};

export default CounterRone;