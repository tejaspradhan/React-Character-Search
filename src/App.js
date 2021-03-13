import React, { Component } from "react";
import { CardList } from "./components/card-list/card-list.component.jsx";
import "./App.css";
class App extends Component {
  constructor() {
    super();
    this.state = {
      characters: [],
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
        <CardList characters={this.state.characters} />
      </div>
    );
  }
}
export default App;
