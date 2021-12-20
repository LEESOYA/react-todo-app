import React, { Component } from "react";
import Todo from "./todo";
import TodoAddForm from "./todoAddForm";

class TodosList extends Component {
  handleDelete = todoItem => {
    this.props.onDelete(todoItem);
  };
  handleAdd = todo => {
    this.props.onAdd(todo);
  };
  handleToggle = todoItem => {
    this.props.onToggle(todoItem);
  };
  render() {
    return (
      <>
        <TodoAddForm onAdd={this.handleAdd} />
        <ul className="todo-ul">
          {this.props.todos.map(todoItem => (
            <Todo
              key={todoItem.id}
              todos={todoItem}
              onDelete={this.handleDelete}
              onToggle={this.handleToggle}
            />
          ))}
        </ul>
      </>
    );
  }
}

export default TodosList;
