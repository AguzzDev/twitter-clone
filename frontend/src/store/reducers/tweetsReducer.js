import { types } from "../types/types"

export const tweetsReducer = (state = { tweets: [], tweet: [] }, action) => {
  switch (action.type) {
    case types.LoadTweets:
      return {
        ...state,
        tweets: action.payload,
      }
    case types.LoadOneTweet:
      return {
        ...state,
        tweet: action.payload,
      }
    case types.TweetDetails:
    case types.CreateTweet: {
      return {
        tweets: [...state.tweets, action.payload],
      }
    }
    // case types.UpdatedTweet:
    case types.DeleteTweet:
      return {
        ...state,
        tweets: state.tweets.filter(
          (tweet) => tweet._id !== action.payload._id
        ),
      }
    case types.LikeTweet:
      return {}
    default:
      return state
  }
}
