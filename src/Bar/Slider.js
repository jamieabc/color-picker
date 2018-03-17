import React, { Component } from "react";
import PropTypes from "prop-types";

class Slider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      start: 0, // start x-axis of bar
      end: 0, // end x-asix of bar
      top: 0,
      bottom: 0
    };

    this.track = this.track.bind(this);
    this.stopTrack = this.stopTrack.bind(this);
    this.moveListener = this.moveListener.bind(this);
    this.calculateRelativePosition = this.calculateRelativePosition.bind(this);
    this.setLocation = this.setLocation.bind(this);
  }

  moveListener(e) {
    this.calculateRelativePosition(e);
    e.preventDefault();
  }

  calculateRelativePosition(e, start = this.state.start, end = this.state.end) {
    const cursorX = e.pageX;
    const cursorY = e.pageY;
    const { top, bottom } = this.state;

    const percentage = (cursorX - start) * 100 / (end - start);
    this.props.updatePosition(percentage);

    // stop tracking if mouse left bar
    if (cursorY < top || cursorY > bottom) {
      this.stopTrack();
    }
  }

  // track user mouse event
  track(e) {
    const parent = e.currentTarget;
    const position = parent.getBoundingClientRect();

    this.setState({
      start: position.left,
      end: position.right,
      top: position.top,
      bottom: position.bottom
    });

    document.addEventListener("mousemove", this.moveListener);
    e.preventDefault();
    e.stopPropagation();
  }

  // stop tracking mouse event
  stopTrack() {
    document.removeEventListener("mousemove", this.moveListener);
  }

  // update location by cursor location
  setLocation(e) {
    const parent = e.currentTarget;
    const position = parent.getBoundingClientRect();
    this.calculateRelativePosition(e, position.left, position.right);
  }

  render() {
    return (
      <div
        style={{
          height: "12px",
          width: "85%",
          backgroundColor: "#EEEEEE",
          borderRadius: "3px",
          float: "left",
          marginRight: "15px"
        }}
        onMouseDown={this.track}
        onMouseUp={this.stopTrack}
        onClick={this.setLocation}
      >
        <div
          style={{
            height: "10px",
            width: "6px",
            marginLeft: `${this.props.location}%`,
            backgroundColor: "#ACACAC",
            borderRadius: "3px",
            border: "1px solid",
            borderColor: "#5H5H5H"
          }}
        />
      </div>
    );
  }
}

Slider.propTypes = {
  location: PropTypes.number,
  updatePosition: PropTypes.func
};

Slider.defaultProps = {
  location: 0
};

export default Slider;
