import {
  ArrowLeftIcon,
  LocationMarkerIcon,
  CakeIcon,
} from "@heroicons/react/outline"
import { Link } from "react-router-dom"
import { useDispatch } from "react-redux"
import Modal from "react-modal"

import { uiCloseModal, uiOpenModal } from "../../store/actions/ui"
import { IconsSm } from "../../components/icons"
import { useSelector } from "react-redux"
import { ModalProfile } from "../Modal/ModalProfile"
import { getUser } from "../../utils/getUser"
import { ModalImageProfile } from "../Modal/ModalImageProfile"
import { deleteAccount } from "../../store/actions/auth"

export const ProfileBody = ({ profile, query, tweets }) => {
  const dispatch = useDispatch()
  const { open } = useSelector((state) => state.ui)

  return (
    <>
      <div className="flex flex-col py-2">
        <div className="flex items-center w-full border-b border-graylight dark:border-bordes">
          <Link
            to="/home"
            className="ml-3 mr-5 dark:text-graylight text-bodylight cursor-pointer"
          >
            <IconsSm Icon={ArrowLeftIcon} />
          </Link>
          <div className="leading-3 mb-1">
            <h1 className="text-xl dark:text-white font-bold">
              {profile?.name}
            </h1>

            <p className="text-gray1 dark:text-graylight text-sm">
              {tweets} Tweets
            </p>
          </div>
        </div>
        <div className="relative">
          <ModalImageProfile profile={profile} />
        </div>
        <div className="relative select-none">
          <div className=" w-full flex justify-end px-5 py-3 h-16">
            {getUser.username == `@${query}` && (
              <>
                <button
                  onClick={() => dispatch(uiOpenModal())}
                  className="dark:text-white py-1 px-3 border border-gray1  rounded-full font-medium"
                >
                  Editar Perfil
                </button>

                <Modal
                  isOpen={open}
                  onRequestClose={() => dispatch(uiCloseModal())}
                  className="modal-changeProfile"
                  overlayClassName="modal-fondo"
                >
                  <ModalProfile
                    userImage={profile?.userImage}
                    userBanner={profile?.userBanner}
                    user={profile?.name}
                    userId={profile?._id}
                    description={profile?.description}
                    location={profile?.location}
                  />
                </Modal>
              </>
            )}
            {getUser?.isAdmin && getUser.username != `@${query}` && (
              <button
                onClick={() => dispatch(deleteAccount(profile?._id))}
                className="dark:text-white py-1 px-3 border border-gray1  rounded-full font-medium"
              >
                Borrar cuenta
              </button>
            )}
          </div>

          <div className="px-5 w-full flex flex-col">
            <div>
              <h1 className="text-xl dark:text-white font-bold">
                {profile?.name}
              </h1>
              <h5 className="text-gray1  font-bold">{profile?.username}</h5>
            </div>
            <p className="my-2 dark:text-white">{profile?.description} </p>
            <div className="flex flex-col space-y-1">
              <div className="flex items-center text-gray-500 dark:text-gray1 text-sm ">
                <IconsSm Icon={LocationMarkerIcon} />
                <p className="ml-2">{profile?.location}</p>
              </div>
              <div className="flex items-center text-gray-500 dark:text-gray1 text-sm ">
                <IconsSm Icon={CakeIcon} />
                <p className="ml-2">
                  Fecha de nacimiento: {profile?.dia}/{profile?.mes}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
