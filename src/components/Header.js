import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import '../css/Header.css'

const Header = props => {
  return (
    <Fragment>
      <h1>
        {props.title}
      </h1>
    </Fragment>
  )
} 

Header.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Header