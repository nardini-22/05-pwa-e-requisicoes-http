import { React, useState, useEffect } from "react";
import axios from "axios";
import "./style.css";

function Select({ action, secSelect }) {
  const [data, setData] = useState([{ id: "" }]);
  useEffect(() => {
    axios
      .get(
        "http://free.currencyconverterapi.com/api/v6/currencies?apiKey=de3d41c3cfeb1d320be5"
      )
      .then((response) => setData(Object.values(response.data.results)))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <div className="custom-select">
        <select
          onChange={(e) => {
            action(e.target.value);
          }}
        >
          {data.map((e) => {
            return (
              <option key={e.id} value={e.id}>
                {e.id} / {e.currencyName}
              </option>
            );
          })}
        </select>
      </div>
    </>
  );
}

export default Select;
