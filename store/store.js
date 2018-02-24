import React, { Component } from 'react'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'

// create a simple reducer
const reducer1 = (state = { foo: '', number: 42 }, action) => {
  switch (action.type) {
    case 'FOO':
      return { ...state, foo: action.payload }
    case 'ADD':
      return { ...state, number: state.number + 1 }
    default:
      return state
  }
}

const reducer2 = (state = { numberTwo: 99 }, action) => {
  switch (action.type) {
    case 'MINUS':
      return { ...state, numberTwo: state.numberTwo - 1 }
    default:
      return state
  }
}

const rootReducer = combineReducers({ food: reducer1, barr: reducer2 })

// create a store creator
const store = initialState => {
  return createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  )
}

export const add = () => dispatch => {
  return dispatch({ type: 'ADD' })
}

export const minus = () => dispatch => {
  return dispatch({ type: 'MINUS' })
}

export default store
