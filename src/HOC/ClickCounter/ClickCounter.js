import React, { Component } from "react";
import WithCounter from '../Hoc/WithCounter';

class ClickCounter extends Component {
  
  render() {
    const {counter,increament}=this.props
    return (
      <>
        <button
          onClick={increament}
        >{`Click ${counter} time`}</button>
      </>
    );
  }
}

export default WithCounter(ClickCounter,100);
