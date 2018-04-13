import withRedux from 'next-redux-wrapper'
import About from '../../components/About'
import store from '../../store/store'
import '../../styles/styles.scss'

export default withRedux(store)(() => <About />)
