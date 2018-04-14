import Layout from '../components/Layout/Layout'
import Chart from '../components/Chart/Chart'
import withRedux from 'next-redux-wrapper'
import store from '../store/store'
import '../styles/styles.scss'

export default withRedux(store)(() => (
  <Layout>
    <Chart />
  </Layout>
))
