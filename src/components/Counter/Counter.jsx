import React, { useState } from "react";
import "./Counter.css";
const Counter = () => {
  const [counter, setCounter] = useState(0);
  function increase(num) {
    setCounter(counter + num);
  }
  function decrease(num) {
    setCounter(counter - num);
    if (counter === 0 || counter < 0) {
      setCounter(0);
      alert("you can't decrease no more");
    }
  }
  return (
    <div className="container">
      <div className="box_area">
        <h2 className="second_heading">Value of The counter is {counter} </h2>
        <div className="button_area">
          <button className="btn" onClick={() => increase(1)}>
            Increase by One{" "}
          </button>
          <button className="btn" onClick={() => decrease(1)}>
            Decrease by One{" "}
          </button>
          <button className="btn" onClick={() => increase(5)}>
            Increase by Five{" "}
          </button>
          <button className="btn" onClick={() => decrease(5)}>
            Decrease by Five{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
