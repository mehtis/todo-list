import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import styled from 'styled-components'

import Hamburger from './components/Hamburger'

import List from './views/List'
import AddTodo from './views/AddTodo'

const PageWrapper = styled.div`
  width: 375px;
  height: 667px;
  background: #FFFFFF;
  padding: 15px;
  margin: 20px;
`

const App = () =>
  <Router>
    <Hamburger noOverlay />
    <PageWrapper>
      <Route exact path="/" component={List} />
      <Route path="/add" component={AddTodo} />
    </PageWrapper>
  </Router>

export default App
