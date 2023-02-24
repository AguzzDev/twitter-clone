import React from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorkerRegistration from './serviceWorkerRegistration'

import App from './App'
import './styles/globals.css'

ReactDOM.render(<App />, document.getElementById('root'))

serviceWorkerRegistration.register()
