import React, { Component } from "react";
class todoBanner extends Component {
  render = () => (
    <h4 className="bg-primary text-white text-center p-2">
      {this.props.name}'s To Do List (
      {this.props.tasks.filter(t => !t.done).length} item to do)
    </h4>
  );
}
export default todoBanner;
