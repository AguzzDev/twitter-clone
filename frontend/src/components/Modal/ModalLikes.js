import { XIcon } from "@heroicons/react/solid"
import { IconsSm } from "../icons"
import { UserVerificate3 } from "components/Profile/UserVerificate"
import { useState } from "react"
import Modal from "react-modal"

export const ModalLikes = ({ data }) => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button onClick={() => setOpen(!open)}>
        <h1 className="text-black dark:text-white">
          {data.length} Me gusta
        </h1>
      </button>

      <Modal
        isOpen={open}
        onRequestClose={() => setOpen(false)}
        className="modal-changeProfile"
        overlayClassName="modal-fondo"
      >
        <div className="flex flex-col p-2 bg-white rounded-md dark:bg-black">
          <div className="flex space-x-2">
            <button onClick={() => setOpen(false)}>
              <IconsSm Icon={XIcon} />
            </button>
            <p>Marcado como Me gusta por</p>
          </div>

          <div>
            {data?.length > 0 ? (
              data?.map(({ userImage, range, name, username }, i) => (
                <div className="flex items-center space-x-2" key={i}>
                  <div className="w-10 h-10">
                    <img
                      src={userImage}
                      className="object-cover w-full h-full rounded-full"
                    />
                  </div>
                  <div className="flex flex-col">
                    {UserVerificate3({ range, name, username })}
                  </div>
                </div>
              ))
            ) : (
              <p>Nadie dio Me gusta</p>
            )}
          </div>
        </div>
      </Modal>
    </>
  )
}
