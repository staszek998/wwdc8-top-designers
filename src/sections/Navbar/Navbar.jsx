/**
 * @file This is the navigation section of the web app.
 *
 * @author Stanisław Gregor <gregor.stanislaw@hotmail.com>
 */

// JS imports
import React, { Component } from "react";

// SCSS imports
import "./_Navbar.scss";
import "../../scss/vendor/css-hamburgers/_hamburgers.scss";

// Images
import iconFacebook from "../../assets/images/sections/Navbar/icons/facebook.png";
import iconInstagram from "../../assets/images/sections/Navbar/icons/instagram.png";
import iconTwitter from "../../assets/images/sections/Navbar/icons/twitter.png";
import iconLinkedin from "../../assets/images/sections/Navbar/icons/linkedin.png";
import dsgnLogotype from "../../assets/images/sections/Navbar/dsgn-logotype.png";

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
      <nav className="Navbar Navbar--mobile row">
        {/* DSGN logotype */}
        <div className="col-6 d-flex justify-content-start align-items-center">
          {/* eslint-disable-next-line */}
          <a href="#" className="Navbar__logotype">
            <img src={dsgnLogotype} alt="TOP DESIGNERS logotype" />
          </a>
        </div>

        {/* Hamburger button / menu trigger */}
        <div className="col-6 d-flex justify-content-end align-items-center">
          <button
            className={`Navbar__menu-trigger hamburger hamburger--collapse ${
              this.state.isMenuExpanded ? "is-active" : ""
            }`}
            type="button"
            onClick={this.handleHamburgerClick}
          >
            <span className="hamburger-box">
              <span className="hamburger-inner" />
            </span>
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
              {/* eslint-disable-next-line */}
              <a href="#about-us">About us</a>
            </li>
            <li>
              {/* eslint-disable-next-line */}
              <a href="#our-team">Our team</a>
            </li>
            <li>
              {/* eslint-disable-next-line */}
              <a href="#portfolio">Portolio</a>
            </li>
            <li>
              {/* eslint-disable-next-line */}
              <a href="#brands">Brands</a>
            </li>
            <li>
              {/* eslint-disable-next-line */}
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    ) : (
      // Desktop
      <div className="Navbar Navbar--desktop">
        <nav className="container">
          <div className="row">
            {/* DSGN logotype */}
            <div className="col-6 d-flex justify-content-start align-items-center">
              {/* eslint-disable-next-line */}
              <a href="#" className="Navbar__logotype">
                <img src={dsgnLogotype} alt="TOP DESIGNERS logotype" />
              </a>
            </div>

            {/* Right column */}
            <div className="col-6 d-flex justify-content-end align-items-center">
              {/* Social icons */}
              {/* eslint-disable-next-line */}
              <a href="" className="social-media-icon">
                <img src={iconFacebook} alt="" />
              </a>
              {/* eslint-disable-next-line */}
              <a href="" className="social-media-icon">
                <img src={iconInstagram} alt="" />
              </a>
              {/* eslint-disable-next-line */}
              <a href="" className="social-media-icon">
                <img src={iconTwitter} alt="" />
              </a>
              {/* eslint-disable-next-line */}
              <a href="" className="social-media-icon">
                <img src={iconLinkedin} alt="" />
              </a>

              <div className="menu h-100 d-flex justify-content-center align-items-center">
                {/* Hamburger button / menu trigger */}
                <button
                  className="Navbar__menu-trigger"
                  onClick={this.handleHamburgerClick}
                >
                  <div
                    className={`hamburger hamburger--collapse ${
                      this.state.isMenuExpanded ? "is-active" : ""
                    }`}
                    type="button"
                    onClick={this.handleHamburgerClick}
                  >
                    <span className="hamburger-box">
                      <span className="hamburger-inner" />
                    </span>
                  </div>
                  <span>MENU</span>
                </button>

                {/* Menu items */}
                <ul
                  className={`menu-items d-flex flex-column justify-content-start align-items-stretch ${
                    this.state.isMenuExpanded ? "expanded" : ""
                  }`}
                >
                  <li>
                    {/* eslint-disable-next-line */}
                    <a href="#about-us">About us</a>
                  </li>
                  <li>
                    {/* eslint-disable-next-line */}
                    <a href="#our-team">Our team</a>
                  </li>
                  <li>
                    {/* eslint-disable-next-line */}
                    <a href="#portfolio">Portolio</a>
                  </li>
                  <li>
                    {/* eslint-disable-next-line */}
                    <a href="#brands">Brands</a>
                  </li>
                  <li>
                    {/* eslint-disable-next-line */}
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
