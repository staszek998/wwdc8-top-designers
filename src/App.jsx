/**
 * @file This is the main file of the web app. It is used to import and control the inner components.
 *
 * @author Stanisław Gregor <gregor.stanislaw@hotmail.com>
 */

// JS imports
import React, { Component } from "react";
import Navbar from "./sections/Navbar/Navbar";
import Hero from "./sections/Hero/Hero";
import Circles from "./sections/Circles/Circles";
import OurTeam from "./sections/OurTeam/OurTeam";
import Portfolio from "./sections/Portfolio/Portfolio";
import Brands from "./sections/Brands/Brands";
import Footer from "./sections/Footer/Footer";

// SCSS imports
import "./App.scss";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Hero />
        <main>
          <Circles />
          <OurTeam />
          <Portfolio />
          <Brands />
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
