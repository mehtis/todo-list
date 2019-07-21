export const ADD_NOTE = 'ADD_NOTE'
export const REMOVE_NOTE = 'REMOVE_NOTE'
export const UPDATE_NOTE = 'UPDATE_NOTE'

export const addNote = payload => ({ type: ADD_NOTE, payload })

export const removeNote = payload => ({ type: REMOVE_NOTE, payload })

export const updateNote = payload => ({ type: UPDATE_NOTE, payload })
