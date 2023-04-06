import React from "react";

import CheckGif from "../assets/images/check-icon.gif";

import "./modal.scss";

const Modal = () => {
  return (
    <div className="modal">
      <img src={CheckGif} alt="checked icon" />
      <div>
        <p className="modal__text">Your Email has been sent Successfully</p>
        <p className="modal__text">Thank you for contacting me. </p>
      </div>
    </div>
  );
};

export default Modal;
