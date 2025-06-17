import React from "react";
import Counter from "./CounterApp/Counter";
import AppGallery from "./Lifecycle/AppGallery";
import FunComp from "./FuncComp/FunComp";
import FCuseEffect from "./FCuseEffect/FCuseEffect";

class App extends React.Component {
  render(){
    return (
      <div>
        <FCuseEffect />
        <Counter />
        <FunComp />
        {/* <AppGallery /> */}
      </div>
    );
  }
}

export default App;