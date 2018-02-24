// /* eslint-env jest */

import { shallow, mount } from 'enzyme'
import React from 'react'
import renderer from 'react-test-renderer'

import Index from '../index'
import Home from '../../components/Home/Home'

describe('With Enzyme', () => {
  it('Home component loads', () => {
    const wrapper = shallow(<Index />)

    expect(wrapper.find(Home).length).toEqual(1)
  })

  it('foo', () => {
    const wrapper = mount(<Index bar="baz" />)
    expect(wrapper.props().bar).toEqual('baz')
    wrapper.setProps({ bar: 'foo' })
    expect(wrapper.props().bar).toEqual('foo')
  })
})

describe('With Snapshot Testing', () => {
  it('App shows "Hello world!"', () => {
    const component = renderer.create(<Index />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
