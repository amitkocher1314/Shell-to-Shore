import React, { Fragment } from "react";
import ReactDOM from "react-dom";

// Backdrop Component
const BackDrop = (props) => {
  return (
    <div onClick={props.onClick} className="fixed top-0 left-0 w-full h-screen z-20 bg-gray-700/[.94] "></div>
  );
};

// ModalOverlay Component
const ModalOverlay = (props) => {
  return (
    <div className="fixed top-[105px] w-[640px] md:left-[calc(50%-20rem)] bg-white p-4 rounded-lg shadow-lg z-30 max-h-[60vh] overflow-y-auto animate-slide-down">
      {props.children}
    </div>
  );
};

// Modal Component
const modalLoc = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<BackDrop  onClick={props.onClick} />, modalLoc)}
      {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, modalLoc)}
    </Fragment>
  );
};

export default Modal;
