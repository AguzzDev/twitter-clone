import { Logo } from "./avatar";
import { NavMenuItems } from "components/NavMenuItems";
import { DropdownNavUser } from "components/Dropdown/DropdownNavUser";
import { ModalInputBox } from "components/Modal/ModalInputBox";
import { NavLink } from "react-router-dom";

export function NavMenu() {
  return (
    <div className="flex flex-col my-1">
      <NavLink to="/home">
        <div className="w-max p-2 rounded-full fill-current text-blue1 dark:text-white hover:bg-gray1 hover:bg-opacity-40 dark:hover:bg-opacity-10">
          <Logo props="w-7" />
        </div>
      </NavLink>

      <NavMenuItems />

      <div className="my-2">
        <ModalInputBox />
      </div>

      <div className="flex items-end h-full mb-2 md:mb-0">
        <DropdownNavUser />
      </div>
    </div>
  );
}
