import { React, useState } from "react";
import "./style.css";

function Input({ action }) {
  const [number, setNumber] = useState();

  const validateNumber = (value) => {
    const res = value.replace("-", "");
    setNumber(res);
    action(res);
  };
  return (
    <>
      <label>Amount </label>
      <input
        type="number"
        onChange={(e) => validateNumber(e.target.value)}
        value={number}
      />
    </>
  );
}

export default Input;
