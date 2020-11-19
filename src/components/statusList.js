import React, { Component } from "react"
import Status from "./status"

class StatusList extends Component {
  render() {
    return this.props.statuses.map((status, i) => <Status key={i} index={i} delete={this.props.delete} text={status} />)
  }
}
export default StatusList
