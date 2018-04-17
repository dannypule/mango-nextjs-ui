import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Input, Card, Button } from 'semantic-ui-react'

const LoginForm = props => {
  const { handleSubmit } = props
  return (
    <div className="LoginForm">
      <Card>
        <Card.Content>
          <Card.Header>Login</Card.Header>
          <Card.Description>
            <form onSubmit={handleSubmit}>
              <div className="field">
                <Field
                  name="email"
                  component={Input}
                  type="email"
                  label={
                    <div className="ui label label">
                      <i className="material-icons">email</i>
                    </div>
                  }
                  placeholder="Email"
                  size="small"
                />
              </div>
              <div className="field">
                <Field
                  name="password"
                  component={Input}
                  type="password"
                  label={
                    <div className="ui label label">
                      <i className="material-icons">vpn_key</i>
                    </div>
                  }
                  placeholder="Password"
                  size="small"
                />
              </div>
              <Button type="submit" primary>
                Login
              </Button>
            </form>
          </Card.Description>
        </Card.Content>
      </Card>
    </div>
  )
}

export default reduxForm({
  // a unique name for the form
  form: 'login',
})(LoginForm)
