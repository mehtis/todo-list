import React from 'react'
import ReactDOM from 'react-dom'
import { AddTodo } from './AddTodo'

const defaultProps= {
  errors: [],
  addNote: () => {},
  addError: () => {},
  clearErrors: () => {}
}
//TODO: More tests
it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<AddTodo {...defaultProps} />, div)
  ReactDOM.unmountComponentAtNode(div)
})
