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
      <div className="SideMenu">
        <div className="expand-arrow">
          <i className="material-icons expand-arrow">chevron_right</i>
        </div>
      </div>
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
