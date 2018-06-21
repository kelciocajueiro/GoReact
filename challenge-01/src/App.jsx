import React, { Component } from "react";
import { render } from "react-dom";
import Header from "./components/Header";
import "./assets/styles/App.css";

class App extends Component {
  render() {
    return <Header />;
  }
}

render(<App />, document.getElementById("app"));
