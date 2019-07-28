import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import moment from 'moment'

import { addNote, addError, clearErrors } from '../actions/'

import Hamburger from '../components/Hamburger'
import RadioButtonGroup from '../components/RadioButtonGroup'
import TextInput from '../components/TextInput'

import '../css/AddTodo.css'

const errorSource = 'ADD_TODO_ERROR'

class AddTodo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      deadline: '',
      priority: 'LOW',
      submitted: false
    }
  }
  onSubmit = e => {
    e.preventDefault()
    let errors = false
    this.props.clearErrors({ source: errorSource})

    if (!this.state.title) {
      errors = true
      this.props.addError({
        message: 'Title required',
        source: errorSource
      })
    }

    const deadline = moment(this.state.deadline, 'DD.MM.YYYY')
    if (!deadline.isValid()) {
      errors = true
      this.props.addError({
        message: 'Wrong date format for deadline. Use DD.MM.YYYY',
        source: errorSource
      })
    }

    if (!errors) {
      const note = {
        title: this.state.title,
        deadline: deadline.toDate(),
        priority: this.state.priority
      }
      this.props.addNote(note)
      this.setState({
        submitted: true
      })
    }
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
    //TODO: From priorityMappings
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
      <Fragment>
        <Hamburger right noOverlay />
        <form onSubmit={this.onSubmit}>
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
            {this.props.errors && this.props.errors.map(error =>
              <div key={error.message} className="div-error">
                {error.message}
              </div>
            )}
            {this.state.submitted &&
              <div className="div-submitted">
                Note added!
              </div>
            }
          </div>
        </form>
      </Fragment>
    )
  }
}

AddTodo.propTypes = {
  errors: PropTypes.arrayOf(
    PropTypes.shape({
      message: PropTypes.string.isRequired,
      source: PropTypes.string
    })
  ),
  addNote: PropTypes.func.isRequired,
  addError: PropTypes.func.isRequired,
  clearErrors: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  errors: state.errors.filter(error => error.source === 'ADD_TODO_ERROR')
})

const mapDispatchToProps = dispatch => ({
  addNote: note => dispatch(addNote(note)),
  addError: error => dispatch(addError(error)),
  clearErrors: source => dispatch(clearErrors(source))
})

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo)
