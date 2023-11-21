import { NavLink, useLocation } from "react-router-dom";

import { navMenuData } from "data/navMenuData";

export function NavMenuItems() {
  return (
    <div className="flex flex-col space-y-1">
      {navMenuData.map(({ link, svg, text }, i) =>
        link ? (
          <NavLink
            key={i}
            to={link}
            className="w-max p-2 rounded-full cursor-pointer hover:bg-gray1 hover:bg-opacity-40 dark:hover:bg-opacity-10"
          >
            {svg}
          </NavLink>
        ) : (
          <div className="w-max p-2 rounded-full cursor-pointer hover:bg-gray1 hover:bg-opacity-40 dark:bg-opacity-10">
            {svg}
          </div>
        )
      )}
    </div>
  );
}
