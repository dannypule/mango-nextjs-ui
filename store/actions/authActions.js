import Router from 'next/router'
import { post } from '../../services/apiService'

export const login = ({ email, password, actions, toast }) => dispatch => {
  return post('/auth/login', {
    email,
    password,
  })
    .then(res => {
      actions.setSubmitting(false)
      dispatch({ type: 'LOGIN_SUCCESS' })
      Router.push('/')
      console.log(res)
    })
    .catch(err => {
      toast.error('Failed to login. Please try again.')
      actions.setSubmitting(false)
      console.log(err)
    })
}

export const register = ({
  firstName,
  lastName,
  email,
  phone,
  password,
  actions,
  toast,
}) => dispatch => {
  return post('/auth/register', {
    firstName,
    lastName,
    phone,
    email,
    password,
  })
    .then(res => {
      actions.setSubmitting(false)
      dispatch({ type: 'REGISTER_SUCCESS' })
      Router.push('/')
      console.log(res)
    })
    .catch(err => {
      toast.error('Failed to login. Please try again.')
      actions.setSubmitting(false)
      console.log(err)
    })
}

export const logout = () => dispatch => {
  dispatch({ type: 'LOGOUT' })
  Router.push('/login')
}
