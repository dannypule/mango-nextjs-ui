// /* eslint-env jest */

import { shallow } from 'enzyme'
import React from 'react'
import Main from '../index'

const initialProps = {
  scatterData: [
    {
      x: 30,
      y: 20
    },
    {
      x: 50,
      y: 70
    }
  ],
  getScatterData: () => {}
}

describe('Main', () => {
  describe('@render', () => {
    it('renders in default state', () => {
      const wrapper = shallow(<Main {...initialProps} />)
      expect(wrapper).toMatchSnapshot()
    })
  })
})
