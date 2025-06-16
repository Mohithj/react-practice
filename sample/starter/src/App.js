import React from "react";
import Counter from "./CounterApp/Counter";
import AppGallery from "./Lifecycle/AppGallery";

class App extends React.Component {
  render(){
    return (
      <div>
        <Counter />
        <AppGallery />
      </div>
    );
  }
}

export default App;