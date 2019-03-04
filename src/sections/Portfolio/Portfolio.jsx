/**
 * @file This is the 3rd section of the web app's content. It showcases the projects accomplished by the DSGN company.
 *
 * @author Stanisław Gregor <gregor.stanislaw@hotmail.com>
 */

// JS imports
import React from "react";
import SectionHeading from "../../components/SectionHeading/SectionHeading";

// SCSS imports
import "./_Portfolio.scss";

const Portfolio = () => (
  <section className="Portfolio text-center">
    <SectionHeading
      copy={{ top: "Check out our projects!", main: "PORTFOLIO" }}
    />
  </section>
);

export default Portfolio;
