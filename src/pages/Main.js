import React, { Component } from 'react'
import Summary from '../components/Summary'
export default class Main extends Component {
  render() {
    return (
      <div style={{ margin: "64px 0px 0px 0px" }}>
        {
          this.props.data.length ? <>
            <Summary data={this.props.data} />
          </> : null
        }</div>
    )
  }
}
