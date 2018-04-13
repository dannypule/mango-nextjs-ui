import chartReducer from '../chartReducer'
import moxios from 'moxios'

describe('chartReducer', () => {
  beforeEach(() => {
    moxios.install()
  })

  afterEach(() => {
    moxios.uninstall()
  })

  it('should return the initial state', () => {
    expect(chartReducer(undefined, {})).toEqual({ scatterData: [] })
  })

  it('should handle UPDATE_SCATTER_DATA', () => {
    const action = {
      type: 'UPDATE_SCATTER_DATA',
      scatterData: [{ x: 1, y: 2 }],
    }
    expect(chartReducer({}, action)).toEqual({ scatterData: [{ x: 1, y: 2 }] })
  })
})
