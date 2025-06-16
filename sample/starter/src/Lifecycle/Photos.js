import React from "react";

class Photos extends React.Component {
    constructor(){
        super();
        this.state = {
            photos:[],
        }
    }

    handleFetch = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/photos');
        const data = await response.json();
        this.setState({photos:data})
    }

    componentDidMount(){
        this.handleFetch();
    }


    render(){
        return (
        <div>
            <h2>Photos</h2>
            {this.state.photos.map((photo) => {
                return <img src={photo.thumbnailUrl} alt={photo.title}/>;
            })}
        </div>);
    }
}

export default Photos;