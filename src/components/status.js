import React, { Component } from "react"

class Status extends Component {
  constructor(props) {
    super(props)
    this.state = {
      likes: 0
    }
    this.like = this.like.bind(this)
  }
  like() {
    this.setState({ likes: this.state.likes + 1 })
  }
  render() {
    return (
      <div>
        {this.props.text}
        <button onClick={this.like}>{this.state.likes} Like</button>
      </div>
    )
  }
}

export default Status
