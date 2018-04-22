import axios from 'axios'
import { API_ROOT } from '../../api-config'

export const login = ({ username, password, actions, toast }) => dispatch => {
  return axios
    .post(`${API_ROOT}/auth/login`, {
      username,
      password,
    })
    .then(res => {
      return res.data
    })
    .then(res => {
      actions.setSubmitting(false)
      dispatch({ type: 'LOGIN_SUCCESS', scatterData: res.data })
      console.log(res)
    })
    .catch(err => {
      toast.error('Failed to login. Please try again.')
      actions.setSubmitting(false)
      console.log(err)
    })
}
