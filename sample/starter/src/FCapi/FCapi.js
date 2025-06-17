import React, {useState, useEffect} from "react";

function FCapi() {
    const [users, setUsers] = useState([]);
    const fetchUsers = async () => {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        setUsers(data);
    };
    useEffect(()=> {
        fetchUsers();
    },[]);
    return (
    <div>
        <h1>user list using useEffect</h1>
        {
            users.map((user)=>{
                return <p key={user.id}>{user.name}</p>;
            })
        }
    </div>
    );
}

export default FCapi;