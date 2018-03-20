import React, { Component } from "react";
import FlatColorPicker from "./flat-color";
import Button from "./button";
import Bar from "./Bar";

const factory = obj => {
  return <Button name={obj.name} value={obj.value} onClick={obj.func} />;
};

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

    const btns = [
      { name: "A", value: "Flat Color", func: this.changeView },
      { name: "B", value: "Linear Gradient", func: this.changeView },
      { name: "C", value: "Radial Gradient", func: this.changeView },
      { name: "D", value: "Angular Gradient", func: this.changeView }
    ].map(obj => factory(obj));

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
          {btns}
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
