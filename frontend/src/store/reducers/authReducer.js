import { types } from "store/types/types";

const initialState = {
  data: null,
  loading: true,
  error: null,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.uiLoadAuth:
      return {
        ...state,
        loading: true,
      };
    case types.login:
    case types.register:
    case types.update:
      !action.payload.error &&
        window.localStorage.setItem(
          "profile",
          JSON.stringify(action.payload.data)
        );
 
      return {
        error: action.payload.error || state.error,
        loading: false,
        data: JSON.parse(window.localStorage.getItem("profile")) || [],
      };
    case types.logout:
      window.localStorage.removeItem("profile");
      return {
        error: null,
        loading: false,
        data: null,
      };

    default:
      return state;
  }
};
