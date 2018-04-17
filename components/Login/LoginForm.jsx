import React from 'react'
import { withFormik } from 'formik'
import isEmail from 'isemail'
import { Input, Card, Button } from 'semantic-ui-react'

// Our inner form component which receives our form's state and updater methods as props
const LoginForm = ({
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
  handleSubmit,
  isSubmitting,
}) => (
  <div className="LoginForm">
    <Card>
      <Card.Content>
        <Card.Header>Login</Card.Header>
        <Card.Description>
          <form onSubmit={handleSubmit}>
            <div className="field">
              <Input
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                label={
                  <div className="ui label label">
                    <i className="material-icons">email</i>
                  </div>
                }
                placeholder="Email"
              />
              {touched.email && errors.email && <div>{errors.email}</div>}
            </div>
            <div className="field">
              <Input
                type="password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                label={
                  <div className="ui label label">
                    <i className="material-icons">vpn_key</i>
                  </div>
                }
                placeholder="Password"
              />
              {touched.password &&
                errors.password && <div>{errors.password}</div>}
            </div>
            <Button type="submit" primary disabled={isSubmitting}>
              Login
            </Button>
          </form>
        </Card.Description>
      </Card.Content>
    </Card>
  </div>
)

export default withFormik({
  // eslint-disable-next-line no-unused-vars
  mapPropsToValues: props => ({ email: '', password: '' }),
  // Add a custom validation function (this can be async too!)
  // eslint-disable-next-line no-unused-vars
  // validate: (values, props) => {
  //   const errors = {}
  //   console.log(values)
  //   if (!values.email) {
  //     errors.email = 'Required'
  //   } else if (!isEmail.validate(values.email)) {
  //     errors.email = 'Invalid email address'
  //   }
  //   return errors
  // },
  handleSubmit: (
    values,
    {
      // eslint-disable-next-line no-unused-vars
      props,
      // eslint-disable-next-line no-unused-vars
      setSubmitting,
      // eslint-disable-next-line no-unused-vars
      setErrors /* setValues, setStatus, and other goodies */,
    },
  ) => {
    console.log(values)
    setSubmitting(false)
  },
})(LoginForm)
