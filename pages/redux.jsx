import withRedux from 'next-redux-wrapper'
import Proptypes from 'prop-types'
import store, { add, minus } from '../store/store'

const Page = ({ number, numberTwo, custom, add, minus }) => (
  <div>
    <h1>{number}</h1>
    <p>Custom: {custom}</p>
    <div>
      <button onClick={add}>add</button>
    </div>

    <h1>{numberTwo}</h1>
    <div>
      <button onClick={minus}>minus</button>
    </div>
  </div>
)
Page.getInitialProps = ({ store, isServer, pathname, query }) => {
  // component will read from store's state when rendered
  store.dispatch({ type: 'ADD', payload: 12 })

  console.log(isServer)
  console.log(pathname)
  console.log(query)

  // pass some custom props to component from here
  return { custom: 'yayy!1!' }
}

Page.propTypes = {
  number: Proptypes.number.isRequired,
  numberTwo: Proptypes.number.isRequired,
  custom: Proptypes.func.isRequired,
  add: Proptypes.func.isRequired,
  minus: Proptypes.func.isRequired
}

export default withRedux(
  store,
  state => ({ number: state.food.number, numberTwo: state.barr.numberTwo }),
  {
    add,
    minus
  }
)(Page)
