import { CheckIcon, DotsHorizontalIcon } from "@heroicons/react/outline"

import { deleteAccount, logout } from "../../store/actions/auth"
import { Dropdown } from "react-bootstrap"
import { useDispatch } from "react-redux"
import { useHistory } from "react-router"
import { getUser } from "../../utils/getUser"
import { Avatar } from "../avatar"
import { IconsSm } from "../icons"

export const DropdownNavUser = () => {
  const history = useHistory()
  const dispatch = useDispatch()

  const Logout = () => {
    dispatch(logout(history))
  }

  const deleteUser = () => {
    dispatch(deleteAccount(getUser?._id))
  }

  return (
    <Dropdown drop="up" className="h-full flex items-end w-full">
      <Dropdown.Toggle className="mb-5 flex flex-row items-center w-full xl:px-4 xl:py-2 rounded-full hover:bg-gray1 hover:bg-opacity-40 dark:hover:bg-opacity-10 cursor-pointer">
        <div className="flex items-center justify-center w-full xl:w-1/4">
          <Avatar />
        </div>
        <div className="hidden xl:flex flex-col w-3/4 text-left ml-2">
          <h1 className="font-bold text-black dark:text-white">
            {getUser?.name}
            <br />
            {getUser?.username}
          </h1>
        </div>
        <div className="hidden xl:flex fill-current text-black dark:text-white">
          <IconsSm Icon={DotsHorizontalIcon} />
        </div>
      </Dropdown.Toggle>
      <Dropdown.Menu
        className="p-5 bg-white dark:bg-body rounded-lg"
        style={{
          width: "250px",
          boxShadow:
            "rgb(101 119 134 / 20%) 0px 0px 15px, rgb(101 119 134 / 15%) 0px 0px 3px 1px",
        }}
      >
        <div className="flex items-center w-full">
          <div className="flex items-center justify-center w-full xl:w-1/4">
            <Avatar />
          </div>
          <div className="flex flex-col w-3/4 text-left ml-2">
            <h1 className="font-bold text-black dark:text-white">
              {getUser?.name}
              <br />
              {getUser?.username}
            </h1>
          </div>
          <div className="fill-current text-blue1">
            <IconsSm Icon={CheckIcon} />
          </div>
        </div>
        <div className=" pl-3 py-3 rounded-sm">
          <button
            onClick={() => deleteUser()}
            className="hover:bg-graylight dark:hover:bg-bodylight mb-3 text-left dark:text-white w-full"
          >
            Eliminar cuenta
          </button>
          <button onClick={Logout} className="hover:bg-graylight dark:hover:bg-bodylight text-left dark:text-white w-full">
            Cerrar la sesión
          </button>
        </div>
      </Dropdown.Menu>
    </Dropdown>
  )
}
