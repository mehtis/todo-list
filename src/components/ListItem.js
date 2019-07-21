import React from 'react'
import PropTypes from 'prop-types'

import '../css/ListItem.css'

import { priorityMapping } from '../utils/utils'

const ListItem = props => {
  return (
    <div className="div-list-item">
      <input
        type="button"
        className={props.note.finished ? 'input-finished round': 'input-unfinished round'}
        onClick={() => props.markAsFinished(props.note)}
      />
      <h3
        className={props.note.finished ? 'text-finished': ''}
      >{props.note.title}</h3>
      <p
        className={props.note.finished ? 'text-finished': ''}>
        {props.note.deadline.toString()}
      </p>
      <input
        type="button"
        className="input-del"
        onClick={() => props.removeNote(props.note)}
      />
    </div>
  )
} 

ListItem.propTypes = {
  note: PropTypes.shape({
    finished: PropTypes.bool.isRequired,
    title: PropTypes.string,
    deadline: PropTypes.instanceOf(Date),
    priority: PropTypes.oneOf(priorityMapping),
    index: PropTypes.number.isRequired,
  }).isRequired,
  markAsFinished: PropTypes.func.isRequired,
  removeNote: PropTypes.func.isRequired,
}

export default ListItem