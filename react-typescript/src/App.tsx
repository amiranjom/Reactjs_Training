import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Message from "./Message";

//For functional check Message.tsx
//Class component in Typescript React

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Message />
        </header>
      </div>
    );
  }
}

export default App;
