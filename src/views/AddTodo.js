import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import moment from 'moment'
import styled from 'styled-components'

import { addNote, addError, clearErrors } from '../actions/'

import RadioButtonGroup from '../components/RadioButtonGroup'
import TextInput from '../components/TextInput'
import Notification from '../components/Notification'

const errorSource = 'ADD_TODO_ERROR'

const initialState = {
  title: '',
  deadline: '',
  priority: 'LOW',
  submitted: false
}

const PageWrapper = styled.div`
  padding-top: 20px;
`

const Wrapper = styled.div`
  margin: 30px;
`

const Button = styled.button`
  background: #4089DE;
  width: 179px;
  height: 42px;
  margin-top: 20px;
  color: #FFFFFF;
`

export class AddTodo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      ...initialState
    }
  }

  onSubmit = e => {
    e.preventDefault()
    let errors = false
    this.props.clearErrors({ source: errorSource})
    this.setState({submitted: false})

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
        ...initialState,
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

  clearInputs = () => {
    this.setState({
      ...initialState
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
      <PageWrapper>
        <form onSubmit={this.onSubmit}>
          <h1>Add todo</h1>
          <Wrapper>
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
            <Button type="submit" >Add</Button>
            { //TODO: Styling for errors
              this.props.errors && this.props.errors.map(error =>
                <div key={error.message} className="div-error">
                  {error.message}
                </div>
              )
            }
            {this.state.submitted &&
              <Notification message="Note added" />
            }
          </Wrapper>
        </form>
      </PageWrapper>
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
