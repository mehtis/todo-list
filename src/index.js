import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import List from './views/List'
import AddTodo from './views/AddTodo'

import configureStore from './store'
import './css/index.css'

ReactDOM.render(
  <Provider store={configureStore()}>
    <List />
    <AddTodo />
  </Provider>,
  document.getElementById('root'))
