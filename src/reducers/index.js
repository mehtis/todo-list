import {
  ADD_NOTE,
  REMOVE_NOTE,
  UPDATE_NOTE_AS_FINISHED
} from '../actions/index'

const initialState = {
  notes: [],
  nextIndex: 0
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
    //TODO:
  case UPDATE_NOTE_AS_FINISHED:
    return Object.assign({}, state, {
      notes: state.notes.concat(action.payload)
    })
  default:
    return state
  }
}

export default rootReducer