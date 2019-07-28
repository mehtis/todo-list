import React from 'react'

import Hamburger from '../components/Hamburger'
import RadioButtonGroup from '../components/RadioButtonGroup'
import TextInput from '../components/TextInput'

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

  onTitleChange = e => {
    this.setState({
      title: e.target.value
    })
  }

  onDeadlineChange = e => {
    this.setState({
      deadline: e.target.value
    })
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
        checked: this.state.priority === 'LOW',
        label: 'Low'
      },
      {
        value: 'MEDIUM',
        checked: this.state.priority === 'MEDIUM',
        label: 'Medium'
      },
      {
        value: 'HIGH',
        checked: this.state.priority === 'HIGH',
        label: 'High'
      }
    ]
    return (
      <form onSubmit={this.onSubmit}>
        <Hamburger right noOverlay />
        <h1>Add todo</h1>
        <div className="div-add-items">
          <TextInput
            title="Title"
            name="title"
            value={this.state.title}
            placeholder="Write title"
            onChange={this.onTitleChange}
          />
          <TextInput
            title="Deadline"
            name="deadline"
            value={this.state.deadline}
            placeholder="19.7.2019"
            onChange={this.onDeadlineChange}
          />
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
