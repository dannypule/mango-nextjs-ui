import { Component } from 'react'
import {
  Navbar,
  NavbarGroup,
  NavbarHeading,
  NavbarDivider,
  Button,
  Alignment,
  Tab,
  Tabs
} from '@blueprintjs/core'

export default class Mango extends Component {
  state = {
    activeTabId: 'ng'
  }

  handleClick = e => {
    console.log('clicked', e.target.textContent)
  }

  handleTabChange = activeTabId => {
    console.log(activeTabId)
    this.setState({ activeTabId })
  }

  render() {
    return (
      <div>
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

        <Tabs
          id="TabsExample"
          onChange={this.handleTabChange}
          selectedTabId={this.state.activeTabId}
        >
          <Tab id="ng" title="foo" panel={<div>foo</div>} />
          <Tab id="mb" title="bar" panel={<div>bar</div>} />
          <Tab id="rx" title="hey" panel={<div>hey</div>} />
          <Tab id="bb" disabled title="ho" panel={<div>ho</div>} />
          <Tabs.Expander />
          <input className="pt-input" type="text" placeholder="Search..." />
        </Tabs>
      </div>
    )
  }
}
