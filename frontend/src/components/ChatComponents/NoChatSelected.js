import React from 'react'

export const NoChatSelected = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <div>
        <h1 className="font-bold dark:text-white text-3xl text-left w-3/4">No tienes ningún mensaje seleccionado</h1>
        <p className="text-gray1 mt-2">Elige uno de tus mensajes existentes o comienza uno nuevo.</p>

        <button className="py-3 px-5 bg-blue1 hover:bg-blue3 rounded-full mt-5 font-bold text-white">Nuevo mensaje</button>
      </div>
    </div>
  )
}
