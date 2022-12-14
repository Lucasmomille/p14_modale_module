import React from "react";
import "./index.css"

const Modal = ({ setIsOpen, modalClass = '' }) => {
    return (
      <>
        <div id="confirmation" className={`modal ${modalClass}`}>
          <div className="modal__text">
            Employee Created!
            <span className='modal__close' onClick={() => setIsOpen(false)}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
          </span>
          </div>
        </div>
      </>
    );
};
export default Modal