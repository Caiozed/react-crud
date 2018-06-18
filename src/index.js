import React, { Component } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

import CrudList from "./crudList.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="blue">CRUD List</h1>
        <CrudList />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
