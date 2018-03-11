import React, { Component } from 'react'
import withRedux from 'next-redux-wrapper'
import Proptypes from 'prop-types'
import store, { add, minus } from '../store/store'

class Page extends Component {
  static propTypes = {
    number: Proptypes.number,
    numberTwo: Proptypes.number,
    custom: Proptypes.string
  }

  static getInitialProps = ({ store, isServer, pathname, query }) => {
    // component will read from store's state when rendered
    store.dispatch({ type: 'ADD', payload: 12 })

    console.log(isServer)
    console.log(pathname)
    console.log(query)

    // pass some custom props to component from here
    return { custom: 'yayy!1!' }
  }

  render() {
    const { number, custom, numberTwo, add, minus } = this.props
    return (
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
  }
}

export default withRedux(
  store,
  state => ({ number: state.food.number, numberTwo: state.barr.numberTwo }),
  {
    add,
    minus
  }
)(Page)
