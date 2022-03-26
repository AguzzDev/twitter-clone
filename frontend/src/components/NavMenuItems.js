import React from "react"
import Modal from "react-modal"
import { NavLink } from "react-router-dom"

import { navMenuData } from "../data/navMenuData"
import { DropdownNav } from "./Dropdown/DropdownNav"
import { getUser } from "../utils/getUser"

Modal.setAppElement("#root")
export function NavMenuItems() {
  const user = getUser
  return (
    <>
      {navMenuData.map(({ link, svg, items, text }, i) =>
        link ? (
          <NavLink
            key={i}
            to={
              link === "profile"
                ? `/${link}/${user.username.substring(1)}`
                : `/${link}`
            }
            activeClassName="font-bold"
            className="flex w-max flex-row items-center cursor-pointer hover:bg-gray1 hover:bg-opacity-40 dark:bg-opacity-10 rounded-full group p-1 xl:p-3 xl:pr-6"
          >
            {svg}

            <h1 className="hidden xl:flex text-black dark:text-white text-xl ml-5">
              {text}
            </h1>
          </NavLink>
        ) : (
          <DropdownNav svg={svg} text={text} items={items} />
        )
      )}
    </>
  )
}
