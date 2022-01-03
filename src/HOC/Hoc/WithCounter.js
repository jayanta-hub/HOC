import React, { useState } from "react";

const WithCounter = (WrappedCounter, number) => {
  const NewComponent = (props) => {
    const [counter, setCounter] = useState(0);

    const increament = () => {
      setCounter(counter + number);
    };
    return (
      <WrappedCounter counter={counter} increament={increament} {...props} />
    );
  };

  return NewComponent;
};

export default WithCounter;
