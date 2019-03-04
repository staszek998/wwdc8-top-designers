/**
 * @file This is the section printing a single person's data, composed of:
 * - name
 * - position title
 * - short bio/intro
 * - photo
 *
 * @author Stanisław Gregor <gregor.stanislaw@hotmail.com>
 */

// JS imports
import React from "react";
import PropTypes from "prop-types";

// SCSS imports
import "./_SinglePerson.scss";

const SinglePerson = ({ name, title, bio, photoSrc }) => (
  <li className="SinglePerson row">
    {/* Intro / bio */}
    <div className="col-12 col-md-6">
      <h3 className="SinglePerson__name">{name}</h3>
      <p className="SinglePerson__title">{title}</p>
      <hr className="SinglePerson__spacer" />
      <p className="SinglePerson__bio">{bio}</p>
    </div>

    {/* Photo */}
    <div
      className="SinglePerson__photo col-12 col-md-6"
      style={{ backgroundImage: `url(${photoSrc})` }}
    />
  </li>
);

SinglePerson.propTypes = {
  name: PropTypes.string,
  title: PropTypes.string,
  bio: PropTypes.string,
  photoSrc: PropTypes.string
};

export default SinglePerson;
