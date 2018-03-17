import React, { Component } from "react";
import PropTypes from "prop-types";
import { Button } from "react-bootstrap";

class CommonButton extends Component {
  render() {
    return (
      <Button
        onClick={e => this.props.onClick(e.target.value)}
        value={this.props.value}
        style={this.props.style}
      >
        {this.props.name}
      </Button>
    );
  }
}

CommonButton.defaultProps = {
  style: PropTypes.object,
  value: PropTypes.string,
  onClick: PropTypes.func
};

CommonButton.defaultProps = {
  style: { margin: "auto" }
};

export default CommonButton;
