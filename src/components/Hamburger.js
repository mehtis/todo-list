import React from 'react'
import { slide as HamburgerMenu } from 'react-burger-menu'
import { Link } from 'react-router-dom'

import '../css/Hamburger.css'

//TODO: Doesn't close when clicked outside
const Hamburger = props => {
  return (
    <HamburgerMenu {...props} >
      <Link to="/">Todo-list</Link>
      <Link to="/add">Add todo</Link>
    </HamburgerMenu>
  )
}

export default Hamburger
