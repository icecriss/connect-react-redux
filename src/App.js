import React, { Component } from "react";
import "./App.css";
import CounterContainer from "./CounterContainer";

class App extends Component {
  render() {
    return (
      <div>
        <p>This is challenge time!</p>
        <CounterContainer />
      </div>
    );
  }
}

export default App;
