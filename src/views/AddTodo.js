import React from 'react'

import Hamburger from '../components/Hamburger'
import RadioButtonGroup from '../components/RadioButtonGroup'

import '../css/AddTodo.css'

class AddTodo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      deadline: '',
      priority: 'LOW'

    }
  }
  onSubmit = e => {
    e.preventDefault()
  }

  onRadioChange = e => {
    this.setState({
      priority: e.target.value
    })
  }

  render() {
    const radioValues = [
      {
        value: 'LOW',
        checked: this.state.priority === 'LOW'
      },
      {
        value: 'MEDIUM',
        checked: this.state.priority === 'MEDIUM'
      },
      {
        value: 'HIGH',
        checked: this.state.priority === 'HIGH'
      }
    ]
    return (
      <form onSubmit={this.onSubmit}>
        <Hamburger right noOverlay />
        <h1>Add todo</h1>
        <div className="div-add-items">
          <div className="div-input-line">
            <h2>Title</h2>
            <input
              type="text"
              name="title"
              placeholder="Write title"
            />
          </div>
          <div className="div-input-line">
            <h2>Deadline</h2>
            <input
              type="text"
              name="Deadline"
              placeholder="19.7.2019"
            />
          </div>
          <RadioButtonGroup
            title="Priority"
            name="priority"
            onChange={this.onRadioChange}
            values={radioValues}
          />
          <button type="submit">Add</button>
        </div>

      </form>
    )
  }
}

export default AddTodo
