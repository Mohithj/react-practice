import React from "react";
import Counter from "./CounterApp/Counter";
import AppGallery from "./Lifecycle/AppGallery";
import FunComp from "./FuncComp/FunComp";

class App extends React.Component {
  render(){
    return (
      <div>
        <Counter />
        <FunComp />
        {/* <AppGallery /> */}
      </div>
    );
  }
}

export default App;