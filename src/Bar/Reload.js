import React, { Component } from "react";
import PropTypes from "prop-types";
import FA from "@fortawesome/react-fontawesome";
import { faRedo } from "@fortawesome/fontawesome-free-solid";

class Reload extends Component {
  render() {
    return <FA icon={faRedo} onClick={this.props.resetPosition} />;
  }
}

Reload.propType = {
  resetPosition: PropTypes.func
};

export default Reload;
