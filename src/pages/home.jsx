import React from "react";

import { useDispatch } from "react-redux";
import { increment, decrement, reset } from "../features/count/count.js";
function Home() {
  const dispatch = useDispatch();
  
  const handleIncrementClick = (num) => {
    dispatch(increment(num));
  };
  const handleDecrementClick = (num) => {
    dispatch(decrement(num));
  };
  const handleReset = () => {
    dispatch(reset());
  };
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <div>
        <button
          onClick={() => {
            handleIncrementClick(1);
          }}
        >
          +1
        </button>
        <button
          onClick={() => {
            handleDecrementClick(1);
          }}
        >
          -1
        </button>
      </div>
      <div>
        <button
          onClick={() => {
            handleIncrementClick(5);
          }}
        >
          +5
        </button>
        <button
          onClick={() => {
            handleDecrementClick(5);
          }}
        >
          -5
        </button>
      </div>

      <div>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
}

export default Home;
