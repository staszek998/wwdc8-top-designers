/**
 * @file This component is used as a 1st component of each section.
 *
 * @author Stanisław Gregor <gregor.stanislaw@hotmail.com>
 */

// JS imports
import React from "react";

// SCSS imports
import "./_SectionHeading.scss";

const SectionHeading = ({ span, heading }) => (
  <div className="SectionHeading">
    <div className="container">
      <div className="row">
        <div className="col-12">SectionHeading</div>
      </div>
    </div>
  </div>
);

export default SectionHeading;
