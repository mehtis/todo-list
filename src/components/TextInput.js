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

const Input = styled.input`
  width: 90%;
  border: none;
  border-bottom: 1px solid #979797;
  opacity: 0.55;
`


const TextInput = props => {
  return (
    <div className="div-input-line">
      <Header>{props.title}</Header>
      <Input
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
