/**
 * @file This is the 2nd section of the web app content. It showcases the company's team.
 *
 * @author Stanisław Gregor <gregor.stanislaw@hotmail.com>
 */

// JS imports
import React from "react";
import SectionHeading from "../../components/SectionHeading/SectionHeading";
import SinglePerson from "../../components/SinglePerson/SinglePerson";

// SCSS imports
import "./_OurTeam.scss";

const OurTeam = () => (
  <section className="OurTeam text-center">
    <SectionHeading copy={{ top: "Meet us!", main: "OUR TEAM" }} />
    <SinglePerson
      name="Adrianna"
      title="Senior Graphic Designer"
      bio="She is the graphic designer with 3 years of professional experience."
    />
  </section>
);

export default OurTeam;
