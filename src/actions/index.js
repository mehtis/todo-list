export const ADD_NOTE = 'ADD_NOTE'
export const REMOVE_NOTE = 'REMOVE_NOTE'
export const UPDATE_NOTE_AS_FINISHED = 'UPDATE_NOTE_AS_FINISHED'

export const addNote = (payload) => {
  return { type: ADD_NOTE, payload }
}

export const removeNote = (payload) => {
  return { type: REMOVE_NOTE, payload }
}

export const updateNote = payload => {
  return { type: UPDATE_NOTE_AS_FINISHED, payload }
}