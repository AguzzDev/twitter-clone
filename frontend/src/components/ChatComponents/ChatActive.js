import { PlusCircleIcon } from "@heroicons/react/solid";
import React from "react";

import SendIcon from "../assets/svg/SendIcon";
import { Avatar } from "../avatar";
import { IconsSm } from "../icons";

export const ChatActive = () => {
  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center py-2 px-4 justify-between border-b border-bordes">
        <div className="flex items-center">
          <Avatar props="h-5 w-5" />
          <div className="ml-4">
            <h1 className="text-white">Nombre</h1>
            <h1 className="text-gray-300 text-sm">arroba</h1>
          </div>
        </div>
        <div>
          <div
            title="Configuración"
            className="fill-current text-white rounded-full p-2 hover:bg-bodylight cursor-pointer"
          >
            <IconsSm Icon={PlusCircleIcon} />
          </div>
        </div>
      </div>

      <div className="flex flex-col" style={{ height: "92%" }} />

      <div
        className="px-5 flex items-center justify-center border-t border-bordes space-x-10"
        style={{ height: "8%" }}
      >
        <div className="px-4 py-2 rounded-full w-10/12 border border-bordes">
          <input
            placeholder="Escribe un mensaje"
            className="bg-transparent outline-none w-full text-white"
          />
        </div>
        <button title="Enviar" className="p-2 rounded-full hover:bg-bodylight">
          <SendIcon />
        </button>
      </div>
    </div>
  );
};
