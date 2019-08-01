import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import styled from 'styled-components'

import { updateNote, removeNote } from '../actions/'
import { priorityMapping } from '../utils/utils'

import ListItem from '../components/ListItem'

const PageWrapper = styled.div`
  padding-top: 20px;
`

const ListWrapper = styled.div`
  align-items: center;
`

export const List = props => {

  const markAsFinished = note => {
    note.finished = !note.finished
    props.updateNote(note)
  }

  const removeNote = note => props.removeNote(note)

  //TODO: Generic PageWrapper
  return (
    <PageWrapper className="list">
      <h1>Todo-list</h1>
      <ListWrapper>
        {props.notes.map(note =>
          <ListItem
            key={note.id}
            note={note}
            markAsFinished={markAsFinished}
            removeNote={removeNote}
          />
        )}
      </ListWrapper>
    </PageWrapper>
  )
}

List.propTypes = {
  notes: PropTypes.arrayOf(
    PropTypes.shape({
      finished: PropTypes.bool.isRequired,
      title: PropTypes.string,
      deadline: PropTypes.instanceOf(Date),
      priority: PropTypes.oneOf(priorityMapping),
      id: PropTypes.string.isRequired,
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
