import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"

import TweetItem from "./TweetItem"
import { getTweets } from "../store/actions/tweets"

export function TweetList() {
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    dispatch(getTweets())
    setLoading(false)
  }, [dispatch])

  const { tweets } = useSelector((state) => state.tweets)

  const [limit, setLimit] = useState(10)

  const moreTweets = () => {
    setLimit(limit + 10)
  }
  return (
    <>
      {!loading &&
        tweets
          .map((tweet, i) => {
            return (
              <TweetItem
                key={i}
                isAdmin={tweet.isAdmin}
                userId={tweet._id}
                userImage={tweet.userImage}
                id={tweet._id}
                name={tweet.name}
                username={tweet.username}
                createdAt={tweet.createdAt}
                content={tweet.content}
                selectedFile={tweet.selectedFile}
                likeCount={tweet.likeCount}
                moreTweets={moreTweets}
              />
            )
          })
          .reverse()
          .slice(0, limit)}
      {tweets.length < limit ? null : (
        <button className="mb-5 font-bold bg-blue1 py-3 px-5 rounded-full w-full text-center text-white dark:text-black" onClick={() => moreTweets()}>Cargar mas</button>
      )}
    </>
  )
}
