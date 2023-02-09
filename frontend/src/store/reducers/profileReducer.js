import { types } from "store/types/types"

const initialState = {
  profile: { data: [], loading: true, status: null },
  profiles: { data: [], loading: true, status: null },
  postLiked: { data: [], loading: true, status: null },
}

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.uiLoadProfile:
      return {
        ...state,
        [action.payload.value]: {
          ...state[action.payload.value],
          data: [],
          loading: true,
        },
      }
    case types.getProfile:
      return {
        ...state,
        profile: {
          data: action.payload.data,
          loading: false,
          status: action.payload.status,
        },
      }
    case types.getAllUsers:
      return {
        ...state,
        profiles: {
          data: action.payload.data,
          loading: false,
          status: action.payload.status,
        },
      }
    case types.getPostsLiked:
      return {
        ...state,
        postLiked: {
          data: action.payload.data,
          loading: false,
          status: action.payload.status,
        },
      }
    default:
      return state
  }
}
