/**
 * @file This component is used as a 1st component of each section.
 *
 * @author Stanisław Gregor <gregor.stanislaw@hotmail.com>
 */

// JS imports
import React from "react";
import PropTypes from "prop-types";
import DSGNHeading from "../DSGNHeading/DSGNHeading";

// SCSS imports
import "./_SectionHeading.scss";

const SectionHeading = ({ copy }) => (
  <div className="SectionHeading">
    <div className="container">
      <div className="row">
        <div className="col-12 py-3 px-md-3">
          <div className="d-flex justify-content-center align-items-center p-5 white-border">
            <DSGNHeading copy={copy} isH1={false} />
          </div>
        </div>
      </div>
    </div>
  </div>
);

SectionHeading.propTypes = {
  copy: PropTypes.object
};

export default SectionHeading;
