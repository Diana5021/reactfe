import { fromJS } from 'immutable' 

import { AUTHOR } from '../actionTypes'

const defaultState =fromJS({
  userinfo: {}
})

export default (state=defaultState, action) => {
  switch(action.type) {
    case AUTHOR:
      // return {
      //   userinfo: action.userinfo
      // }
      return state.setIn(['userinfo'],fromJS(action.userinfo))
    default:
      return state
  }
}