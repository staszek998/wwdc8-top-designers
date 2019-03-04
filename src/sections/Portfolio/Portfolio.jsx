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

// Data.
let data = [];
for (let i = 0; i < 21; i++) {
  data.push({
    title: "Project title",
    imgSrc: "https://dummyimage.com/600x400/584fff/fff.png&text=Single+Project"
  });
}

const Portfolio = () => (
  <section className="Portfolio text-center">
    <SectionHeading
      copy={{ top: "Check out our projects!", main: "PORTFOLIO" }}
    />
    <div className="grid-container">grid-container</div>
  </section>
);

export default Portfolio;
