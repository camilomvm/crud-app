import React, { useState } from "react";
import "./style.css";

const Modal = ({ isOpen, onClose, children, isAccept, handleFunct }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {isAccept && (
          <button className="modal-close" onClick={onClose}>
            x
          </button>
        )}
        {children}
        <div className="buttons-modal">
          {isAccept ? (
            <></>
          ) : (
            <>
              <button className="confirm-button" onClick={handleFunct}>
                Aceptar
              </button>

              <button className="cancel-button" onClick={onClose}>
                Cancelar
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
