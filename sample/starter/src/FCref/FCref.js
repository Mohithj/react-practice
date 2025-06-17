import React, {useState, useEffect, useRef} from "react";

function FCref() {
    const [search, setSearch] = useState('');
    const searchRef = useRef(null);
    useEffect(()=>{
        searchRef?.current?.focus();
    },[]);
    
    return (
        <div>Using useRef to retain the reference to input bar{" "}
            <input ref={searchRef} value={search} onChange={(e) => setSearch(e.target.value)}/>
        </div>
    );
}

export default FCref;