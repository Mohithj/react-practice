import React from "react";
import Counter from "./CounterApp/Counter";
import AppGallery from "./Lifecycle/AppGallery";
import FunComp from "./FuncComp/FunComp";
import FCuseEffect from "./FCuseEffect/FCuseEffect";
import FCapi from "./FCapi/FCapi";
import FCref from "./FCref/FCref";
import FCdebounce from "./FCdebounce/FCdebounce";

class App extends React.Component {
  render(){
    return (
      <div>
        <FCdebounce />
        <FCref />
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