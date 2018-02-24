import { Component } from 'react'
import {
  Navbar,
  NavbarGroup,
  NavbarHeading,
  NavbarDivider,
  Button,
  Alignment
} from '@blueprintjs/core'

export default class Mango extends Component {
  handleClick = e => {
    console.log('clicked', e.target.textContent)
  }

  render() {
    return (
      <Navbar>
        <NavbarGroup align={Alignment.RIGHT}>
          <NavbarHeading>Blueprint</NavbarHeading>
          <NavbarDivider />
          <Button className="pt-minimal" icon="home" text="Home" />
          <Button
            onClick={this.handleClick}
            className="pt-minimal"
            icon="document"
            text="Files"
          />
        </NavbarGroup>
      </Navbar>
    )
  }
}
