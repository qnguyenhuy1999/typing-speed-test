import React from "react";

import { Modal, ModalTitle } from "./styles";

export default function ({ children, modal, onClose }) {
  return (
    modal && (
      <Modal className="modal">
        <ModalTitle className="modal-title">
          <h3 style={{ fontSize: "25px" }}>THIS IS YOUR RESULT</h3>
          <span
            style={{ cursor: "pointer", fontSize: "20px" }}
            onClick={onClose}
          >
            X
          </span>
        </ModalTitle>
        <div className="modal-body">{children}</div>
      </Modal>
    )
  );
}
