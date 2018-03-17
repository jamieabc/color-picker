import React, { Component } from "react";
import Slider from "./Slider";
import Reload from "./Reload";

class Bar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: 0
    };
  }

  render() {
    return (
      <div>
        <Slider
          location={this.state.location}
          updatePosition={value => this.setState({ location: value })}
        />
        <Reload resetPosition={() => this.setState({ location: 0 })} />
      </div>
    );
  }
}

export default Bar;
