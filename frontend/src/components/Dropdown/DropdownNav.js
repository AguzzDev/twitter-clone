import React from "react"
import { Dropdown } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import Modal from "react-modal"

import { uiCloseModal, uiOpenModal } from "../../store/actions/ui"
import { ModalNavMenu } from "../Modal/ModalNavMenu"

export const DropdownNav = ({ items, svg, text }) => {
  const dispatch = useDispatch()
  const { open } = useSelector((state) => state.ui)

  return (
    <Dropdown drop="up">
      <Dropdown.Toggle>
        <div className="flex flex-row items-center cursor-pointer hover:bg-gray1 hover:bg-opacity-40 dark:bg-opacity-10 rounded-full group p-1 xl:p-3">
          {svg}
          <h1 className="hidden xl:flex text-black dark:text-white text-xl ml-5">
            {text}
          </h1>
        </div>
      </Dropdown.Toggle>

      <Dropdown.Menu
        className=" rounded-xl text-black dark:text-white flex flex-col bg-white dark:bg-body shadow-xl"
        style={{
          boxShadow:
            "rgb(101 119 134 / 20%) 0px 0px 15px, rgb(101 119 134 / 15%) 0px 0px 3px 1px",
          width: "250px",
        }}
      >
        {items.map(({ svg, text }) =>
          text === "Mostrar" ? (
            <Dropdown.Item className="flex items-center space-x-3  p-3 hover:bg-blue1 hover:bg-opacity-5 overflow-hidden">
              {svg}
              <button
                onClick={() => dispatch(uiOpenModal())}
                className="w-full text-left"
              >
                {text}
              </button>
              <Modal
                isOpen={open}
                onRequestClose={() => dispatch(uiCloseModal())}
                className="modal-changestyles"
                overlayClassName="modal-fondo-changestyles"
              >
                <ModalNavMenu />
              </Modal>
            </Dropdown.Item>
          ) : (
            <Dropdown.Item
              className="flex space-x-3 items-center p-3 hover:bg-blue1 hover:bg-opacity-5 overflow-hidden"
              href="#"
            >
              {svg}
              <h1 className="w-full">{text}</h1>
            </Dropdown.Item>
          )
        )}
      </Dropdown.Menu>
    </Dropdown>
  )
}
