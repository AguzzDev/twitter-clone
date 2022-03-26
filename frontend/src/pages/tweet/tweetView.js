import { ChevronLeftIcon } from "@heroicons/react/outline"
import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router"
import TimeAgo from "timeago-react"

import Layout from "../../components/Layout"
import { IconsSm } from "../../components/icons"
import { getPostsById } from "../../store/actions/tweets"
import TweetItem from "../../components/TweetItem"
import { Link } from "react-router-dom"

export default function TweetView() {
  const history = useHistory()
  const postId = history.location.pathname
    .split("/status/")
    .slice(1, 2)
    .join(" ")

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPostsById(postId))
  }, [postId])

  const { tweet } = useSelector((state) => state.tweets)

  const {
    content,
    createdAt,
    userImage,
    likeCount,
    name,
    selectedFile,
    username,
    isAdmin,
    _id:id
  } = tweet || []

  return (
    <Layout>
      <button
        onClick={() => history.goBack()}
        className="flex flex-row space-x-2 items-center p-3 border-b border-graylight dark:border-bordes"
      >
        <IconsSm Icon={ChevronLeftIcon} props="w-5 h-5" />
        <h1 className="font-bold">Tweet</h1>
      </button>

      <div>
        <TweetItem
          name={name}
          isAdmin={isAdmin}
          content={content}
          createdAt={createdAt}
          likeCount={likeCount}
          selectedFile={selectedFile}
          username={username}
          userImage={userImage}
          id={id}
        />
      </div>
    </Layout>
  )
}
