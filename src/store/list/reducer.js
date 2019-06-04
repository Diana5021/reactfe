import { fromJS } from 'immutable' 

import {
  SET_CART,
  SET_FAVORITElIST,
  SET_ORDER 
} from './actionTypes'

const defaultState =fromJS({
  cartlist: [],
  favoritelist: [],
  orderlist: []
})

export default (state=defaultState, action) => {
  switch(action.type) {
    case SET_CART:
      return state.setIn(['cartlist'],fromJS(action.cart))
    case SET_FAVORITElIST:
      return state.setIn(['favoritelist'],fromJS(action.favorite))
    case SET_ORDER:
      return state.setIn(['orderlist'],fromJS(action.order))

    default:
      return state
  }
}