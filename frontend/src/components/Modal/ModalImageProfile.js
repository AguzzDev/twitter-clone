import { XIcon } from "@heroicons/react/solid"
import { useState } from "react"
import Modal from "react-modal"
import { IconsSm } from "../icons"

export const ModalImageProfile = ({ profile }) => {
  const [open1, setOpen1] = useState(false)
  const [open2, setOpen2] = useState(false)

  const ModalBody = ({ type, close }) => {
    return (
      <div>
        <button onClick={close}>
          <IconsSm Icon={XIcon} />
        </button>

        {type === "userImage" ? (
          <img
            src={`${
              !profile?.userImage
                ? `${process.env.PUBLIC_URL}/AvatarDefault.png`
                : `${profile.userImage}`
            }`}
            style={{ maxWidth: "250px", maxHeight: "250px" }}
            className="rounded-full border-4 border-white dark:border-body cursor-pointer hover:opacity-90"
          />
        ) : (
          <div>
            <img
              src={`${
                !profile?.userBanner
                  ? `${process.env.PUBLIC_URL}/Twitter-banner.png`
                  : `${profile.userBanner}`
              }`}
              style={{ maxWidth: "1000px", maxHeight: "600px" }}
            />
          </div>
        )}
      </div>
    )
  }

  return (
    <>
      <button
        onClick={() => setOpen1(true)}
        className="w-full"
        style={{ height: "200px" }}
      >
        <img
          src={`${
            !profile?.userBanner
              ? `${process.env.PUBLIC_URL}/Twitter-banner.png`
              : `${profile.userBanner}`
          }`}
          className="w-full h-full overflow-hidden object-cover"
        />
      </button>
      <Modal
        isOpen={open1}
        onRequestClose={() => setOpen1(false)}
        className="modal-profileimage"
        overlayClassName="modal-fondo"
      >
        <ModalBody type="userBanner" close={() => setOpen1(false)} />
      </Modal>

      <div className="w-32 h-32 absolute top-32 left-5 rounded-full bg-white dark:bg-body">
        <button onClick={() => setOpen2(true)}>
          <img
            src={`${
              !profile?.userImage
                ? `${process.env.PUBLIC_URL}/AvatarDefault.png`
                : `${profile.userImage}`
            }`}
            className="w-full h-full rounded-full border-4 border-white dark:border-body cursor-pointer hover:opacity-90"
          />
        </button>
        <Modal
          isOpen={open2}
          onRequestClose={() => setOpen2(false)}
          className="modal-profileimage"
          overlayClassName="modal-fondo"
        >
          <ModalBody type="userImage" close={() => setOpen2(false)} />
        </Modal>
      </div>
    </>
  )
}
