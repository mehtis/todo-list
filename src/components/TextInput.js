import React from 'react'
import PropTypes from 'prop-types'

import '../css/TextInput.css'

const TextInput = props => {
  return (
    <div className="div-input-line">
      <h2>{props.title}</h2>
      <input
        type="text"
        className="input-text"
        name={props.name}
        placeholder={props.placeholder}
        onChange={props.onChange}
        value={props.value}
      />
    </div>
  )
}
TextInput.propTypes = {
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired
}

export default TextInput
