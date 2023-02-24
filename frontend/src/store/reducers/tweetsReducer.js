import { types } from 'store/types/types'

export const tweetsReducer = (
  state = {
    tweets: { data: [], loading: true, status: null },
    tweet: { data: [], loading: true, status: null },
    trends: { data: [], loading: true, status: null },
    search: { data: [], loading: true, status: null }
  },
  action
) => {
  switch (action.type) {
    case types.uiLoadPost:
      return {
        ...state,
        [action.payload.value]: {
          ...state[action.payload.value],
          data: [],
          loading: true
        }
      }
    case types.LoadOneTweet:
      return {
        ...state,
        tweet: {
          data: action.payload.data,
          loading: false,
          status: action.payload.status
        }
      }
    case types.LoadTweets:
      return {
        ...state,
        tweets: {
          data: action.payload.data,
          loading: false,
          status: action.payload.status
        }
      }
    case types.LoadSearch:
      return {
        ...state,
        search: {
          data: action.payload.data,
          loading: false,
          status: action.payload.status
        }
      }
    case types.LoadTrends:
      return {
        ...state,
        trends: {
          data: action.payload.data,
          loading: false,
          status: action.payload.status
        }
      }
    case types.CreateTweet: {
      return {
        ...state,
        tweets: {
          ...state.tweets,
          data: [...state.tweets.data, action.payload]
        }
      }
    }
    case types.DeleteTweet:
      return {
        ...state,
        tweets: state.tweets.filter(
          (tweet) => tweet._id !== action.payload._id
        )
      }
    default:
      return state
  }
}
