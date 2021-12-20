import React, { Component } from "react";

class TodoAddForm extends Component {
  inputRef = React.createRef();
  onSubmit = e => {
    e.preventDefault();
    const todo = this.inputRef.current.value;
    todo && this.props.onAdd(todo);
    this.inputRef.current.value = "";
  };
  render() {
    return (
      <>
        <form className="add-form" onSubmit={this.onSubmit}>
          <input
            type="text"
            className="add-input"
            ref={this.inputRef}
            placeholder="please input your todo..."
          />
          {/* <button className="add-button">추가</button> */}
        </form>
      </>
    );
  }
}

export default TodoAddForm;
