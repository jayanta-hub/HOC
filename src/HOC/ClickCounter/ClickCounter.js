// import React, { Component } from "react";
// import WithCounter from '../Hoc/WithCounter';

// class ClickCounter extends Component {

//   render() {
//     const {counter,increament,name}=this.props
//     return (
//       <>
//         <button
//           onClick={increament}
//         >{`Click ${counter} time ${name}`}</button>
//       </>
//     );
//   }
// }

// export default WithCounter(ClickCounter,100);
import React from "react";
import WithCounter from "../Hoc/WithCounter";

const ClickCounter = ({ counter, increament, name }) => {
  return (
    <>
      <button onClick={increament}>{`Click ${counter} time ${name}`}</button>
    </>
  );
};

export default WithCounter(ClickCounter, 100);
