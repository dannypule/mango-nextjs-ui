import React, { Component } from 'react'
import Link from 'next/link'
import { withRouter } from 'next/router'
import Proptypes from 'prop-types'
import Numbers from '../Numbers/Numbers'

class About extends Component {
  static propTypes = {
    router: Proptypes.object,
  }

  render() {
    const { router: { query: { name } } } = this.props
    return (
      <div className="About">
        <header>{name && <h3>Welcome {name}</h3>}</header>
        <Link prefetch href="/">
          <button>Navigate to Chart Page</button>
        </Link>
        <br />
        <Numbers />
      </div>
    )
  }
}

export default withRouter(About)
