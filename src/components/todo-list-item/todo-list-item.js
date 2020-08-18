import React, { Component } from "react";

import "./todo-list-item.scss";

class TodoListItem extends Component {
  render() {
    const {
      label,
      onToggleDone,
      onToggleImportant,
      done,
      important,
      onDelete,
    } = this.props;

    let classNames = "todo-list-item-label";
    if (done) {
      classNames += " done";
    }

    if (important) {
      classNames += " important";
    }

    return (
      <span className="todo-list ">
        <span className={classNames} onClick={onToggleImportant}>
          {label}
        </span>

        <button
          type="button"
          className="btn btn-outline-danger btn-sm float-right"
          onClick={onDelete}
        >
          <i className="fa fa-trash-o" />
        </button>
        <button
          type="button"
          className="btn btn-outline-info btn-sm float-right mr-1"
          onClick={onToggleDone}
        >
          <i className="fa fa-check-square" />
        </button>
      </span>
    );
  }
}

export default TodoListItem;
