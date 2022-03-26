import { CameraIcon, XIcon } from "@heroicons/react/solid"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { uiCloseModal } from "../../store/actions/ui"
import { Avatar } from "../avatar"
import { IconsSm } from "../icons"
import FileBase from "react-file-base64"
import { Form, Formik } from "formik"
import { updateProfile } from "../../store/actions/profile"
import { fileUpload } from "../../api/cloudinary"

export const ModalProfile = ({
  user,
  userId,
  location,
  description,
  userImage,
  userBanner,
}) => {
  const dispatch = useDispatch()

  const [data, setData] = useState({
    userImage: userImage,
    userBanner: userBanner,
  })

  const Image = ({ type }) => {
    if (type === "userImage") {
      return (
        <>
          {data.userImage ? (
            <img
              src={data.userImage}
              className="w-32 h-32 object-cover rounded-full"
            />
          ) : (
            <Avatar props="w-32 h-32" />
          )}
        </>
      )
    } else {
      return (
        <div style={{ height: "200px" }}>
          {data.userBanner ? (
            <img src={data.userBanner} className="w-full h-full object-cover" />
          ) : (
            <img src={`${process.env.PUBLIC_URL}/Twitter-banner.png`} />
          )}
        </div>
      )
    }
  }
  return (
    <Formik
      initialValues={{
        name: user,
        description: description,
        location: location,
      }}
      onSubmit={async (values) => {
        if (data.userImage !== userImage || data.userBanner !== userBanner) {
          const userImage = await fileUpload(data.userImage)
          const userBanner = await fileUpload(data.userBanner)

          await dispatch(
            updateProfile({ ...values, userImage, userBanner, user: userId })
          )
          dispatch(uiCloseModal())
        } else {
          await dispatch(updateProfile({ ...values, user: userId }))
          dispatch(uiCloseModal())
        }
      }}
    >
      {({ values, handleChange }) => (
        <Form>
          <div
            className=" bg-white dark:bg-body rounded-xl"
            style={{ width: "40vw" }}
          >
            <div className="flex items-center justify-between p-2">
              <div className="flex space-x-3">
                <button
                  onClick={() => dispatch(uiCloseModal())}
                  className="font-medium dark:text-white rounded-lg"
                >
                  <IconsSm Icon={XIcon} />
                </button>

                <h1 className="text-xl font-bold dark:text-white">
                  Editar perfil
                </h1>
              </div>

              <button
                type="submit"
                className="bg-gray1 dark:bg-white dark:text-white text-black font-bold py-2 px-3 rounded-xl"
              >
                Guardar
              </button>
            </div>

            <div className="flex flex-col">
              <div className="relative">
                <Image type="userBanner" />

                <div
                  className="absolute"
                  style={{
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%,-50%)",
                  }}
                >
                  <button
                    className="absolute text-gray-800 hover:bg-gray-200 p-2 rounded-full"
                    style={{
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%,-50%)",
                    }}
                  >
                    <IconsSm Icon={CameraIcon} />
                    <FileBase
                      type="file"
                      multiple={false}
                      onDone={({ base64 }) =>
                        setData({ ...data, userBanner: base64 })
                      }
                    />
                  </button>
                </div>

                <div className="absolute -bottom-16 left-5">
                  <div className="relative">
                    <Image type="userImage" />
                    <button
                      className="absolute text-gray-800 hover:bg-gray-200 p-2 rounded-full"
                      style={{
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%,-50%)",
                      }}
                    >
                      <IconsSm Icon={CameraIcon} />
                      <FileBase
                        type="file"
                        multiple={false}
                        onDone={({ base64 }) =>
                          setData({ ...data, userImage: base64 })
                        }
                      />
                    </button>
                  </div>
                </div>
              </div>

              <div className="mt-20 mb-5 mx-4 space-y-5">
                <div className="flex flex-col w-full rounded-md border dark:border-bordes border-gray-500">
                  <label className="mx-2"> Nombre </label>
                  <input
                    type="text"
                    value={values.name}
                    onChange={handleChange}
                    name="name"
                  />
                </div>
                <div className="flex flex-col w-full rounded-md border dark:border-bordes border-gray-500">
                  <label className="mx-2"> Biografía </label>
                  <textarea
                    maxLength="250"
                    style={{ resize: "none" }}
                    className="w-full h-full text-lg"
                    type="text"
                    value={values.description}
                    name="description"
                    onChange={handleChange}
                  />
                </div>
                <div className="flex flex-col w-full rounded-md border dark:border-bordes border-gray-500">
                  <label className="mx-2"> Ubicación </label>
                  <input
                    type="text"
                    onChange={handleChange}
                    value={values.location}
                    name="location"
                  />
                </div>
              </div>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  )
}
