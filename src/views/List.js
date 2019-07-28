import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { updateNote, removeNote } from '../actions/index'
import { priorityMapping } from '../utils/utils'

import Hamburger from '../components/Hamburger'
import ListItem from '../components/ListItem'

import '../css/List.css'


const List = props => {

  const markAsFinished = note => {
    note.finished = !note.finished
    props.updateNote(note)
  }

  const removeNote = note => props.removeNote(note)

  return (
    <div className="list">
      <Hamburger right noOverlay />
      <h1>Todo-list</h1>
      <div className="list-items">
        {props.notes.map(note =>
          <ListItem
            key={note.index}
            note={note}
            markAsFinished={markAsFinished}
            removeNote={removeNote}
          />
        )}
      </div>
    </div>
  )
}

List.propTypes = {
  notes: PropTypes.arrayOf(
    PropTypes.shape({
      finished: PropTypes.bool.isRequired,
      title: PropTypes.string,
      deadline: PropTypes.instanceOf(Date),
      priority: PropTypes.oneOf(priorityMapping),
      index: PropTypes.number.isRequired,
    })
  ),
  updateNote: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  notes: state.notes
})

const mapDispatchToProps = dispatch => ({
  updateNote: note => dispatch(updateNote(note)),
  removeNote: note => dispatch(removeNote(note))
})

export default connect(mapStateToProps, mapDispatchToProps)(List)
