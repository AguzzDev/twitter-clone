import { ChevronDoubleUpIcon, MailOpenIcon } from "@heroicons/react/solid"

import { SearchAside } from "./SearchAside"
import { SeguirRecomendaciones } from "./SeguirRecomendaciones"
import { Trending } from "./Trending"
import { IconsSmd } from "./icons"
import { NavMenu } from "./NavMenu"

const Layout = ({ children }) => {
  return (
    <div className="relative">
      <div className="flex flex-row md:w-11/12 xl:w-9.5/12 mx-auto">
        <div className="sticky top-0 w-2/12 h-screen border-r border-graylight dark:border-bordes md:w-1/12 xl:w-3/12">
          <NavMenu />
        </div>

        <div className="w-10/12 border-r shadow-sm md:w-7/12 xl:w-3/6 border-graylight dark:border-bordes">
          {children}
        </div>

        <div
          className="hidden flex-col w-4/12 md:flex xl:w-4/12"
          style={{ height: "1200px" }}
        >
          <div className="px-8">
            <SearchAside />
            <Trending />
            <SeguirRecomendaciones />
          </div>
        </div>
      </div>
      <div
        className="fixed z-50 items-center justify-between hidden px-5 py-3 bg-white shadow-xl cursor-pointer dark:bg-body lg:flex -bottom-2 right-10 rounded-xl"
        style={{
          boxShadow:
            "rgb(101 119 134 / 20%) 0px 0px 15px, rgb(101 119 134 / 15%) 0px 0px 3px 1px",
          width: "400px",
        }}
      >
        <div className="flex items-center text-xl font-bold ext-black dark:text-white">
          <h1>Mensajes</h1>
        </div>
        <div className="flex items-center">
          <div
            title="Nuevo Mensaje"
            className="p-2 text-black rounded-full fill-current dark:text-white hover:bg-gray-300 dark:hover:bg-bodylight"
          >
            <IconsSmd Icon={MailOpenIcon} />
          </div>
          <div
            title="Expandir"
            className="p-2 text-black rounded-full fill-current dark:text-white hover:bg-gray-300 dark:hover:bg-bodylight"
          >
            <IconsSmd Icon={ChevronDoubleUpIcon} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Layout
