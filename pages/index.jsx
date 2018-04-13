import Chart from '../components/Chart'
import withRedux from 'next-redux-wrapper'
import store from '../store/store'
import '../styles/styles.scss'

export default withRedux(store)(() => <Chart />)
