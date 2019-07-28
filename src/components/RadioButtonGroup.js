import React from 'react'
import PropTypes from 'prop-types'

import '../css/RadioButtonGroup.css'

const RadioButtonGroup = props => {
  return (
    <div className="div-radiobuttons">
      <h2>{props.title}</h2>
      {props.values.map(radio =>
        <div key={radio.value} className="div-radiobutton">
          <label className={`label-radio label-radio-${radio.label}`}>
            <input
              type="radio"
              className="radio"
              name={props.name}
              value={radio.value}
              checked={radio.checked}
              onChange={props.onChange}
            />
            {radio.label}
          </label>
        </div>
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
      checked: PropTypes.bool,
      label: PropTypes.string.isRequired
    })
  ),
  onChange: PropTypes.func.isRequired
}

export default RadioButtonGroup
