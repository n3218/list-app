import React, { Component } from "react"

class Status extends Component {
  constructor(props) {
    super(props)
    this.state = {
      likes: 0
    }
    this.like = this.like.bind(this)
    this.deleteHandler = this.deleteHandler.bind(this)
  }
  like() {
    this.setState({ likes: this.state.likes + 1 })
  }
  deleteHandler() {
    this.props.delete(this.props.index)
  }

  render() {
    return (
      <div className="status">
        {this.props.text}
        <div className="delete" onClick={this.deleteHandler}>
          x
        </div>
        <button onClick={this.like}>{this.state.likes} Like</button>
      </div>
    )
  }
}

export default Status
