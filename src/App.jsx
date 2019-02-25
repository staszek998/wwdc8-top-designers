/**
 * @file This is the main file of the web app. It is used to import and control the inner components.
 *
 * @author Stanisław Gregor <gregor.stanislaw@hotmail.com>
 */

// JS imports
import React, { Component } from "react";
import Navbar from "./sections/Navbar/Navbar";

// SCSS imports
import "./App.scss";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
      </div>
    );
  }
}

export default App;
