import React from "react"
import Modal from "react-modal"
import { Link, useHistory } from "react-router-dom"
import { GoogleLogin } from "react-google-login"
import { useDispatch, useSelector } from "react-redux"

import { Logo } from "../components/avatar"
import { AllSteps } from "../components/Steps/allSteps"
import { uiCloseModal, uiOpenModal } from "../store/actions/ui"

export default function Index() {
  const history = useHistory()
  const dispatch = useDispatch()
  const { open } = useSelector((state) => state.ui)
  function openModal() {
    dispatch(uiOpenModal())
  }
  function closeModal() {
    dispatch(uiCloseModal())
  }

  const GoogleId = process.env.REACT_APP_GOOGLE_ID

  const googleSuccess = async (res) => {
    const result = res?.profileObj
    const token = res?.tokenId

    try {
      dispatch({ type: "AUTH", data: { result, token } })
    } catch (error) {
      console.log(error)
    }
  }
  const googleFailure = (err) => {
    console.log(err)
    console.log("Google Sign In Error,Try again")
  }
  return (
    <div className="w-screen h-screen bg-black">
      <div className="flex flex-col md:flex-row " style={{ height: "100vh" }}>
        <div className="flex w-full md:w-2/4 h-full">
          <img
            src={`${process.env.PUBLIC_URL}/twitterindeximagen.jpg`}
            alt="Main Twitter Image"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="flex flex-col justify-center w-full md:w-2/4 p-10 bg-black">
          <div className="fill-current text-gray-300">
            <Logo props="w-20 h-20" />
          </div>
          <div className="lg:w-9/12 mt-10 md:mt-20 text-gray-300 font-bold">
            <h1 className="text-5xl md:text-6xl">Lo que esta pasando ahora</h1>
            <h1 className="text-3xl md:text-4xl mt-10">
              Únete a Twitter hoy mismo.
            </h1>
          </div>
          <div className="flex flex-col space-y-3 w-full sm:w-3/4 xl:w-2/4 mt-5">
            <GoogleLogin
              clientId={GoogleId}
              render={(renderProps) => (
                <button
                  className="flex flex-row items-center justify-center w-full bg-white py-3 rounded-full hover:bg-gray-300"
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}
                >
                  <img
                    src={`${process.env.PUBLIC_URL}/google-icon.svg`}
                    className="w-5 h-5"
                  />
                  <h1 className="ml-2 font-medium">Registrate con Google</h1>
                </button>
              )}
              onSuccess={googleSuccess}
              onFailure={googleFailure}
              cookiePolicy="single_host_origin"
            />
            <button
              onClick={openModal}
              className="flex flex-row items-center justify-center bg-white py-3 rounded-full hover:bg-gray-300"
            >
              <h1 className="font-medium">Registrate con Email</h1>
            </button>
            <Modal
              isOpen={open}
              onRequestClose={closeModal}
              className="modal"
              overlayClassName="modal-fondo"
              contentLabel="Example Modal"
            >
              <AllSteps />
            </Modal>
          </div>
          <div className="flex mt-10 ">
            <h1 className="text-white">¿Ya tienes una cuenta?</h1>
            <Link to="/auth">
              <h1 className="ml-3 text-blue1">Inicia sesión</h1>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
