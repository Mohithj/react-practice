import React from "react";
import Header from "./Header";
import Button from "./Button";
import Display from "./Display";

class Counter extends React.Component {
    constructor(){
        super();
        this.state = {
            count: 0,
        };
    }

    incrementHandler = () => {
        this.setState((prevState) => {
            return { count: prevState.count+1 };
        });
    };

    decrementHandler = () => {
        this.setState((prevState) => {
            return { count: prevState.count-1 };
        });
    };

    render() {
        return (
            <div>
                <Header />
                {console.log(this)}
                <Button btnClick={this.incrementHandler} dispBtn="+" />
                <Display dispVal = {this.state.count} />
                <Button btnClick={this.decrementHandler} dispBtn="-" />
            </div>
        );
    }
}
export default Counter;
