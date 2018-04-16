import withRedux from 'next-redux-wrapper'
import Layout from '../../components/Layout/Layout'
import Login from '../../components/Login/Login'
import store from '../../store/store'
import '../../styles/styles.scss'

export default withRedux(store)(() => (
  <Layout>
    <Login />
  </Layout>
))
