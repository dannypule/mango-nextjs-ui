import React, { Component } from 'react'
import { connect } from 'react-redux'
import Proptypes from 'prop-types'
import Link from 'next/link'
import {
  ScatterChart,
  Scatter,
  CartesianGrid,
  Tooltip,
  Legend,
  XAxis,
  YAxis,
} from 'recharts'

import Numbers from '../Numbers/Numbers'
import { getScatterData } from '../../store/actions/chartActions'

class Chart extends Component {
  static propTypes = {
    getScatterData: Proptypes.func,
    scatterData: Proptypes.array,
  }

  componentWillMount() {
    const { getScatterData } = this.props
    getScatterData()
  }

  render() {
    const { scatterData } = this.props
    return (
      <div className="Chart">
        <header>
          <h1>Chart</h1>
        </header>
        <ScatterChart
          width={700}
          height={400}
          margin={{ top: 20, right: 20, bottom: 10, left: 10 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="x" />
          <YAxis dataKey="y" />
          <Tooltip cursor={{ strokeDasharray: '3 3' }} />
          <Legend />
          <Scatter name="Item" data={scatterData} fill="#8884d8" />
        </ScatterChart>
        <br />
        <Link
          prefetch
          href={{ pathname: '/about', query: { name: 'Internet User' } }}
        >
          <button>Navigate to About Page</button>
        </Link>
        <br />
        <Numbers />
      </div>
    )
  }
}

export default connect(
  state => ({
    scatterData: state.chart.scatterData,
  }),
  {
    getScatterData,
  },
)(Chart)
