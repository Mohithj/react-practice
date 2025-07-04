import React, {useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { incrementCount } from "../CounterRedux/store/action";

function FCuseEffect() {

    // const [count, setCount] = useState(0);
    const count = useSelector((state) => state?.countReducer?.count);
    const dispatch = useDispatch();

    useEffect(()=>{
        console.log("Triggering from useEffect");
    },[count]);

    return (
    <div>useEffect scenario{" "}
        <button onClick={() => dispatch(incrementCount())}>Increment: {count}</button>
    </div>
    );
}

export default FCuseEffect;