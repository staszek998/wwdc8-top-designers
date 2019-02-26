/**
 * @file This component is used in two places within the app:
 * - Hero (section)
 * - SectionSubheading (component)
 *
 * @author Stanisław Gregor <gregor.stanislaw@hotmail.com>
 */

// JS imports
import React from "react";
import PropTypes from "prop-types";

// SCSS imports
import "./_DSGNHeading.scss";

const DSGNHeading = ({ copy }) => (
  <div className="DSGNHeading">
    <div className="DSGNHeading__top-line">
      <div className="spacer spacer--left" role="presentation">
        <hr />
      </div>
      <span className="copy">{copy.top}</span>
      <div className="spacer spacer--right" role="presentation">
        <hr />
      </div>
    </div>

    <div className="DSGNHeading__bottom-line">
      <h1>{copy.main}</h1>
    </div>
  </div>
);

DSGNHeading.propTypes = {
  copy: PropTypes.object
};

export default DSGNHeading;
