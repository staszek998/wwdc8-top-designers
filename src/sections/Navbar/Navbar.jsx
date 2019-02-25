/**
 * @file This is the navigation section of the web app.
 *
 * @author Stanisław Gregor <gregor.stanislaw@hotmail.com>
 */

// JS imports
import React, { Component } from "react";

// SCSS imports
import "./_Navbar.scss";

class Navbar extends Component {
  state = {
    isMenuExpanded: false
  };

  handleHamburgerClick = event => {
    event.preventDefault();
    this.setState({
      isMenuExpanded: !this.state.isMenuExpanded
    });
  };

  render() {
    return (
      <nav className="Navbar">
        <div className="container">
          <div className="row">
            {/* DSGN logotype */}
            <div className="col-6">
              <a href="/" className="Navbar__logotype">
                DSGN
              </a>
            </div>

            {/* Hamburger button / menu trigger */}
            <div className="col-6">
              <button
                className="Navbar__menu-trigger"
                onClick={this.handleHamburgerClick}
              >
                MENU
              </button>
            </div>

            {/* Menu content */}
            <div
              className={`Navbar__menu-content row ${
                this.state.isMenuExpanded ? "expanded" : null
              }`}
            >
              <div className="col-12">
                <b>menu content</b>
                <br />
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure,
                quam assumenda corporis maxime cumque debitis nemo officiis enim
                magni odit? Unde praesentium commodi corporis assumenda aut
                voluptas dicta nam repellendus.
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
