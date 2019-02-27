/**
 * @file This is the main file of the web app. It is used to import and control the inner components.
 *
 * @author Stanisław Gregor <gregor.stanislaw@hotmail.com>
 */

// JS imports
import React from "react";
import DSGNHeading from "../../components/DSGNHeading/DSGNHeading";

// SCSS imports
import "./_Hero.scss";

const Hero = () => (
  <header className="Hero">
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="h-100 d-flex flex-column justify-content-center align-items-center">
            <DSGNHeading
              copy={{ top: "Need our help?", main: "TOP DESIGNERS" }}
            />

            {/* CTA button */}
            <a className="cta" href="#portfolio">
              CHECK US!
            </a>

            {/* CTS (call to scroll) */}
            <button className="scroll">scroll</button>
          </div>
        </div>
      </div>
    </div>
  </header>
);

export default Hero;
