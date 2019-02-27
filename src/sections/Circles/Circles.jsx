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

const Circles = () => (
  <section className="Circles text-center border" id="about-us">
    <div className="container">
      <div className="row py-5">
        <div className="col-12 col-md-4 pb-5 pb-md-0">
          <div className="d-flex flex-column justify-content-start align-items-center">
            <div className="circle-container">
              <CircleProgress
                id="CircleProgress1"
                color="#f34739"
                animationStop={0.5}
              />
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
              itaque aspernatur explicabo! Accusantium suscipit dolorum
              assumenda eaque harum quo id aliquam. Perspiciatis, quod corrupti
              ab consectetur esse itaque nesciunt molestiae.
            </p>
          </div>
        </div>
        <div className="col-12 col-md-4 pb-5 pb-md-0">
          <div className="d-flex flex-column justify-content-start align-items-center">
            <div className="circle-container">
              <CircleProgress
                id="CircleProgress2"
                color="#009989"
                animationStop={0.35}
              />
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
              itaque aspernatur explicabo! Accusantium suscipit dolorum
              assumenda eaque harum quo id aliquam. Perspiciatis, quod corrupti
              ab consectetur esse itaque nesciunt molestiae.
            </p>
          </div>
        </div>
        <div className="col-12 col-md-4">
          <div className="d-flex flex-column justify-content-start align-items-center">
            <div className="circle-container">
              <CircleProgress
                id="CircleProgress3"
                color="#152b3b"
                animationStop={0.8}
              />
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
              itaque aspernatur explicabo! Accusantium suscipit dolorum
              assumenda eaque harum quo id aliquam. Perspiciatis, quod corrupti
              ab consectetur esse itaque nesciunt molestiae.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Circles;
