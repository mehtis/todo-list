import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Wrapper = styled.div`
  background: green;
  width: 80%;
  padding: 5px;
  margin-top: 15px;
`

const Notification = props => {

  return (
    <Wrapper>
      <p>{props.message}</p>
    </Wrapper>
  )
}

Notification.propTypes= {
  message: PropTypes.string.isRequired
}

export default Notification