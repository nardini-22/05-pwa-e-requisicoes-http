import { React, useState, useEffect } from "react";
import axios from "axios";
import "./style.css";

function Button({ value, action, display }) {
  const [data, setData] = useState({});
  useEffect(() => {
    axios
      .get(
        `http://free.currencyconverterapi.com/api/v6/convert?q=${value.frsSelect}_${value.secSelect}&compact=ultra&apiKey=de3d41c3cfeb1d320be5`
      )
      .then((response) => setData(response.data))
      .catch((error) => console.log(error));
  }, [value.frsSelect, value.secSelect]);

  const calculateRes = () => {
    if (value.value.length > 0) {
      action(data[`${value.frsSelect}_${value.secSelect}`] * value.value);
      display({
        error: false,
        display: true,
      });
    } else {
      display({
        error: true,
        display: true,
      });
    }
  };

  return (
    <>
      <button
        className="submit"
        onClick={() => {
          calculateRes();
        }}
      >
        Convert
      </button>
    </>
  );
}

export default Button;
