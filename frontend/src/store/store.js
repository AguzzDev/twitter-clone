import { createStore, combineReducers, applyMiddleware } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from "redux-thunk"

import { authReducer } from "./reducers/authReducer"
import { profileReducer } from "./reducers/profileReducer"
import { tweetsReducer } from "./reducers/tweetsReducer"
import { uiReducer } from "./reducers/uiReducer"
import { userReducer } from "./reducers/userReducer"

const reducers = combineReducers({
  tweets: tweetsReducer,
  auth: authReducer,
  ui: uiReducer,
  profile: profileReducer,
  user:userReducer
})

export const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk))
)
