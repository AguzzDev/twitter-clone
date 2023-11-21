import { XIcon } from "@heroicons/react/outline";
import React, { useState } from "react";
import Modal from "react-modal";
import { IconsSm } from "../icons";
import { TwitterInputBox } from "../TwitterInputBox";
import { PencilIcon } from "@heroicons/react/solid";

Modal.setAppElement("#root");
export const ModalInputBox = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        className="w-max p-2 rounded-full bg-blue1 hover:bg-blue3"
        onClick={() => setOpen(true)}
      >
        <PencilIcon className="w-7 text-white rounded-full" />
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
              <IconsSm Icon={XIcon} />
            </button>
          </div>
          <TwitterInputBox closeModal={setOpen} />
        </div>
      </Modal>
    </>
  );
};
