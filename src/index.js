import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './containers/App'
import reducer from './reducers'
import 'todomvc-app-css/index.css'
import DevTools from "./containers/DevTools"

const store = createStore(
  reducer,
  DevTools.instrument()
)

render(
  <Provider store={store}>
    <div>
      <App />
      <DevTools />
    </div>
  </Provider>,
  document.getElementById('root')
)
