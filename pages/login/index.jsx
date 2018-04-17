import Layout from '../../components/Layout/Layout'
import LoginForm from '../../components/Login/LoginForm'
import withRedux from 'next-redux-wrapper'
import store from '../../store/store'
import '../../styles/styles.scss'

export default withRedux(store)(() => (
  <Layout>
    <LoginForm />
  </Layout>
))
