import { NavLink, useLocation } from 'react-router-dom'

import { navMenuData } from 'data/navMenuData'

export function NavMenuItems () {
  const { pathname } = useLocation()
  return (
    <>
      {navMenuData.map(({ link, svg, text }, i) => (
        <NavLink
          key={i}
          to={link}
          className='flex flex-row items-center p-1 rounded-full cursor-pointer w-max hover:bg-gray1 hover:bg-opacity-40 dark:bg-opacity-10 group xl:p-3 xl:pr-6'
        >
          {svg}

          <h1
            className={`${
              `/${pathname.split('/')[1]}` === link ? 'font-bold ' : null
            } hidden ml-5 text-xl text-black xl:flex dark:text-white`}
          >
            {text}
          </h1>
        </NavLink>
      ))}
    </>
  )
}
