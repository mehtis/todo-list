import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import List from './views/List'
import AddTodo from './views/AddTodo'

const App = () =>
  <Router>
    <Route exact path="/" component={List} />
    <Route path="/add" component={AddTodo} />
  </Router>

export default App
