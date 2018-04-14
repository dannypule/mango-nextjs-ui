import React, { Component } from 'react'
// import Link from 'next/link'

// import { connect } from 'react-redux'
// import Proptypes from 'prop-types'
// import {
//   increaseNumber,
//   decreaseNumber,
// } from '../../store/actions/numberActions'

class Nav extends Component {
  // static propTypes = {
  //   increaseNumber: Proptypes.func,
  //   decreaseNumber: Proptypes.func,
  //   number: Proptypes.number,
  // }

  render() {
    return (
      <header className="Nav">
        <div>
          {/* <Link href="/">
            <span>Home</span>
          </Link>{' '}
          |
          <Link href="/about">
            <span>About</span>
          </Link>{' '}
          |
          <Link href="/contact">
            <span>Contact</span>
          </Link> */}
          <span className="gym-name">Yatta Health Club</span>
        </div>
      </header>
    )
  }
}

// export default connect(
//   state => ({
//     number: state.num.number,
//   }),
//   {
//     increaseNumber,
//     decreaseNumber,
//   },
// )(Nav)

export default Nav
