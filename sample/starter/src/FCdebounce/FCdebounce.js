import React, {useState, useEffect, useRef} from "react";

function debounce (fn, delay){
    let timeId;
    return (...args) => {
        if (timeId){
            clearTimeout(timeId);
        }
        timeId = setTimeout(()=>fn(...args),delay);
    }
};

function FCdebounce (){
    const [text, setText] = useState("");
    const handleDebounce = (searchText) => {
        console.log(`searchText: ${searchText}`)
    }

    const debouncedText = useRef(debounce(handleDebounce, 500)).current;

    useEffect(()=>{
        if(text)
            debouncedText(text)
    },[text])
    return (
        <div>Using deboucing feature for this searchbar{" "}
            <input 
            value={text}
            onChange={(e)=>setText(e.target.value)}/>
        </div>
    );
};

export default FCdebounce;