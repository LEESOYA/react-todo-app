import React, { Component } from "react";

class Todo extends Component {
  handleDelete = () => {
    this.props.onDelete(this.props.todos);
  };
  handleAdd = () => {
    this.props.onAdd(this.props.todos);
  };
  handleToggle = () => {
    this.props.onToggle(this.props.todos);
  };
  render() {
    const { item, checked } = this.props.todos;
    return (
      <li className="todo">
        <input
          type="checkbox"
          name="todo-checked"
          className="todo-checked"
          onChange={this.handleToggle}
        />
        <span className="todo-item">{item}</span>
        <button className="todo-delete" onClick={this.handleDelete}>
          <i className="fas fa-trash"></i>
        </button>
      </li>
    );
  }
}

export default Todo;
