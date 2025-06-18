import React, { useEffect, useState } from "react";
import { Link, useParams } from 'react-router-dom';

function Photos () {
    const [photos, setPhotos] = useState([]);
    let { id } = useParams();
    const handleFetchPhotos = async () => {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/albums/${id}/photos`);
            const photoData = await response.json();
            setPhotos(photoData);
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        handleFetchPhotos()
    },[]);

    return (
        <div>
            <Link to="/"><p>{`<< Back`}</p></Link>
            <h2>Photos of album {id}</h2>
            {photos.map((photo)=>{
                return <p key={photo.id}>{photo.title}</p>; //photo.thumbnailUrl is not rendering when used inside <img> tag. Faulty json data so just rendering list of photo titles
            })}
        </div>
    );
};

export default Photos;