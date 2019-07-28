import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import Hamburger from './Hamburger'

import '../css/Header.css'

const Header = props => {
  return (
    <Fragment>
      <div>
        <Hamburger />
      </div>
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