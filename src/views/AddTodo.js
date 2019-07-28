import React from 'react'

import Hamburger from '../components/Hamburger'

import '../css/AddTodo.css'

const AddTodo = props => {
  const onSubmit = e => {
    e.preventDefault()
  }

  return (
    <form onSubmit={onSubmit}>
      <Hamburger right noOverlay />
      <h1>Add todo</h1>
      <div className="div-add-items">
        <div className="div-input-line">
          <h2>Title</h2>
          <input
            type="text"
            name="title"
            placeholder="Write title"
          />
        </div>
        <div className="div-input-line">
          <h2>Deadline</h2>
          <input
            type="text"
            name="Deadline"
            placeholder="19.7.2019"
          />
        </div>
        <button type="submit">Add</button>
      </div>

    </form>
  )
}

export default AddTodo
