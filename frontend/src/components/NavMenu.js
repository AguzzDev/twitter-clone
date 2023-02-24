import { Logo } from './avatar'
import { NavMenuItems } from 'components/NavMenuItems'
import { DropdownNavUser } from 'components/Dropdown/DropdownNavUser'
import { ModalInputBox } from 'components/Modal/ModalInputBox'

export function NavMenu () {
  return (
    <div className='flex flex-col items-center justify-start w-full h-screen px-1 xl:justify-start xl:items-start md:px-5 xl:px-0 xl:w-10/12'>
      <a href='/home'>
        <div className='p-2 mt-3 rounded-full cursor-pointer fill-current text-blue1 dark:text-white hover:bg-gray1 hover:bg-opacity-40 dark:hover:bg-opacity-10'>
          <Logo props='w-7 h-7' />
        </div>
      </a>
      <div className='flex flex-col mt-2 space-y-4 xl:space-y-1'>
        <NavMenuItems />
      </div>
      <div className='flex flex-col w-full mt-5 xl:mr-5'>
        <div className='hidden w-5/6 xl:flex'>
          <ModalInputBox />
        </div>
      </div>
      <div className='flex items-end w-full h-full mb-5'>
        <DropdownNavUser />
      </div>
    </div>
  )
}
