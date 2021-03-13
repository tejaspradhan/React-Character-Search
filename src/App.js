import React, { Component } from "react";
import { CardList } from "./components/card-list/card-list.component.jsx";
import "./App.css";
class App extends Component {
  constructor() {
    super();
    this.state = {
      characters: [],
      searchField: "",
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
    const { characters, searchField } = this.state;
    const filteredCharacters = characters.filter((character) =>
      character.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <h1>Character Search Engine</h1>
        <input
          type="search"
          placeholder="Find Characters"
          name=""
          id=""
          onChange={(e) => {
            this.setState({ searchField: e.target.value });
          }}
        />
        <CardList characters={filteredCharacters} />
      </div>
    );
  }
}
export default App;
