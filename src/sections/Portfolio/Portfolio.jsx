/**
 * @file This is the 3rd section of the web app's content. It showcases the projects accomplished by the DSGN company.
 *
 * @author Stanisław Gregor <gregor.stanislaw@hotmail.com>
 */

// JS imports
import React from "react";
import SectionHeading from "../../components/SectionHeading/SectionHeading";
import dataset from "../../db/Portfolio/dataset";

// SCSS imports
import "./_Portfolio.scss";

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
