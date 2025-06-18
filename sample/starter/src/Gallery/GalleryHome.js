import React from "react";
import Albums from "./Albums";
import Photos from "./Photos";
import { Route, Routes } from "react-router-dom";

function GalleryHome () {
    return (
    <div>
        <center><h1>App Gallery</h1></center>
        <Routes>
            <Route path="/" element={<Albums />}/>
            <Route path="/photos/:id" element={<Photos />}/>
        </Routes>
    </div>
    );
};

export default GalleryHome;