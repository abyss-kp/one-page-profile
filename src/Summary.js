import React, { Component } from 'react'

export default class Summary extends Component {
  render() {
    return (
      <div id="summary" style={{marginLeft:"20px"}}>
        {this.props.data[0] && <fieldset>
          <legend>Summary:</legend>
          <ul>
            {
              this.props.data[0].fields.summary.split(".").map(itm => <li>{itm}</li>)}
          </ul>
        </fieldset>}
      </div>
    )
  }
}
