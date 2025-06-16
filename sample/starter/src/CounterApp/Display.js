import React from "react";

class Display extends React.Component {
    render() {
        // console.log(this);
        return <div>{this.props.dispVal}</div>;
    }
}
export default Display;