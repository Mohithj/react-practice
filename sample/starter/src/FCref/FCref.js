import React, {useState, useEffect, useRef} from "react";

function FCref() {
    const [search, setSearch] = useState('');
    const searchRef = useRef(null);
    useEffect(()=>{
        searchRef?.current?.focus();
    },[]);
    
    return (
        <input ref={searchRef} value={search} onChange={(e) => setSearch(e.target.value)}/>
    );
}

export default FCref;