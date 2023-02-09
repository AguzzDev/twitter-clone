import { EmojiHappyIcon, TrashIcon } from "@heroicons/react/outline"
import Picker from "emoji-picker-react"
import { useState, useRef } from "react"
import Dropzone from "react-dropzone"
import { useLocation } from "react-router"
import { useDispatch } from "react-redux"

import { fileUpload } from "api/cloudinary"
import { createPost, createComment, deleteComment } from "store/actions/tweets"
import { DictionaryBadWords } from "utils/DictionaryBadWords"
import { Avatar } from "./avatar"
import { IconsSm } from "./icons"
import ImagesIcon from "assets/ImagesIcon"

export function TwitterInputBox({ closeModal }) {
  const textAreaRef = useRef()
  const dispatch = useDispatch()
  const location = useLocation()

  const isTweetResponse = location.pathname.includes("/status/")
  const [active, setActive] = useState(false)
  const [imagePreview, setImagePreview] = useState([])
  const [dataInput, setDataInput] = useState({
    content: "",
    selectedFile: "",
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (dataInput.content == "" && dataInput.selectedFile == "") return 

    const badWords = await DictionaryBadWords(dataInput.content)

    if (badWords.length > 0) {
      setDataInput({ ...dataInput, content: "" })
      return alert(":/")
    }

    if (dataInput.selectedFile) {
      const file = await fileUpload(dataInput.selectedFile)
      const { selectedFile, ...rest } = dataInput
      isTweetResponse
        ? await dispatch(
            createComment({
              data: { ...rest, file },
              id: location.pathname.split("/")[3],
            })
          )
        : await dispatch(createPost({ data: { ...rest, file } }))
    } else {
      isTweetResponse
        ? await dispatch(
            createComment({
              data: dataInput,
              id: location.pathname.split("/")[3],
            })
          )
        : await dispatch(createPost({ data: dataInput }))
    }

    setDataInput({
      content: "",
      selectedFile: "",
    })
    setImagePreview([])
    closeModal && closeModal(false)
  }

  const handleSubmitImage = (files) => {
    if (imagePreview.length === 4 || files.length > 4) {
      return alert("Solo 4 imagenes")
    }

    setDataInput((prev) => {
      return {
        ...prev,
        selectedFile: files.map((v) => {
          return {
            id: v.lastModified,
            image: v,
          }
        }),
      }
    })

    files.map((file) => {
      const reader = new FileReader()
      reader.onload = (e) => {
        setImagePreview((prev) =>
          prev.concat({ id: file.lastModified, image: e.target.result })
        )
      }
      reader.readAsDataURL(file)
    })
  }
  const removeImage = (value) => {
    const filterPreview = imagePreview.filter(({ id }) => id != value)
    const selectedFile = dataInput.selectedFile.filter(({ id }) => id != value)
    setImagePreview(filterPreview)
    setDataInput((prev) => {
      return { ...prev, selectedFile }
    })
  }

  const handleEmoji = (e) => {
    setDataInput({
      ...dataInput,
      content: dataInput.content + e.emoji,
    })
  }

  return (
    <section className="bg-white border-b border-graylight dark:border-bordes dark:bg-body">
      <div className="flex flex-row p-3">
        <div className="flex flex-col w-1/12">
          <Avatar props="w-12 h-12" />
        </div>
        <div className="w-full pl-5 mt-3">
          <div>
            <textarea
              ref={textAreaRef}
              maxLength="250"
              style={{ resize: "none" }}
              className="w-full text-lg h-24"
              placeholder="¿Qué está pasando?"
              name="content"
              value={dataInput.content}
              onChange={(e) =>
                setDataInput({ ...dataInput, content: e.target.value })
              }
            />
            <div className="grid grid-cols-2">
              {imagePreview?.map(({ image, id }) => (
                <div className="relative max-h-[10rem]">
                  <img className="object-cover w-full h-full" src={image} />
                  <button
                    onClick={() => removeImage(id)}
                    className="absolute p-2 text-white rounded-full fill-current -top-4 -left-4 bg-blue1"
                  >
                    <IconsSm Icon={TrashIcon} />
                  </button>
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex space-x-3">
              <button className="relative" onClick={() => setActive(!active)}>
                <IconsSm Icon={EmojiHappyIcon} props="hover:text-blue1" />
                <div
                  className={`${!active ? "hidden" : "absolute top-7 z-50"} `}
                >
                  <Picker
                    theme="dark"
                    disableSearchBar
                    onEmojiClick={handleEmoji}
                  />
                </div>
              </button>
              <Dropzone onDrop={handleSubmitImage}>
                {({ getRootProps, getInputProps }) => (
                  <button>
                    <div {...getRootProps()}>
                      <input {...getInputProps()} />
                      <ImagesIcon className="w-5 h-5 text-white fill-current hover:text-blue1" />
                    </div>
                  </button>
                )}
              </Dropzone>
            </div>

            <button
              onClick={(e) => handleSubmit(e)}
              className="px-5 py-2 mt-2 font-bold text-white rounded-full bg-blue1 hover:bg-blue3"
            >
              Twittear
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
