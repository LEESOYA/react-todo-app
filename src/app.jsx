import React, { Component } from "react";
import "./app.css";
import TodosList from "./components/todosList";

class App extends Component {
  state = {
    todos: [
      { id: 1, item: "방 청소하기", checked: false },
      { id: 2, item: "공부하기", checked: true },
      { id: 3, item: "도서관에서 책 빌리기", checked: false },
    ],
  };

  handleDelete = todoItem => {
    const todos = this.state.todos.filter(item => item.id !== todoItem.id);
    this.setState({ todos });
  };

  handleAdd = todo => {
    const todos = [
      ...this.state.todos,
      { id: Date.now(), item: todo, checked: false },
    ];
    this.setState({ todos });
  };

  handleToggle = todoItem => {};
  render() {
    return (
      <>
        <div className="todo-content">
          <header className="todo-logo">
            <h1>Todos...</h1>
          </header>
          <TodosList
            todos={this.state.todos}
            onDelete={this.handleDelete}
            onAdd={this.handleAdd}
            onToggle={this.handleToggle}
          />
        </div>
      </>
    );
  }
}

export default App;
