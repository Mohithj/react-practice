import React from "react";
import Counter from "./CounterApp/Counter";
import AppGallery from "./Lifecycle/AppGallery";
import FunComp from "./FuncComp/FunComp";
import FCuseEffect from "./FCuseEffect/FCuseEffect";
import FCapi from "./FCapi/FCapi";

class App extends React.Component {
  render(){
    return (
      <div>
        <FCapi />
        <FCuseEffect />
        <Counter />
        <FunComp />
        {/* <AppGallery /> */}
      </div>
    );
  }
}

export default App;