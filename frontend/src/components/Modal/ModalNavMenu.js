import React, { useContext } from "react"
import { useDispatch } from "react-redux"
import DarkModeContext from "../../context/DarkModeContext"
import { uiCloseModal } from "../../store/actions/ui"

export const ModalNavMenu = () => {
  const dispatch = useDispatch()
  const { handleClick1, handleClick2 } = useContext(DarkModeContext)

  return (
    <div className="flex flex-col p-10 bg-white dark:bg-body rounded-xl">
      <div className="text-center">
        <h1 className="text-2xl font-bold dark:text-white">
          Personaliza tu visualización
        </h1>
        <p className="mt-3 text-gray-600 dark:text-gray-300">
          Administra el fondo, color y tamaño de la fuente. Esta configuración
          afecta a todas las cuentas de Twitter en este navegador.
        </p>
      </div>

      <div>
        <h1 className="mt-3 text-sm font-medium text-gray-600 dark:text-gray-300">
          Imagen de fondo
        </h1>

        <div className="flex items-center justify-between mt-2 space-x-5">
          <button
            onClick={handleClick1}
            className="w-2/4 p-3 font-medium bg-white border-2 border-opacity-0 rounded-md focus-within:border-blue1 focus-within:border-opacity-100"
          >
            Predeterminado
          </button>
          <button
            onClick={handleClick2}
            className="w-2/4 p-3 font-medium text-white border-2 border-opacity-0 rounded-md bg-body focus-within:border-blue1 focus-within:border-opacity-100"
          >
            Noche
          </button>
        </div>
        <div className="flex justify-center mt-5">
          <button
            onClick={() => dispatch(uiCloseModal())}
            className="px-5 py-2 font-medium text-white rounded-lg bg-blue1"
          >
            Listo
          </button>
        </div>
      </div>
    </div>
  )
}
