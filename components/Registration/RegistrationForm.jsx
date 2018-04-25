import React from 'react'
import { Formik } from 'formik'
import { Input, Card, Button } from 'semantic-ui-react'
import { connect } from 'react-redux'
import Proptypes from 'prop-types'
import yup from 'yup'
import { toast } from 'react-toastify'
// import Router from 'next/router'
import { register } from '../../store/actions/authActions'
import SpinnerForButton from '../common/SpinnerForButton'

class RegistrationForm extends React.Component {
  static propTypes = {
    register: Proptypes.func,
  }

  initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
  }

  onSubmit = (values, actions) => {
    // actions.validateForm()
    const { firstName, lastName, email, phone, password } = values
    const { register } = this.props
    register({ firstName, lastName, email, phone, password, actions, toast })
  }

  validationSchema = yup.object().shape({
    firstName: yup.string().required('A first name is required.'),
    lastName: yup.string().required('A last name is required.'),
    phone: yup.string().required('A phone number is required.'), // todo validate phone number - frontend and backend
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
          className={errors.firstName && touched.firstName && 'error'}
          type="text"
          name="firstName"
          label="First Name"
          placeholder="First Name"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.firstName}
        />
        {errors.firstName &&
          touched.firstName && (
            <div className="field-errors">{errors.firstName}</div>
          )}
      </div>
      <div className="field">
        <Input
          className={errors.lastName && touched.lastName && 'error'}
          type="text"
          name="lastName"
          label="Last Name"
          placeholder="Last Name"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.lastName}
        />
        {errors.lastName &&
          touched.lastName && (
            <div className="field-errors">{errors.lastName}</div>
          )}
      </div>
      <div className="field">
        <Input
          className={errors.phone && touched.phone && 'error'}
          type="text"
          name="phone"
          label="Phone"
          placeholder="Phone"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.phone}
        />
        {errors.phone &&
          touched.phone && <div className="field-errors">{errors.phone}</div>}
      </div>
      <div className="field">
        <Input
          className={errors.email && touched.email && 'error'}
          type="email"
          name="email"
          label="Email"
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
          label="Password"
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
        {isSubmitting ? <SpinnerForButton /> : 'Register'}
      </Button>
    </form>
  )

  render() {
    return (
      <div className="RegistrationForm">
        <Card>
          <Card.Content>
            <Card.Header>Register</Card.Header>
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
    register,
  },
)(RegistrationForm)
