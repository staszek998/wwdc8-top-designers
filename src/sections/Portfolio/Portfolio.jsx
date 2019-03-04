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
        ? "https://images.unsplash.com/photo-1551527182-bf506e7484b0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2026&q=80"
        : i % 2 === 0
        ? "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=802&q=80"
        : "https://images.unsplash.com/photo-1551542473-c9dc3670e2d6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80"
  });
}

const SingleProject = ({ title, imgSrc }) => (
  <li className="SingleProject" style={{ backgroundImage: `url(${imgSrc})` }}>
    {/* eslint-disable-next-line */}
    <a className="SingleProject__content" href="#">
      <span className="SingleProject__content__eye" />
      <h3 className="SingleProject__content__heading">{title}</h3>
    </a>
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
