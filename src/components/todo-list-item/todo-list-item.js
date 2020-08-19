import React, { Component } from "react";
import "./todo-list-item.scss";

class TodoListItem extends Component {
  state = {
    error: false,
  };

  onError = () => {
    this.setState({ error: true });
  };

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

    if (this.state.error) {
      return <span>Something goes wrong!</span>;
    }

    return (
      <span className="todo-list ">
        <span className={classNames} onClick={onToggleImportant}>
          {label}
        </span>

        <button
          type="button"
          className="btn btn-warning btn-sm float-right"
          onClick={this.onError}
        >
          <i className="fa fa-warning"></i>
        </button>

        <button
          type="button"
          className="btn btn-outline-danger btn-sm float-right mr-1"
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
