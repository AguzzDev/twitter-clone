import { NavLink, useLocation } from "react-router-dom";

import { navMenuData } from "data/navMenuData";

export function NavMenuItems() {
  const { pathname } = useLocation();
  // console.log(pathname.split("/")[1]);
  return (
    <>
      {navMenuData.map(({ link, svg, text }, i) =>
        link ? (
          <NavLink
            key={i}
            to={link}
            className="w-max p-3 rounded-full cursor-pointer hover:bg-gray1 hover:bg-opacity-40 dark:hover:bg-opacity-10"
          >
            {svg}
          </NavLink>
        ) : (
          <div className="w-max p-3 rounded-full cursor-pointer hover:bg-gray1 hover:bg-opacity-40 dark:bg-opacity-10">
            {svg}
          </div>
        )
      )}
    </>
  );
}
