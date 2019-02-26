/**
 * @file This is the navigation section of the web app.
 *
 * @author Stanisław Gregor <gregor.stanislaw@hotmail.com>
 */

// JS imports
import React, { Component } from "react";

// SCSS imports
import "./_Navbar.scss";

// Images
import iconFacebook from "../../assets/sections/Navbar/icons/facebook.png";
import iconInstagram from "../../assets/sections/Navbar/icons/instagram.png";
import iconTwitter from "../../assets/sections/Navbar/icons/twitter.png";
import iconLinkedin from "../../assets/sections/Navbar/icons/linkedin.png";

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
    return window.innerWidth <= 576 ? (
      // Mobile
      <nav className="Navbar Navbar--mobile row border">
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
      <div className="Navbar Navbar--desktop border">
        <nav className="container">
          <div className="row">
            {/* DSGN logotype */}
            <div className="col-6 d-flex justify-content-start align-items-center">
              <a href="#" className="Navbar__logotype">
                DSGN
              </a>
            </div>

            {/* Right column */}
            <div className="col-6 d-flex justify-content-end align-items-center">
              {/* Social icons */}
              <a href="" className="social-media-icon">
                <img src={iconFacebook} alt="" />
              </a>
              <a href="" className="social-media-icon">
                <img src={iconInstagram} alt="" />
              </a>
              <a href="" className="social-media-icon">
                <img src={iconTwitter} alt="" />
              </a>
              <a href="" className="social-media-icon">
                <img src={iconLinkedin} alt="" />
              </a>

              <div className="menu h-100 d-flex justify-content-center align-items-center">
                {/* Hamburger button / menu trigger */}
                <button
                  className="Navbar__menu-trigger"
                  onClick={this.handleHamburgerClick}
                >
                  <span className="hamburger">X</span>MENU
                </button>

                {/* Menu items */}
                <ul
                  className={`menu-items d-flex flex-column justify-content-start align-items-stretch ${
                    this.state.isMenuExpanded ? "expanded" : ""
                  }`}
                >
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
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
