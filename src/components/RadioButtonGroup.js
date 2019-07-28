import React from 'react'
import PropTypes from 'prop-types'

const RadioButtonGroup = props => {
  return (
    <div className="div-radiobuttons">
      <h2>{props.title}</h2>
      {props.values.map(radio =>
        <input
          key={radio.value}
          type="radio"
          className={`radio radio-${radio.value}`}
          name={props.name}
          value={radio.value}
          checked={radio.checked}
          onChange={props.onChange}
        />
      )}
    </div>
  )
}
RadioButtonGroup.propTypes = {
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  values: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      checked: PropTypes.bool
    })
  ),
  onChange: PropTypes.func.isRequired
}

export default RadioButtonGroup
