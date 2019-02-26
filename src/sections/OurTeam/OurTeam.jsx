/**
 * @file This is the 2nd section of the web app content. It showcases the company's team.
 *
 * @author Stanisław Gregor <gregor.stanislaw@hotmail.com>
 */

// JS imports
import React from "react";

// SCSS imports
import "./_OurTeam.scss";
import SectionHeading from "../../components/SectionHeading/SectionHeading";

const OurTeam = () => (
  <section className="OurTeam text-center">
    <SectionHeading span="Meet us!" heading="OUR TEAM" />
  </section>
);

export default OurTeam;
