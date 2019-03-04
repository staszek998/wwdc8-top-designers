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

// Dataset.
let dataset = [];
for (let i = 0; i < 21; i++) {
  dataset.push({
    title: "Project title",
    imgSrc: "https://dummyimage.com/600x400/584fff/fff.png&text=Single+Project"
  });
}

const SingleProject = ({ title, imgSrc }) => (
  <li className="SingleProject">
    <h3>{title}</h3>
  </li>
);

const Portfolio = () => (
  <section className="Portfolio text-center">
    <SectionHeading
      copy={{ top: "Check out our projects!", main: "PORTFOLIO" }}
    />
    <ul className="grid-container">
      {dataset.map(project => (
        <SingleProject {...project} />
      ))}
    </ul>
  </section>
);

export default Portfolio;
