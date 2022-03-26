import React from "react"
import { SearchIcon } from "@heroicons/react/solid"

import { IconsSm } from "./icons"

export const SearchAside = () => {
  return (
    <div className="flex bg-graylight dark:bg-blue2 p-2 mt-2 rounded-full border border-opacity-0 focus-within:border-blue1 hover:border-opacity-100">
      <div className="flex my-auto text-gray1 mx-2">
        <IconsSm Icon={SearchIcon} />
      </div>
      <input className="bg-transparent dark:text-white outline-none w-full" />
    </div>
  )
}
