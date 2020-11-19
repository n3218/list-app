import React, { Component } from "react"
import StatusList from "./statusList"

class StatusAll extends Component {
  constructor() {
    super()
    this.state = {
      statuses: ["Leart React", "Build ToDo list", "Build FaceBook"],
      newStatus: ""
    }
    this.onChangeHandler = this.onChangeHandler.bind(this)
    this.onSubmitHandler = this.onSubmitHandler.bind(this)
    this.delete = this.delete.bind(this)
  }

  onChangeHandler(e) {
    this.setState({ newStatus: e.target.value })
  }

  onSubmitHandler(e) {
    e.preventDefault()
    const newStatuses = [this.state.newStatus, ...this.state.statuses]
    this.setState({ statuses: newStatuses, newStatus: "" })
  }
  delete(index) {
    let filteredStatuses = this.state.statuses
    filteredStatuses.splice(index, 1)
    this.setState({ statuses: filteredStatuses })
  }
  render() {
    return (
      <>
        <form onSubmit={this.onSubmitHandler}>
          <input type="text" placeholder="type your status here" onChange={this.onChangeHandler} value={this.state.newStatus} />
          <button type="submit">Post</button>
        </form>
        <StatusList statuses={this.state.statuses} delete={this.delete} />
      </>
    )
  }
}

export default StatusAll
