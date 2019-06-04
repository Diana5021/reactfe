// import { combineReducers } from 'redux'
import { combineReducers } from 'redux-immutable'

import users from './login/reducer'
import list from './list/reducer'

export default combineReducers({
  users,
  list
})
