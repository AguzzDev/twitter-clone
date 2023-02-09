import { CheckIcon, DotsHorizontalIcon } from "@heroicons/react/outline"
import { useDispatch } from "react-redux"
import { useHistory } from "react-router"
import * as Menu from "@radix-ui/react-dropdown-menu"
import { useState } from "react"

import { deleteAccount, logout } from "../../store/actions/auth"
import { getUser } from "utils/getUser"
import { Avatar } from "../avatar"
import { IconsSm } from "../icons"
import { UserVerificateNav } from "components/Profile/UserVerificate"
import { DeleteModal } from "components/Modal/DeleteModal"

export const DropdownNavUser = () => {
  const [open, setOpen] = useState(false)
  const history = useHistory()
  const dispatch = useDispatch()

  const Logout = () => {
    dispatch(logout(history))
  }

  const deleteUser = () => {
    dispatch(deleteAccount(getUser._id))
  }

  return (
    <>
      <Menu.Root>
        <Menu.Trigger className="flex items-center justify-center w-full xl:px-4 xl:py-2 rounded-full hover:bg-gray1 hover:bg-opacity-40 dark:hover:bg-opacity-10 select-none">
          <Avatar />
          <div className="hidden xl:flex flex-col w-3/4 text-left pl-3">
            <UserVerificateNav />
          </div>
          <div className="hidden xl:flex fill-current text-black dark:text-white">
            <IconsSm Icon={DotsHorizontalIcon} />
          </div>
        </Menu.Trigger>

        <Menu.Portal>
          <Menu.Content
            className="w-[15vw] bg-body rounded-lg cursor-pointer select-none"
            style={{
              boxShadow:
                "rgb(101 119 134 / 20%) 0px 0px 15px, rgb(101 119 134 / 15%) 0px 0px 3px 1px",
            }}
          >
            <Menu.Item
              disabled
              className="flex items-center hover:bg-bodylight px-5 py-3 border-none"
            >
              <div className="flex items-center justify-center w-full xl:w-1/4">
                <Avatar />
              </div>
              <div className="flex flex-col w-3/4 text-left ml-2">
                <UserVerificateNav />
              </div>
              <div className="fill-current text-blue1">
                <IconsSm Icon={CheckIcon} />
              </div>
            </Menu.Item>

            <Menu.Item
              disabled
              onClick={() => setOpen(true)}
              className="hover:bg-bodylight px-5 py-3"
            >
              Eliminar cuenta
            </Menu.Item>
            <Menu.Item
              disabled
              onClick={Logout}
              className="hover:bg-bodylight px-5 py-3"
            >
              Cerrar la sesión
            </Menu.Item>
          </Menu.Content>
        </Menu.Portal>
      </Menu.Root>

      <DeleteModal
        title="Eliminar Cuenta"
        description="Esta accion es irreversible, seguro que quieres eliminar la cuenta?"
        open={open}
        setOpen={setOpen}
      >
        <button
          onClick={() => deleteUser()}
          className="py-2 rounded-md w-full bg-blue1 text-white font-semibold"
        >
          Borrar cuenta
        </button>
      </DeleteModal>
    </>
  )
}
