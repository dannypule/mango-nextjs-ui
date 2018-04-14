import React, { Component } from 'react'
import { connect } from 'react-redux'
import Proptypes from 'prop-types'
import { increaseNumber, decreaseNumber } from '../store/actions/numberActions'

export class Numbers extends Component {
  static propTypes = {
    increaseNumber: Proptypes.func,
    decreaseNumber: Proptypes.func,
    number: Proptypes.number,
  }

  render() {
    const { number, increaseNumber, decreaseNumber } = this.props
    return (
      <div>
        <h3>{number}</h3>
        <div>
          <span>
            <button onClick={() => increaseNumber(2)}>Increase</button>
          </span>
          <span>
            <button onClick={() => decreaseNumber(2)}>Decrease</button>
          </span>
        </div>
      </div>
    )
  }
}

export default connect(
  state => ({
    number: state.num.number,
  }),
  {
    increaseNumber,
    decreaseNumber,
  },
)(Numbers)
