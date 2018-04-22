import React, { Component } from 'react'
import Head from 'next/head'
import { connect } from 'react-redux'
import Proptypes from 'prop-types'
import TopBar from './TopBar'
import SideMenu from './SideMenu'
import { ToastContainer } from 'react-toastify'

class Layout extends Component {
  static propTypes = {
    loggedIn: Proptypes.bool,
  }

  render() {
    // layout needs to be handled differently when next.js 6 comes out
    const {
      children,
      title = 'Yatta Health Studio Management',
      loggedIn,
    } = this.props
    return (
      <div className="Layout">
        <Head>
          <title>{title}</title>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <TopBar />
        <div className="layout-main">
          {loggedIn && <SideMenu />}
          <div className="layout-body">{children}</div>
        </div>
        <ToastContainer autoClose={3000} hideProgressBar className="toastify" />

        {/* <footer>I`m here to stay</footer> */}
      </div>
    )
  }
}

export default connect(
  state => ({
    loggedIn: state.auth.loggedIn,
  }),
  null,
)(Layout)
