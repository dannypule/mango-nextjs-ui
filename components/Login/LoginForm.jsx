import React from 'react'
import { Formik } from 'formik'
import { Card } from 'semantic-ui-react'
import { connect } from 'react-redux'
import Proptypes from 'prop-types'
import yup from 'yup'
import { toast } from 'react-toastify'

import { login } from '../../store/actions/authActions'
import Input from '../FormFields/Input'
import Button from '../FormFields/Button'

class LoginForm extends React.Component {
  static propTypes = {
    login: Proptypes.func,
  }

  initialValues = {
    email: 'Super.Admin@fake-email.infoz',
    password: 'supersecure',
  }

  onSubmit = (values, actions) => {
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
      <Input
        name="email"
        type="email"
        placeholder="Email"
        label="Email"
        onChange={handleChange}
        onBlur={handleBlur}
        values={values}
        errors={errors}
        touched={touched}
      />

      <Input
        name="password"
        type="password"
        placeholder="Password"
        label="Password"
        onChange={handleChange}
        onBlur={handleBlur}
        values={values}
        errors={errors}
        touched={touched}
      />
      <Button text="Login" type="submit" primary isSubmitting={isSubmitting} />
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
