import withRedux from 'next-redux-wrapper'
import Semantic from '../../components/Semantic'
import store from '../../store/store'
import '../../styles/styles.scss'

export default withRedux(store)(() => <Semantic />)
