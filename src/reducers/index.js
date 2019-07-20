import {
  ADD_NOTE,
  REMOVE_NOTE,
  UPDATE_NOTE_AS_FINISHED
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
    //TODO:
  case REMOVE_NOTE:
    return Object.assign({}, state, {
      notes: state.notes.concat(action.payload)
    })
  case UPDATE_NOTE_AS_FINISHED:
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