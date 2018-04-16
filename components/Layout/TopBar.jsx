import React, { Component } from 'react'
import { Dropdown, Image, Modal } from 'semantic-ui-react'
// import Link from 'next/link'

// import { connect } from 'react-redux'
// import Proptypes from 'prop-types'
// import {
//   increaseNumber,
//   decreaseNumber,
// } from '../../store/actions/numberActions'

class TopBar extends Component {
  // static propTypes = {
  //   increaseNumber: Proptypes.func,
  //   decreaseNumber: Proptypes.func,
  //   number: Proptypes.number,
  // }

  // modal = () => (
  //   <Modal trigger={}>
  //     <Modal.Header>Select a Photo</Modal.Header>
  //     <Modal.Content image>login</Modal.Content>
  //   </Modal>
  // )

  render() {
    return (
      <header className="TopBar">
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
          <span className="user-dropdown">
            <Image
              src="https://api.adorable.io/avatars/45/abott@adorable.pngCopy"
              avatar
            />
            <Dropdown inline text="Fenton Barley">
              <Dropdown.Menu>
                <Dropdown.Item>
                  <Modal trigger={<span>Login</span>}>
                    <Modal.Content>Login</Modal.Content>
                  </Modal>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Modal trigger={<span>Register</span>}>
                    <Modal.Content>Register</Modal.Content>
                  </Modal>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </span>
          <div className="burger-menu">
            <i className="material-icons">menu</i>
          </div>
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
// )(TopBar)

export default TopBar
