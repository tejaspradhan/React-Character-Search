import React, { Component } from "react";
import { CardList } from "./components/card-list/card-list.component.jsx";
import "./App.css";
class App extends Component {
  constructor() {
    super();
    this.state = {
      characters: [
        // { name: "Leonard", id: "1" },
        // { name: "Sheldon", id: "2" },
        // { name: "Howard", id: "3" },
        // { name: "Raj", id: "4" },
        // { name: "Bernadette", id: "5" },
        // { name: "Amy", id: "6" },
        // { name: "Penny", id: "7" },
      ],
    };
  }
  changeText = () => {
    this.setState({ string: "You clicked a button" });
  };
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ characters: users }));
  }
  render() {
    return (
      <div className="App">
        <h1>Character Search Engine</h1>
        <CardList name="Tejas">
          {this.state.characters.map((chars) => (
            <h1 key={chars.id}>{chars.name}</h1>
          ))}
        </CardList>
      </div>
    );
  }
}
export default App;
