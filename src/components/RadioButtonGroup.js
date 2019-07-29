import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Header = styled.h2`
  font-family: Raleway;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  color: #050505;
`

const RadioButton = styled.input`
  background: #686868;
  border-radius: 10px;
  margin-right: 15px;
  margin-top: 10px;
  width: 13px;
  height: 13px;
`

const Label = styled.label`
  font-family: Raleway;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  color: ${({value}) => {
    if (value === 'LOW') {
      return '#DBCC10'
    } else if (value === 'MEDIUM') {
      return '#F5A623'
    }
    return '#D0021B'}};
`

const RadioButtonGroup = props => {
  return (
    <div className="div-radiobuttons">
      <Header>{props.title}</Header>
      {props.values.map(radio =>
        <div key={radio.value} className="div-radiobutton">
          <Label value={radio.value}>
            <RadioButton
              type="radio"
              className="radio"
              name={props.name}
              value={radio.value}
              checked={radio.checked}
              onChange={props.onChange}
            />
            {radio.label}
          </Label>
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
