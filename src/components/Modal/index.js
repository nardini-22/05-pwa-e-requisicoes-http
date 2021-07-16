import React from "react";
import "./style.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faCheck } from "@fortawesome/free-solid-svg-icons";

const Icon = <FontAwesomeIcon className="iconExit" icon={faTimes} />;
const Error = <FontAwesomeIcon className="iconError" icon={faTimes} />;
const IconCheck = <FontAwesomeIcon className="iconCheck" icon={faCheck} />;

function Modal({ value, display, action }) {
  if (display.display && display.error === false) {
    let formatedResult = value.result
      .toFixed(2)
      .replace(".", ",")
      .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");

    let formatedNumber = value.value
      .replace(".", ",")
      .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
    return (
      <>
        <div className="overlay">
          <div className="modalContainer animateBottom">
            <div className="header">
              <h1>Sucess!</h1>
              <button className="exit" onClick={action}>
                {Icon}
              </button>
            </div>
            <div className="iconContainerCheck">
            {IconCheck}
            </div>
              <h5>Your information has been validated</h5>
            <p>Converted {formatedNumber} {value.frsSelect} into {formatedResult} {value.secSelect}</p>
              
          </div>
        </div>
      </>
    );
  }
  if (display.display && display.error === true) {
    return (
      <>
        <div className="overlay">
          <div className="modalContainer bounce">
            <div className="headerError">
              <h1>Error!</h1>
              <button className="exit" onClick={action}>
                {Icon}
              </button>
            </div>
            <div className="iconContainer">
            {Error}
            </div>
            <h5>Error validating your informations</h5>
            <p>
              Fill the field with a valid number and above zero, avoid other
              characters than numbers !
            </p>
          </div>
        </div>
      </>
    );
  }
  return null;
}

export default Modal;
