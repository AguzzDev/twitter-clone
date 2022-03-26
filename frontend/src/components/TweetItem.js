import React from "react"
import TimeAgo from "timeago-react"
import * as timeago from "timeago.js"
import es from "timeago.js/lib/lang/es"
import { Link, useLocation } from "react-router-dom"

import FavoriteIcon from "../assets/svg/FavoriteIcon"
import MessageIcon from "../assets/svg/MessageIcon"
import RetweetIcon from "../assets/svg/RetweetIcon"
import { deletePost, likePost } from "../store/actions/tweets"
import { useDispatch } from "react-redux"
import { TrashIcon } from "@heroicons/react/outline"
import { IconsSm } from "./icons"
import { getUser } from "../utils/getUser"
import { userVerificate } from "../utils/userVerificate"
timeago.register("es", es)

export const TweetItem = ({
  userImage,
  id,
  username,
  createdAt,
  content,
  selectedFile,
  likeCount,
  name,
  isAdmin,
}) => {
  const dispatch = useDispatch()
  const history = useLocation()
  const path = history.pathname.split("/").length

  const ButtonBar = ({ name, children, type, variable }) => {
    const alreadyLiked = likeCount
      ?.map((like) => like.id === getUser._id)
      .join(" ")

    return (
      <button
        onClick={() => dispatch(type(id))}
        className="fill-current text-bordes dark:text-gray1 hover:text-blue1"
      >
        <div
          className={`${
            name === "like" &&
            alreadyLiked === "true" &&
            "fill-current text-blue1"
          } flex items-center space-x-3`}
        >
          <div className="w-5">{children}</div>
          <p
            className={`${
              name === "like" && alreadyLiked === "true" && "text-blue1"
            } `}
          >
            {variable !== 0 && variable}
          </p>
        </div>
      </button>
    )
  }
  const Content = () => {
    return (
      <div className="flex flex-row pb-5">
        <div className="flex flex-col w-1/12 pt-1">
          <div className="w-12 h-12">
            <Link to={`/profile/${username?.substring(1)}`}>
              <img
                src={
                  userImage
                    ? userImage
                    : `${process.env.PUBLIC_URL}/AvatarDefault.png`
                }
                className="w-12 h-12 object-cover rounded-full"
              />
            </Link>
          </div>
        </div>
        <div className="flex flex-col w-11/12 pl-1 mt-1 xl:px-5">
          <div className="flex flex-row w-11/12 xl:w-full">
            <h1 className="font-medium dark:text-white">
              {userVerificate(name, isAdmin, username)}
            </h1>
            <span className="ml-1 text-gray-500 transform scale-150">·</span>
            <span className="ml-1 text-gray-500">
              <TimeAgo datetime={createdAt} locale="es" />
            </span>
          </div>
          <div className="flex flex-col w-11/12 mt-1 xl:w-full">
            <p className="w-full mb-2 break-words text-dark dark:text-white">
              {content}
            </p>
            {selectedFile !== "" && (
              <img
                className={`${
                  path === 4 ? "w-full" : "w-4/6"
                } object-cover border rounded-xl border-graylight dark:border-bordes`}
                src={selectedFile}
              />
            )}
          </div>
        </div>
      </div>
    )
  }
  return (
    <div
      style={{ minHeight: "100px" }}
      className={`${
        path !== 4 &&
        "cursor-pointer hover:bg-graylight dark:hover:bg-bodylight"
      }flex flex-col p-3 border-bborder-graylight dark:border-bordes`}
    >
      {path === 4 ? (
        <Content />
      ) : (
        <Link to={`/${username.substring(1)}/status/${id}`}>
          <Content />
        </Link>
      )}
      <div className="flex justify-between ml-16">
        <div className="space-x-14">
          <ButtonBar type={likePost}>
            <MessageIcon />
          </ButtonBar>
          <ButtonBar type={likePost}>
            <RetweetIcon />
          </ButtonBar>
          <ButtonBar name="like" type={likePost} variable={likeCount?.length}>
            <FavoriteIcon />
          </ButtonBar>
        </div>
        {path === 4 && (getUser.username === username || getUser.isAdmin) && (
          <div>
            <ButtonBar type={deletePost}>
              <IconsSm Icon={TrashIcon} />
            </ButtonBar>
          </div>
        )}
      </div>
    </div>
  )
}

export default TweetItem
