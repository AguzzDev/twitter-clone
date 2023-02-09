import { XIcon } from "@heroicons/react/outline"
import React, { useState } from "react"
import Modal from "react-modal"
import { IconsSm } from "../icons"
import { TwitterInputBox } from "../TwitterInputBox"

Modal.setAppElement("#root")
export const ModalInputBox = () => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="w-full py-3 font-bold text-white rounded-full bg-blue1 hover:bg-blue3"
      >
        Twittear
      </button>
      <Modal
        isOpen={open}
        onRequestClose={() => setOpen(false)}
        className="modal-tweet"
        overlayClassName="modal-fondo-tweetmodal"
      >
      <div className="w-[30rem]">
      <div className="flex justify-end w-full px-5 py-2 bg-white border-b dark:bg-body border-graylight dark:border-bodylight">
          <button onClick={() => setOpen(false)}>
            <IconsSm Icon={XIcon}/>
          </button>
        </div>
          <TwitterInputBox closeModal={setOpen}/>
      </div>
      </Modal>
    </>
  )
}
