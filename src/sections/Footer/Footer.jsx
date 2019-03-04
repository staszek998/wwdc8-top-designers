/**
 * @file This is the footer of the web app.
 *
 * @author Stanisław Gregor <gregor.stanislaw@hotmail.com>
 */

// JS imports
import React from "react";

// SCSS imports
import "./_Footer.scss";

const Footer = () => (
  <footer className="Footer text-center">
    <div className="Footer__upper row justify-content-center align-items-center">
      <div className="col-12">
        <h2>CONTACT</h2>
      </div>

      <div className="col-12 col-md-4 col-lg-2">
        <a href="mailto:free@template.com">free@template.com</a>
      </div>
      <div className="col-12 col-md-4 col-lg-2">
        <a href="http://www.freetemplate.com">www.freetemplate.com</a>
      </div>
      <div className="col-12 col-md-4 col-lg-2">
        <a href="tel:+48123456789">+48 123 456 789</a>
      </div>
    </div>

    <div className="Footer__lower">
      <p>Copyright &copy; DSGN | Use freely!</p>
    </div>
  </footer>
);

export default Footer;
