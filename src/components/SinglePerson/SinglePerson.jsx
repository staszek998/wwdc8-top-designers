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

// SCSS imports
import "./_SinglePerson.scss";

const SinglePerson = ({ name, title, bio }) => (
  <li className="SinglePerson row">
    {/* Intro / bio */}
    <div className="col-12 col-md-6 order-md-2">
      <h3 className="SinglePerson__name">{name}</h3>
      <p className="SinglePerson__title">{title}</p>
      <hr className="SinglePerson__spacer" />
      <p className="SinglePerson__bio">{bio}</p>
    </div>

    {/* Photo */}
    <div className="col-12 col-md-6 order-md-1">photo</div>
  </li>
);

export default SinglePerson;
