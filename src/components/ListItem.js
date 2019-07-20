import React from 'react'
import PropTypes from 'prop-types'

import '../css/Header.css'

import { priorityMapping } from '../utils/utils'

const ListItem = props => {
  return (
    <div>
      <h3>{props.note.title}</h3>
      <p>{props.note.deadline.toString()}</p>
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
  })
}

export default ListItem