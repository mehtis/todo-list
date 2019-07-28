export const ADD_NOTE = 'ADD_NOTE'
export const REMOVE_NOTE = 'REMOVE_NOTE'
export const UPDATE_NOTE = 'UPDATE_NOTE'
export const ADD_ERROR = 'ERROR'
export const CLEAR_ERRORS = 'CLEAR_ERRORS'

export const addNote = payload => ({ type: ADD_NOTE, payload })

export const removeNote = payload => ({ type: REMOVE_NOTE, payload })

export const updateNote = payload => ({ type: UPDATE_NOTE, payload })

export const addError = payload => ({ type: ADD_ERROR, payload })

export const clearErrors = payload => ({ type: CLEAR_ERRORS, payload })
