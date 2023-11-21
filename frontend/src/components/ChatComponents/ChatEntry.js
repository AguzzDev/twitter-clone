import React from "react";
import { Avatar } from "../avatar";

export const ChatEntry = () => {
  return (
    <div className="flex flex-row p-3 hover:bg-graylight dark:hover:bg-bodylight cursor-pointer">
      <div>
        <Avatar props="h-5 w-5" />
      </div>
      <div className="flex flex-col w-full px-3">
        <div className="flex items-center space-x-2">
          <h1 className="dark:text-white">Nombre</h1>
          <h1 className="text-gray-500 dark:text-gray-300 text-sm">arroba</h1>
          <div className="flex justify-end w-full text-sm text-gray-500 dark:text-gray-300">
            <h1>Time</h1>
          </div>
        </div>
      </div>
    </div>
  );
};
