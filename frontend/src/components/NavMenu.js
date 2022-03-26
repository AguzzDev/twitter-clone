import { XIcon } from "@heroicons/react/solid"
import Modal from "react-modal"
import { useDispatch, useSelector } from "react-redux"

import { Logo } from "./avatar"
import { IconsSm } from "./icons"
import { NavMenuItems } from "./NavMenuItems"
import { TwitterInputBox } from "./TwitterInputBox"
import { uiOpenModal, uiCloseModal } from "../store/actions/ui"
import { DropdownNavUser } from "./Dropdown/DropdownNavUser"

Modal.setAppElement("#root")
export function NavMenu() {
  const { open } = useSelector((state) => state.ui)
  const dispatch = useDispatch()

  function openModal() {
    dispatch(uiOpenModal())
  }
  function closeModal() {
    dispatch(uiCloseModal())
  }
  return (
    <div className="flex flex-col items-center justify-start xl:justify-start xl:items-start px-1 md:px-5 xl:px-0 w-full xl:w-10/12 h-screen">
      <a href="/home">
        <div className="fill-current text-blue1 dark:text-white mt-3 cursor-pointer hover:bg-gray1 hover:bg-opacity-40 dark:hover:bg-opacity-10 rounded-full p-2">
          <Logo props="w-7 h-7" />
        </div>
      </a>
      <div className="flex flex-col mt-2 space-y-4 xl:space-y-1">
        <NavMenuItems />
      </div>
      <div className="flex flex-col  mt-5 xl:mr-5 w-full">
        <div className="hidden xl:flex w-5/6">
          <button
            onClick={openModal}
            className="py-3 bg-blue1 hover:bg-blue3 rounded-full w-full text-white font-bold"
          >
            Twittear
          </button>
          <Modal
            isOpen={open}
            onRequestClose={closeModal}
            className="modal-tweet"
            overlayClassName="modal-fondo-tweetmodal"
          >
            <div className="bg-white dark:bg-body border-b border-graylight dark:border-bodylight flex justify-end w-full py-2 px-5">
              <button onClick={closeModal}></button>
              <TwitterInputBox />
            </div>
          </Modal>
        </div>
      </div>
      <DropdownNavUser />
    </div>
  )
}
