import React, { Component } from 'react'
// import Link from 'next/link'
import { Accordion, Icon } from 'semantic-ui-react'

// import { connect } from 'react-redux'
// import Proptypes from 'prop-types'
// import {
//   increaseNumber,
//   decreaseNumber,
// } from '../../store/actions/numberActions'

class SideMenu extends Component {
  // static propTypes = {
  //   increaseNumber: Proptypes.func,
  //   decreaseNumber: Proptypes.func,
  //   number: Proptypes.number,
  // }
  state = { activeIndex: -1 }

  handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index

    this.setState({ activeIndex: newIndex })
  }

  Menu = () => {
    const { activeIndex } = this.state
    const menu = [
      {
        title: 'Overview',
        content: [
          {
            title: 'foo',
            url: 'foo',
          },
        ],
      },
      {
        title: 'Members',
        content: [
          {
            title: 'foo',
            url: 'foo',
          },
        ],
      },
      {
        title: 'Billing',
        content: [
          {
            title: 'foo',
            url: 'foo',
          },
        ],
      },
      {
        title: 'Marketing',
        content: [
          {
            title: 'foo',
            url: 'foo',
          },
        ],
      },
      {
        title: 'Website',
        content: [
          {
            title: 'foo',
            url: 'foo',
          },
        ],
      },
      {
        title: 'Sales',
        content: [
          {
            title: 'foo',
            url: 'foo',
          },
        ],
      },
      {
        title: 'Gym',
        content: [
          {
            title: 'foo',
            url: 'foo',
          },
        ],
      },
    ]
    return (
      <div className="menu-items">
        <Accordion>
          {menu.map((item, i) => (
            <div className="accordion-item">
              <Accordion.Title
                active={activeIndex === i}
                index={i}
                onClick={this.handleClick}
              >
                <Icon name="dropdown" />
                {item.title}
              </Accordion.Title>
              <Accordion.Content active={activeIndex === i}>
                foo
              </Accordion.Content>
            </div>
          ))}
        </Accordion>
        {/* <List>
            <List.Item>
              Overview
              <i className="material-icons">arrow_drop_down</i>
            </List.Item>
            <List.Item>
              Members
              <i className="material-icons">arrow_drop_down</i>
            </List.Item>
            <List.Item>
              Billing
              <i className="material-icons">arrow_drop_down</i>
            </List.Item>
            <List.Item>
              Marketing
              <i className="material-icons">arrow_drop_down</i>
            </List.Item>
            <List.Item>
              Website
              <i className="material-icons">arrow_drop_down</i>
            </List.Item>
            <List.Item>
              Sales
              <i className="material-icons">arrow_drop_down</i>
            </List.Item>
            <List.Item>
              Gym
              <i className="material-icons">arrow_drop_down</i>
            </List.Item>
          </List> */}
      </div>
    )
  }

  render() {
    return (
      <div className="SideMenu">
        <this.Menu />
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
// )(SideMenu)

export default SideMenu
