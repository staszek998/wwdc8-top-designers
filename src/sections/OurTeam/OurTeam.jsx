/**
 * @file This is the 2nd section of the web app content. It showcases the company's team.
 *
 * @author Stanisław Gregor <gregor.stanislaw@hotmail.com>
 */

// JS imports.
import React from "react";
import SectionHeading from "../../components/SectionHeading/SectionHeading";
import SinglePerson from "../../components/SinglePerson/SinglePerson";

// SCSS imports.
import "./_OurTeam.scss";

// Images.
import adrianna from "../../assets/images/sections/OurTeam/adrianna.png";
import olivia from "../../assets/images/sections/OurTeam/olivia.png";
import thomas from "../../assets/images/sections/OurTeam/thomas.png";
import taylor from "../../assets/images/sections/OurTeam/taylor.png";

const OurTeam = () => (
  <section className="OurTeam text-center" id="our-team">
    <SectionHeading copy={{ top: "Meet us!", main: "OUR TEAM" }} />

    <div className="container py-5 px-0">
      <SinglePerson
        name="Adrianna"
        title="Senior Graphic Designer"
        bio="She is the graphic designer with 3 years of professional experience."
        photoSrc={adrianna}
      />
      <SinglePerson
        name="Olivia"
        title="Art Director"
        bio="She is the art director with 
        8 years of professional experience."
        photoSrc={olivia}
      />
      <SinglePerson
        name="Thomas"
        title="Software Engineer"
        bio="He is the software engeneer with 
        5 years of professional experience."
        photoSrc={thomas}
      />
      <SinglePerson
        name="Taylor"
        title="CEO"
        bio="She is the boss in here."
        photoSrc={taylor}
      />
    </div>
  </section>
);

export default OurTeam;
