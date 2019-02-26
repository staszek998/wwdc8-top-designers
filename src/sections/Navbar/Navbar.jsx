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

  handleHamburgerClick = () => {
    this.setState({
      isMenuExpanded: !this.state.isMenuExpanded
    });
  };

  render() {
    return (
      <nav className="Navbar border">
        <div className="container">
          {window.innerWidth <= 768 ? (
            // Mobile
            <div className="Navbar--mobile row">
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
                className={`Navbar__menu-content col-12 ${
                  this.state.isMenuExpanded ? "expanded" : null
                }`}
              >
                <b>menu content</b>
                <br />
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure,
                quam assumenda corporis maxime cumque debitis nemo officiis enim
                magni odit? Unde praesentium commodi corporis assumenda aut
                voluptas dicta nam repellendus.
              </div>
            </div>
          ) : (
            // Desktop
            <div className="Navbar--desktop row">Navbar--desktop</div>
          )}
        </div>
      </nav>
    );
  }
}

export default Navbar;
