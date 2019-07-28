import React from 'react'

import Hamburger from '../components/Hamburger'

import '../css/AddTodo.css'

const AddTodo = () => {
  return (
    <div className="addTodo">
      <Hamburger right noOverlay />
      <h1>Add todo</h1>
    </div>
  )
}

export default AddTodo
