import uuid from 'uuid/v4'
import {
  ADD_NOTE,
  REMOVE_NOTE,
  UPDATE_NOTE,
  ADD_ERROR,
  CLEAR_ERRORS
} from '../actions'

const initialState = {
  notes: [
    {
      finished: true,
      title: 'Brush teeth',
      deadline: new Date(2019, 6, 12),
      priority: 'MEDIUM',
      id: uuid()
    },
    {
      finished: false,
      title: 'Take a shower',
      deadline: new Date(2019, 6, 14),
      priority: 'HIGH',
      id: uuid()
    },
    {
      finished: false,
      title: 'Wake up',
      deadline: new Date(2019, 6, 15),
      priority: 'LOW',
      id: uuid()
    }
  ],
  errors: [
    {
      message: 'Error!',
      source: 'TEST_ERROR'
    }
  ]
}

const rootReducer = (state = initialState, action) => {
  switch(action.type) {
  case ADD_NOTE:
    return Object.assign({}, state, {
      notes: state.notes.concat({...action.payload, id: uuid(), finished: false})
    })
  case REMOVE_NOTE:
    return Object.assign({}, state, {
      notes: state.notes.filter(note => note.id !== action.payload.id)
    })
  case UPDATE_NOTE:
    return Object.assign({}, state, {
      notes: state.notes.map(note =>
        note.id === action.payload.id ? action.payload : note
      )
    })
  case ADD_ERROR:
    return Object.assign({}, state, {
      errors: [...state.errors, {...action.payload}]
    })
  case CLEAR_ERRORS:
    return Object.assign({}, state, {
      errors: state.errors.filter(error => error.source !== action.payload.source)
    })
  default:
    return state
  }
}

export default rootReducer