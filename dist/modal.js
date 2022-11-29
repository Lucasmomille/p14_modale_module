import React from "react";
import "./index.css";
const Modal = ({
  setIsOpen,
  modalClass = ''
}) => {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    id: "confirmation",
    className: "modal"
  }, /*#__PURE__*/React.createElement("div", {
    className: `modal__text ${modalClass}`
  }, "Employee Created!", /*#__PURE__*/React.createElement("span", {
    className: "modal__close",
    onClick: () => setIsOpen(false)
  }, /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    className: "w-6 h-6"
  }, /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M6 18L18 6M6 6l12 12"
  }))))));
};
export default Modal;