/**
 * @file This component will render the circle progressbar using the ProgressBar.js library.
 *
 * @author Stanisław Gregor <gregor.stanislaw@hotmail.com>
 * @author Kimmo Brunfeldt (ProgressBar.js) <https://github.com/kimmobrunfeldt>
 */

// JS imports
import React, { Component } from "react";
import ProgressBar from "progressbar.js";
import isScrolledIntoView from "../../js/helpers/isScrolledIntoView";

// SCSS imports
import "./_CircleProgress.scss";

class CircleProgress extends Component {
  state = {
    didAnimate: false
  };

  render() {
    return <div className="CircleProgress" id={this.props.id} />;
  }

  componentDidMount = () => {
    const circle = new ProgressBar.Circle(`#${this.props.id}`, {
      strokeWidth: 4,
      easing: "easeInOut",
      duration: 2000,
      color: this.props.color,
      trailColor: "#eee",
      trailWidth: 1
    });

    document.addEventListener("scroll", () => {
      if (isScrolledIntoView(`#${this.props.id}`) && !this.state.didAnimate) {
        circle.animate(this.props.animationStop);
        this.setState({
          didAnimate: true
        });
      }
    });
  };
}

export default CircleProgress;
