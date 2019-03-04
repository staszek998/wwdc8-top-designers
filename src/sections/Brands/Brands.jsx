/**
 * @file This is the 4th section of the web app's main content. It showcases the Brands that the DSGN company has been working with/for.
 *
 * @author Stanisław Gregor <gregor.stanislaw@hotmail.com>
 */

// JS imports
import React from "react";
import SectionHeading from "../../components/SectionHeading/SectionHeading";

// SCSS imports
import "./_Brands.scss";

const Brands = () => (
  <section className="Brands text-center">
    <SectionHeading copy={{ top: `They've put trust in us`, main: "BRANDS" }} />
  </section>
);

export default Brands;
