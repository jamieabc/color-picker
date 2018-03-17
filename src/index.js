import React, { Component } from "react";
import FlatColorPicker from "./flat-color";
import Button from "./button";
import Bar from "./Bar";

class ColorPicker extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: "Flat Color"
    };
    this.changeView = this.changeView.bind(this);
  }

  changeView(target) {
    this.setState({ selected: target });
  }

  render() {
    const bar =
      this.state.selected !== "Flat Color" ? (
        <div>
          {" "}
          <Bar /> <hr />{" "}
        </div>
      ) : null;

    return (
      <div style={{ width: "220px" }}>
        <div
          style={{
            float: "top",
            width: "100%",
            heigth: "10%",
            display: "inline-flex",
            flexDirectory: "row",
            flexWrap: "wrap",
            justifyContent: "center"
          }}
        >
          <Button name="A" value="Flat Color" onClick={this.changeView} />
          <Button name="B" value="Linear Gradient" onClick={this.changeView} />
          <Button name="C" value="Radial Gradient" onClick={this.changeView} />
          <Button name="D" value="Angular Gradient" onClick={this.changeView} />
        </div>
        <hr />
        {bar}
        <div style={{ float: "bottom", heigth: "90%" }}>
          <FlatColorPicker />
        </div>
      </div>
    );
  }
}

export default ColorPicker;
