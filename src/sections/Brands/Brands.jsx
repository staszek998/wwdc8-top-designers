/**
 * @file This is the 4th section of the web app's main content. It showcases the Brands that the DSGN company has been working with/for.
 *
 * @author Stanisław Gregor <gregor.stanislaw@hotmail.com>
 */

// JS imports
import React from "react";
import SectionHeading from "../../components/SectionHeading/SectionHeading";
import logomarks from "../../db/Brands/logomarks";

// SCSS imports
import "./_Brands.scss";

const Brands = () => (
  <section className="Brands text-center">
    <SectionHeading copy={{ top: `They've put trust in us`, main: "BRANDS" }} />

    <div className="container py-5">
      <ul className="grid-container">
        {logomarks.map((logo, index) => (
          <li className="logotype" key={`logo${index}`}>
            <img src={logo} alt="" />
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default Brands;
