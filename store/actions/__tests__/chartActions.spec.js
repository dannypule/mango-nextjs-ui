import { getScatterData } from '../../actions/chartActions'
import moxios from 'moxios'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('chartActions', () => {
  beforeEach(() => {
    moxios.install()
  })

  afterEach(() => {
    moxios.uninstall()
  })

  it('creates UPDATE_SCATTER_DATA after successfuly fetching data', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent()
      request.respondWith({
        status: 200,
        response: [{ x: 1, y: 2 }],
      })
    })

    const expectedActions = [
      {
        type: 'UPDATE_SCATTER_DATA',
        scatterData: [{ x: 1, y: 2 }],
      },
    ]

    const store = mockStore({ posts: {} })

    return store.dispatch(getScatterData()).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })
})
