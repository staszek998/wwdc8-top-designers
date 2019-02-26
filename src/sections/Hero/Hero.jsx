/**
 * @file This is the main file of the web app. It is used to import and control the inner components.
 *
 * @author Stanisław Gregor <gregor.stanislaw@hotmail.com>
 */

// JS imports
import React from "react";

// SCSS imports
import "./_Hero.scss";

const Hero = () => (
  <header className="Hero text-center">
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="h-100 d-flex flex-column justify-content-center align-items-center">
            {/* DSGN Heading */}
            <div className="dsgn-heading">
              <div className="dsgn-heading__top-line">
                <div className="spacer spacer--left" role="presentation">
                  <hr />
                </div>
                <span className="copy">Need our help?</span>
                <div className="spacer spacer--right" role="presentation">
                  <hr />
                </div>
              </div>

              <div className="dsgn-heading__bottom-line">
                <h1>TOP DESIGNERS</h1>
              </div>
            </div>

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
