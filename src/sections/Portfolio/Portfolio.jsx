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
    imgSrc:
      i % 3 === 0
        ? "https://dummyimage.com/600x400/999999/ffffff.png"
        : i % 2 === 0
        ? "https://dummyimage.com/600x400/000000/ffffff.png"
        : "https://dummyimage.com/600x400/6fb56f/ffffff.png"
  });
}

const SingleProject = ({ title, imgSrc }) => (
  <li className="SingleProject">
    <div
      className="SingleProject__content"
      style={{ backgroundImage: `url(${imgSrc})` }}
    >
      <span className="eye" />
      <h3>{title}</h3>
    </div>
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
