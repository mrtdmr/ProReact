import React, { Component } from "react";
class TodoCreator extends Component {
  constructor(props) {
    super(props);
    this.state = { newTextItem: "" };
  }
  updateNewTextValue = event =>
    this.setState({ newTextItem: event.target.value });
  createNewTodo = () => {
    this.props.callback(this.state.newTextItem);
    this.setState({ newTextItem: "" });
  };
  render = () => (
    <div className="my-1">
      <input
        className="form-control"
        value={this.state.newTextItem}
        onChange={this.updateNewTextValue}
      />
      <button className="btn btn-primary mt-1" onClick={this.createNewTodo}>
        Add
      </button>
    </div>
  );
}
export default TodoCreator;
