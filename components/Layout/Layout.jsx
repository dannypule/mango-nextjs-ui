import React, { Component } from 'react'
import Head from 'next/head'
import TopBar from './TopBar'
import SideMenu from './SideMenu'
import { ToastContainer } from 'react-toastify'

class Layout extends Component {
  render() {
    // layout needs to be handled differently when next.js 6 comes out
    const { children, title = 'This is the default title' } = this.props
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
        <SideMenu />
        <ToastContainer autoClose={3000} hideProgressBar className="toastify" />

        <div className="layout-body">{children}</div>

        {/* <footer>I`m here to stay</footer> */}
      </div>
    )
  }
}
export default Layout
