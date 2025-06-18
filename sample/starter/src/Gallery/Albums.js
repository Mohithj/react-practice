import React, { useEffect, useState } from "react";
import Photos from "./Photos";
import { Link } from "react-router-dom";

function Albums () {
    const [albums, setAlbums] = useState([]);
    const handleFetchAlbums = async () => {
        try{
            const response = await fetch("https://jsonplaceholder.typicode.com/albums");
            const albumData = await response.json();
            setAlbums(albumData);
        } catch (e) {
            console.log("error:",e);
        }
    }
    useEffect(() => {
        handleFetchAlbums();
    },[]);

    return (
        <div><h2>Albums</h2>
            {
                albums.map((album)=>{
                    return (
                        <Link to={`photos/${album.id}`} key={album.id}>
                            <p>Album Id: {album.id}</p>
                            <p>Album Name: {album.title}</p>
                        </Link>
                    )
                })
            }
        </div>

    );
};

export default Albums;