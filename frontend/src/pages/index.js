import React from "react"
import { Link } from "react-router-dom"

import { Logo } from "components/avatar"
import { ModalSteps } from "components/Modal/ModalSteps"

export default function Index() {
  return (
    <main className="w-screen h-screen bg-black">
      <section className="flex flex-col md:flex-row h-screen">
        <div className="flex w-full h-full md:w-2/4">
          <img
            src={`${process.env.PUBLIC_URL}/twitterindeximagen.jpg`}
            alt="Main Twitter Image"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="flex flex-col justify-center w-full p-10 bg-black md:w-2/4">
          <div className="text-gray-300 fill-current">
            <Logo props="w-20 h-20" />
          </div>
          <div className="mt-10 font-bold text-gray-300 lg:w-9/12 md:mt-20">
            <h1 className="text-5xl md:text-6xl">Lo que esta pasando ahora</h1>
            <h1 className="mt-10 text-3xl md:text-4xl">
              Únete a Twitter hoy mismo.
            </h1>
          </div>
          <div className="flex flex-col w-full mt-5 space-y-3 sm:w-3/4 xl:w-2/4">
            <ModalSteps />
          </div>
          <div className="flex mt-10">
            <h1 className="text-white">¿Ya tienes una cuenta?</h1>
            <Link to="/auth">
              <h1 className="ml-3 text-blue1">Inicia sesión</h1>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
