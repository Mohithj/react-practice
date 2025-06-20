import React, {useState, useEffect} from "react";

function FCuseEffect() {

    const [count, setCount] = useState(0);

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