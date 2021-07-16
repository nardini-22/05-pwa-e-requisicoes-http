import { React, useState } from "react";
import "./App.css";
import Input from "./components/Input";
import Select from "./components/Select";
import Button from "./components/Button";
import Modal from "./components/Modal";

function App() {
  const [result, setResult] = useState();
  const [value, setValue] = useState("");
  const [frsSelect, setFrsSelect] = useState("ALL");
  const [secSelect, setSecSelect] = useState("ALL");
  const [modal, setModal] = useState({
    error: false,
    display: false
  });

  return (
    <div className="container">
      <Input action={setValue} />
      <Select action={setFrsSelect} />
      <Select action={setSecSelect} options={secSelect} />
      <Button
        action={setResult}
        value={{ value, frsSelect, secSelect }}
        display={setModal}
      />
      <Modal
        value={{ value, result, frsSelect, secSelect }}
        display={modal}
        action={() => {
          setModal(!modal);
        }}
      />
    </div>
  );
}

export default App;
