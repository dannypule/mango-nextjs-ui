import { post } from '../../services/api.service'

export const login = ({ username, password, actions, toast }) => dispatch => {
  return post('/auth/login', {
    username,
    password,
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
