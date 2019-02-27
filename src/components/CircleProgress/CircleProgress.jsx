/**
 * @file This component will render the circle progressbar using the ProgressBar.js library.
 *
 * @author Stanisław Gregor <gregor.stanislaw@hotmail.com>
 * @author Kimmo Brunfeldt (ProgressBar.js) <https://github.com/kimmobrunfeldt>
 */

// JS imports
import React, { Component } from "react";
import ProgressBar from "progressbar.js";

// SCSS imports
import "./_CircleProgress.scss";

class CircleProgress extends Component {
  state = {};

  render() {
    return <div className="CircleProgress" id={this.props.id} />;
  }

  componentDidMount = () => {
    const circle = new ProgressBar.Circle(`#${this.props.id}`, {
      strokeWidth: 4,
      easing: "easeInOut",
      duration: 1400,
      color: this.props.color,
      trailColor: "#eee",
      trailWidth: 1
    });
    circle.animate(1);
  };
}

export default CircleProgress;
