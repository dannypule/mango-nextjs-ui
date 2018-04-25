import React from 'react'
import { Formik } from 'formik'
import { Input, Card, Button } from 'semantic-ui-react'
import { connect } from 'react-redux'
import Proptypes from 'prop-types'
import yup from 'yup'
import { toast } from 'react-toastify'
// import Router from 'next/router'
import { login } from '../../store/actions/authActions'
import SpinnerForButton from '../common/SpinnerForButton'

class LoginForm extends React.Component {
  static propTypes = {
    login: Proptypes.func,
  }

  initialValues = {
    email: 'Super.Admin@fake-email.infoz',
    password: 'supersecure',
  }

  onSubmit = (values, actions) => {
    // actions.validateForm()
    const { email, password } = values
    const { login } = this.props
    login({ email, password, actions, toast })
  }

  validationSchema = yup.object().shape({
    email: yup
      .string()
      .email('A valid email is required.')
      .required('An email is required.'),
    password: yup.string().required('A password is required.'),
  })

  renderForm = ({
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
  }) => (
    <form
      onSubmit={e => {
        e.preventDefault()
        handleSubmit(e)
      }}
    >
      <div className="field">
        <Input
          className={errors.email && touched.email && 'error'}
          type="email"
          name="email"
          label={
            <div className="ui label label">
              <i className="material-icons">email</i>
            </div>
          }
          placeholder="Email"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.email}
        />
        {errors.email &&
          touched.email && <div className="field-errors">{errors.email}</div>}
      </div>
      <div className="field">
        <Input
          className={errors.password && touched.password && 'error'}
          type="password"
          name="password"
          label={
            <div className="ui label label">
              <i className="material-icons">vpn_key</i>
            </div>
          }
          placeholder="Password"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.password}
        />
        {errors.password &&
          touched.password && (
            <div className="field-errors">{errors.password}</div>
          )}
      </div>
      <Button type="submit" primary disabled={isSubmitting}>
        {isSubmitting ? <SpinnerForButton /> : 'Login'}
      </Button>
    </form>
  )

  render() {
    return (
      <div className="LoginForm">
        <Card>
          <Card.Content>
            <Card.Header>Login</Card.Header>
            <Card.Description>
              <Formik
                initialValues={this.initialValues}
                onSubmit={this.onSubmit}
                validationSchema={this.validationSchema}
                render={this.renderForm}
              />
            </Card.Description>
          </Card.Content>
        </Card>
      </div>
    )
  }
}

export default connect(
  state => ({
    scatterData: state.chart.scatterData,
  }),
  {
    login,
  },
)(LoginForm)
