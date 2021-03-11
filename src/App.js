import React, {Component} from 'react';
import logo from "./logo.svg";
import "./App.css";


class App extends Component {
  constructor(){
    super();
    this.state={
      string: "Hello Tejas"
    }
  }
  render() {
    return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <h1>{this.state.string}</h1>
        <button>click me</button>
      </header>
    </div>
    )
  }
}
export default App;
