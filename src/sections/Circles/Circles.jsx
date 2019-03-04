/**
 * @file This is the 1st section of the main content of the web app. It showcases the number of completed projects, trusted clients and months spent on the market.
 *
 * @author Stanisław Gregor <gregor.stanislaw@hotmail.com>
 */

// JS imports
import React from "react";
import CircleProgress from "../../components/CircleProgress/CircleProgress";

// SCSS imports
import "./_Circles.scss";

const Column = ({
  circleContainerId,
  circleColour,
  circleAnimationStop,
  innerNum,
  innerText
}) => (
  <li className="Circles__Column col-12 col-md-4 col-lg-3 pb-5 pb-md-0">
    <div className="d-flex flex-column justify-content-start align-items-center">
      <div className="circle-container">
        <CircleProgress
          id={circleContainerId}
          color={circleColour}
          animationStop={circleAnimationStop}
        />

        <div className="circle-container__inner">
          <p>
            <span className="num">{innerNum}</span>
            <span className="description">{innerText}</span>
          </p>
        </div>
      </div>
      <p className="Circles__Column__description pt-3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius itaque
        aspernatur explicabo!
      </p>
    </div>
  </li>
);

const Circles = () => (
  <section className="Circles text-center border" id="about-us">
    <div className="container">
      <ul className="row py-5 justify-content-around">
        <Column
          circleContainerId="CircleProgress1"
          circleColour="#f34739"
          circleAnimationStop={0.5}
          innerNum="50"
          innerText="BIG PROJECTS"
        />

        <Column
          circleContainerId="CircleProgress2"
          circleColour="#009989"
          circleAnimationStop={0.35}
          innerNum="35"
          innerText="CLIENTS"
        />

        <Column
          circleContainerId="CircleProgress3"
          circleColour="#152b3b"
          circleAnimationStop={0.8}
          innerNum="80"
          innerText="MONTHS"
        />
      </ul>
    </div>
  </section>
);

export default Circles;
