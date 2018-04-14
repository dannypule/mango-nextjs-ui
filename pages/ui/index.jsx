import Layout from '../../components/Layout/Layout'
import Semantic from '../../components/Semantic/Semantic'
import withRedux from 'next-redux-wrapper'
import store from '../../store/store'
import '../../styles/styles.scss'

export default withRedux(store)(() => (
  <Layout>
    <Semantic />
  </Layout>
))
