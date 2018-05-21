import Layout from '../../components/Layout/Layout'
import RegistrationForm from '../../components/Registration/RegistrationForm'
import withRedux from 'next-redux-wrapper'
import store from '../../store/store'
import '../../styles/styles.scss'

export default withRedux(store)(() => (
  <Layout>
    <RegistrationForm />
  </Layout>
))
