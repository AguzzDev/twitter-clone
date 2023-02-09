import { ChevronLeftIcon } from "@heroicons/react/outline"
import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router"

import Layout from "components/Layout"
import { IconsSm } from "components/icons"
import { getPostsById } from "store/actions/tweets"
import TweetItem from "components/TweetItem"
import LoadingSpinner from "assets/svg/LoadingSpinner"
import { TwitterInputBox } from "components/TwitterInputBox"

export default function TweetView() {
  const history = useHistory()
  const postId = history.location.pathname
    .split("/status/")
    .slice(1, 2)
    .join(" ")

  const dispatch = useDispatch()
  const { tweet } = useSelector((state) => state.tweets)

  useEffect(() => {
    dispatch(getPostsById(postId))
  }, [postId])

  return (
    <Layout>
      {tweet.loading ? (
        <div className="grid place-content-center mt-10">
          <LoadingSpinner />
        </div>
      ) : (
        <section>
          <button
            onClick={() => history.goBack()}
            className="flex flex-row items-center w-full p-3 space-x-2 border-b border-graylight dark:border-bordes"
          >
            <IconsSm Icon={ChevronLeftIcon} props="w-5 h-5" />
            <h1 className="font-bold text-black dark:text-white">Tweet</h1>
          </button>
          <div>
            {tweet.status === 200 ? (
              <>
                <TweetItem key={tweet.data._id} tweet={tweet.data} />
                <TwitterInputBox />
                {tweet.data.comments.length === 0 ? (
                  <div className="grid place-content-center mt-10">
                    <h2>Aun no hay comentarios</h2>
                  </div>
                ) : (
                  tweet.data.comments.map((tweet) => (
                    <TweetItem key={tweet._id} tweet={tweet} comment={true} />
                  ))
                )}
              </>
            ) : (
              <p className="p-3">Este tweet no existe</p>
            )}
          </div>
        </section>
      )}
    </Layout>
  )
}
