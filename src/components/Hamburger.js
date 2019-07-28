import React from 'react'
import { slide as HamburgerMenu } from 'react-burger-menu'

import '../css/Hamburger.css'

const Hamburger = props => {
  return (
    <HamburgerMenu right noOverlay >
      <a id="list" className="hamburger-item" href="/">Todo-list</a>
      <a id="add" className="hamburger-item" href="/add">Add todo</a>
    </HamburgerMenu>
  )
}

export default Hamburger