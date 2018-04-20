import React from 'react'
import { Formik } from 'formik'
import { Input, Card, Button } from 'semantic-ui-react'
import yup from 'yup'
import { toast } from 'react-toastify'
import Router from 'next/router'

const LoginForm = () => {
  return (
    <div className="LoginForm">
      <Card>
        <Card.Content>
          <Card.Header>Login</Card.Header>
          <Card.Description>
            <Formik
              initialValues={{ email: 'foo@foo.foo', password: 'somepassword' }}
              onSubmit={(values, actions) => {
                setTimeout(() => {
                  toast.error('Failed to login. Please try again.') // login error message
                  actions.setSubmitting(false)
                  // Router.push('/ui')
                }, 300)
              }}
              validationSchema={yup.object().shape({
                email: yup
                  .string()
                  .email('A valid email is required.')
                  .required('An email is required.'),
                password: yup.string().required('A password is required.'),
              })}
              render={({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
              }) => (
                <form onSubmit={handleSubmit}>
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
                      touched.email && (
                        <div className="field-errors">{errors.email}</div>
                      )}
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
                    Login
                  </Button>
                </form>
              )}
            />
          </Card.Description>
        </Card.Content>
      </Card>
    </div>
  )
}

export default LoginForm
