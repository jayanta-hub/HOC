import React, { Component } from "react";
import WithCounter from "../Hoc/WithCounter";

class HoverCounter extends Component {
  render() {
    const { counter, increament } = this.props;

    return (
      <>

        <button onMouseOver={increament}>{`Click ${counter} time`}</button>
      </>
    );
  }
}

export default WithCounter(HoverCounter, 5);
