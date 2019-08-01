import React from 'react'
import ReactDOM from 'react-dom'
import { List } from './List'

const defaultProps = {
  notes:
    [{
      finished: true,
      title: 'Test',
      deadline: new Date(2019, 7, 14),
      priority: 'LOW',
      id: 'iidee',
    }],
  updateNote: () => {}
}

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<List {...defaultProps} />, div)
  ReactDOM.unmountComponentAtNode(div)
})
