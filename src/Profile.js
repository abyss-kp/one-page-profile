import React, { Component } from 'react'
import Client from './contentful'
import ImageCard from './ImageCard'
import Summary from './Summary'
import Education from './Education'
import Projects from './Projects'
import Achievements from './Achievements'

export default class Profile extends Component {
  state = {
    data: []
  }
  componentDidMount() {
    Client.getEntries({
      content_type: 'kapilPandeyProfile'
    })
      .then((response) => {
        this.setState({ data: response.items })
      })
      .catch(console.error)
  }
  render() {
    return (
      <div  style={{margin:"10px 0px"}}>
        {this.state.data.length ? <><ImageCard data={this.state.data} />
          <Summary data={this.state.data} />
          <Education data={this.state.data} />
          <Projects data={this.state.data} />
          <Achievements data={this.state.data} />
          </> : null}
      </div>
    )
  }
}
