import { EmojiHappyIcon, TrashIcon } from "@heroicons/react/outline"
import Picker from "emoji-picker-react"
import { useState, useRef } from "react"
import FileBase from "react-file-base64"
import { useDispatch } from "react-redux"

import { fileUpload } from "../api/cloudinary"
import { createPost } from "../store/actions/tweets"
import { DictionaryBadWords } from "../utils/DictionaryBadWords"

import { Avatar } from "./avatar"
import { IconsSm } from "./icons"

export function TwitterInputBox() {
  const textAreaRef = useRef()
  const dispatch = useDispatch()
  const [active, setActive] = useState(false)
  const [dataInput, setDataInput] = useState({
    content: "",
    selectedFile: "",
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (dataInput.content == "" && dataInput.selectedFile == "") return null

    const badWords = await DictionaryBadWords(dataInput.content)

    if (badWords.length > 0) {
      setDataInput({ ...dataInput, content: "" })
      return alert(":/")
    }

    if (dataInput.selectedFile !== "") {
      const file = await fileUpload(dataInput.selectedFile)
      setDataInput({ ...dataInput, selectedFile: file })
    }
    const data = { ...dataInput }
    await dispatch(createPost(data))
    setDataInput({
      content: "",
      selectedFile: "",
    })
  }

  const removeImage = () => {
    setDataInput({ selectedFile: "" })
  }

  const handleEmoji = (e, emoji) => {
    setDataInput({
      ...dataInput,
      content: dataInput.content + emoji.emoji,
    })
  }

  return (
    <div className="overflow-hidden bg-white border-b border-graylight dark:border-bordes dark:bg-body">
      <div className="flex flex-row p-3">
        <div className="flex flex-col w-1/12">
          <Avatar props="w-12 h-12" />
        </div>
        <div className="w-full pl-5 mt-3">
          <div>
            <textarea
              ref={textAreaRef}
              maxLength="250"
              style={{ resize: "none", height: "100px" }}
              className="w-full h-full text-lg"
              placeholder="¿Qué está pasando?"
              name="content"
              value={dataInput.content}
              onChange={(e) =>
                setDataInput({ ...dataInput, content: e.target.value })
              }
            ></textarea>
            {dataInput.selectedFile ? (
              <div className="relative" style={{ height: "20vh" }}>
                <img
                  className="w-full h-full object-contain"
                  src={dataInput.selectedFile}
                />
                <button
                  onClick={() => removeImage()}
                  className="absolute -top-2 -left-2 bg-blue1 p-2 rounded-full text-white fill-current"
                >
                  <IconsSm Icon={TrashIcon} />
                </button>
              </div>
            ) : null}
          </div>
          <div className="flex items-center justify-between">
            <div className="relative">
              <button onClick={() => setActive(!active)}>
                <IconsSm Icon={EmojiHappyIcon} />
                <div className={`${active ? "flex" : "hidden"}`}>
                  <Picker disableSearchBar onEmojiClick={handleEmoji} />
                </div>
              </button>
            </div>

            <label className="flex items-center justify-center px-3 rounded-full cursor-pointer fill-current text-blue1 hover:bg-gray-300 dark:hover:bg-bodylight">
              <FileBase
                type="file"
                multiple={false}
                onDone={({ base64 }) =>
                  setDataInput({ ...dataInput, selectedFile: base64 })
                }
              />
            </label>

            <button
              onClick={(e) => handleSubmit(e)}
              className="px-5 py-2 mt-2 font-bold text-white rounded-full bg-blue1 hover:bg-blue3"
            >
              Twittear
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
