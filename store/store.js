import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'

import chartReducer from './reducers/chartReducer'
import numberReducer from './reducers/numberReducer'
import authReducer from './reducers/authReducer'

const rootReducer = combineReducers({
  chart: chartReducer,
  num: numberReducer,
  auth: authReducer,
})

const store = initialState => {
  return createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware)),
  )
}

export default store
