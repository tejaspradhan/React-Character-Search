import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      characters: [
        { name: "Leonard", id: "1" },
        { name: "Sheldon", id: "2" },
        { name: "Howard", id: "3" },
        { name: "Raj", id: "4" },
        { name: "Bernadette", id: "5" },
        { name: "Amy", id: "6" },
        { name: "Penny", id: "7" },
      ],
    };
  }
  changeText = () => {
    this.setState({ string: "You clicked a button" });
  };
  render() {
    return (
      <div className="App">
        {this.state.characters.map((chars) => (
          <h1 key={chars.id}>{chars.name}</h1>
        ))}
      </div>
    );
  }
}
export default App;
