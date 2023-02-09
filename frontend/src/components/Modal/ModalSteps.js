import React, { useState } from "react"
import Modal from "react-modal"
import { AllSteps } from "components/Steps/allSteps"

export const ModalSteps = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button
        data-test-id="buttonRegister2"
        onClick={() => setOpen(true)}
        className="flex flex-row items-center justify-center py-3 bg-white rounded-full hover:bg-gray-300"
      >
        <h1 className="font-medium text-black">Registrate con Email</h1>
      </button>
      <Modal
        isOpen={open}
        onRequestClose={() => setOpen(false)}
        className="modal"
        overlayClassName="modal-fondo"
        contentLabel="Example Modal"
      >
        <AllSteps />
      </Modal>
    </>
  )
}
