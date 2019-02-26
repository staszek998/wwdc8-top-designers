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
    return window.innerWidth <= 768 ? (
      // Mobile
      <nav className="Navbar--mobile row">
        {/* DSGN logotype */}
        <div className="col-6 d-flex justify-content-start align-items-center">
          <a href="#" className="Navbar__logotype">
            DSGN
          </a>
        </div>

        {/* Hamburger button / menu trigger */}
        <div className="col-6 d-flex justify-content-end align-items-center">
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
            this.state.isMenuExpanded ? "expanded" : ""
          }`}
        >
          <ul className="d-flex flex-column justify-content-start align-items-stretch">
            <li>
              <a href="#about-us">About us</a>
            </li>
            <li>
              <a href="#our-team">Our team</a>
            </li>
            <li>
              <a href="#portfolio">Portolio</a>
            </li>
            <li>
              <a href="#brands">Brands</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    ) : (
      // Desktop
      <div className="Navbar--desktop row">
        <nav>Navbar--desktop</nav>
      </div>
    );
  }
}

export default Navbar;
