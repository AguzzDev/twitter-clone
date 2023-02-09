import React from "react"
import Modal from "react-modal"

export const Layout = ({ children, setOpen, open, props }) => {
  return (
    <Modal
      isOpen={open}
      onRequestClose={() => setOpen(false)}
      className={`${props} bg-body`}
      overlayClassName="modal-fondo"
    >
      {children}
    </Modal>
  )
}
