import {
  ADD_NOTE,
  REMOVE_NOTE,
  UPDATE_NOTE
} from '../actions/index'

const initialState = {
  notes: [
    {
      finished: true,
      title: 'Brush teeth',
      deadline: new Date(2019, 6, 12),
      priority: 'MEDIUM',
      index: 0
    },
    {
      finished: false,
      title: 'Take a shower',
      deadline: new Date(2019, 6, 14),
      priority: 'HIGH',
      index: 1
    },
    {
      finished: false,
      title: 'Wake up',
      deadline: new Date(2019, 6, 15),
      priority: 'LOW',
      index: 2
    }
  ],
  nextIndex: 3
}

const rootReducer = (state = initialState, action) => {
  switch(action.type) {
  case ADD_NOTE:
    return Object.assign({}, state, {
      notes: state.notes.concat(action.payload),
      //TODO: Separate action
      nextIndex: state.nextIndex++
    })
  case REMOVE_NOTE:
    return Object.assign({}, state, {
      notes: state.notes.filter(note => note.index !== action.payload.index)
    })
  case UPDATE_NOTE:
    return Object.assign({}, state, {
      notes: state.notes.map(note =>
        note.index === action.payload.index ? action.payload : note
      )
    })
  default:
    return state
  }
}

export default rootReducer