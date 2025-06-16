import React from "react";
import Albums from "./Albums";
import Photos from "./Photos";

class AppGallery extends React.Component {
    render(){
        return (
            <div>
                <h1>App Gallery</h1>
                <Albums />
                {/* <Photos /> */}
            </div>
        );
    }
}

export default AppGallery;