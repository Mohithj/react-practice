import React from "react";

class Albums extends React.Component {
    constructor(){
        super();
        this.state = {
            albums: [],
        };
    }

    handleFetchData = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/albums');
        const data = await response.json();
        // console.log(data);
        this.setState({albums:data});
    }

    componentDidMount(){
        this.handleFetchData();
    }

    render(){
        return (
            <div>
                <h2>Albums</h2>
                {this.state.albums.map((album) => {
                    return <p>{album.title}</p>;
                })}
            </div>
        );
    }
}

export default Albums;