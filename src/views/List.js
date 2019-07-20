import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { addNote as updateNoteAsFinished } from '../actions/index'
import { priorityMapping } from '../utils/utils'
import '../css/List.css'
import Header from '../components/Header'
import ListItem from '../components/ListItem'


const List = props => {
  return (
    <div className="list">
      <Header title={'Todo-list'}/>
      <div className="list-items">
        {props.notes.map(note =>
          <ListItem key={note.index} note={note} />
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
  )
}

const mapStateToProps = state => ({
  notes: state.notes
})

const mapDispatchToProps = dispatch => ({
  updateNoteAsFinished: note => dispatch(updateNoteAsFinished(note))
})

export default connect(mapStateToProps, mapDispatchToProps)(List)
