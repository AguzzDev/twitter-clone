import React from "react"
import "./styles/globals.css"
import "./styles/modal.css"
import "./styles/select.css"

import { Provider } from "react-redux"
import { store } from "./store/store"
import { AppRouter } from "./router/AppRouter"

const App = () => {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  )
}

export default App
