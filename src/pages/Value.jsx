import React from "react";
import { useSelector } from "react-redux";

function Value() {
    const count = useSelector((state) => state.count);
  return (
    <>
      <h1>Count Page</h1>
      <p>Current Value:{count}</p>
    </>
  );
}

export default Value;
