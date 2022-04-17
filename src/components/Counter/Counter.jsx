import React, { useState } from "react";
import "./Counter.css";
const Counter = () => {
  const [counter, setCounter] = useState(0);
  function increase() {
    setCounter(counter + 1);
  }
  function decrease() {
    setCounter(counter - 1);
    if (counter === 0) {
      setCounter(0);
      alert("you can't decrease no more");
    }
  }
  return (
    <div className="container">
      <div className="box_area">
        <h2 className="second_heading">Value of The counter is {counter} </h2>
        <div className="button_area">
          <button className="btn" onClick={increase}>
            Increase by One{" "}
          </button>
          <button className="btn" onClick={decrease}>
            Decrease by One{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
