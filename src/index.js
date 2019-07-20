import React from 'react'
import ReactDOM from 'react-dom'
import './css/index.css'
import List from './views/List'
import { Provider } from 'react-redux'
import configureStore from './store'

ReactDOM.render(
  <Provider store={configureStore()}>
    <List />
  </Provider>,
  document.getElementById('root'))
