import fetch from 'utils/fetch'
import { AUTHOR } from '../actionTypes'

export const getUserSync = userinfo => ({
  type: AUTHOR,
  userinfo
})

export const getUserASync = () => {
  return async dispatch => {
    let url = '/ws/api/v1/users/author'
    let postData = { token: localStorage.token }
    let result = await fetch.post({url,postData})
    dispatch(getUserSync(result))
  }
}