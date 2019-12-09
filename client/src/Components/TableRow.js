import React, { Component } from "react";

class TableRow extends Component {
  //displays the content retrieved from database in table form
  render() {
    return (
      <tr>
        <td>{this.props.obj.firstname}</td>
        <td>{this.props.obj.lastname}</td>
        <td>{this.props.obj.age}</td>
        <td>{this.props.obj.city}</td>
        <td>{this.props.obj.collegeName}</td>
      </tr>
    );
  }
}

export default TableRow;
