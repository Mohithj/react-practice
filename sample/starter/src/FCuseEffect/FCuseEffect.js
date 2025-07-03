import React, {useState, useEffect} from "react";
import { useSelector } from "react-redux";

function FCuseEffect() {

    const [count, setCount] = useState(0);
    // const count = useSelector((state) => state?.countReducer2?.count);

    useEffect(()=>{
        console.log("Triggering from useEffect");
    },[count]);

    return (
    <div>useEffect scenario{" "}
        <button onClick={() => setCount((prevState)=>prevState+1)}>Increment: {count}</button>
    </div>
    );
}

export default FCuseEffect;