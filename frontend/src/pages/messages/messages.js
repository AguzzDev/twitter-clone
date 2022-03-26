import { CogIcon, MailOpenIcon } from '@heroicons/react/solid'

import { ChatActive } from '../../components/ChatComponents/ChatActive'
import { ChatEntries } from '../../components/ChatComponents/ChatEntries'
import { NoChatSelected } from '../../components/ChatComponents/NoChatSelected'
import { IconsSm } from '../../components/icons'
import { NavMenu } from '../../components/NavMenu'

export const Messages = () => {

  return (
    <>
      <div className="flex flex-row md:w-11/12 xl:w-9.5/12 mx-auto">
        <div className="h-screen w-2/12 md:w-1/12 xl:w-3/12 sticky top-0">
          <NavMenu />
        </div>

        <div className="flex flex-row shadow-sm border-r border-l border-graylight dark:border-bordes w-full">
          <div className="w-2/6 shadow-sm border-r border-graylight dark:border-bordes">
            <div className="flex items-center justify-between p-3 border-b border-graylight dark:border-bordes">

              <div>
                <h1 className="text-xl font-bold text-black dark:text-white">Mensajes</h1>
              </div>

              <div className="flex">
                <div title="Nuevo Mensaje" className="fill-current text-black dark:text-white rounded-full p-2 hover:bg-graylight dark:hover:bg-bodylight cursor-pointer">
                  <IconsSm Icon={MailOpenIcon} />
                </div>
                <div title="Configuración" className="fill-current text-black dark:text-white rounded-full p-2 hover:bg-graylight dark:hover:bg-bodylight cursor-pointer">
                  <IconsSm Icon={CogIcon} />
                </div>
              </div>
            </div>
            <ChatEntries />
          </div>
          <div className="w-4/6">
            {/* {
              ? <NoChatSelected />
              : <ChatActive />
            } */}<NoChatSelected />
          </div>
        </div>
      </div>
    </>
  )
}
