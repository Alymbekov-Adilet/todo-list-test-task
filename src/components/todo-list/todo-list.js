import React from "react";
import TodoListItem from "../todo-list-item";

import "./todo-list.scss";

const TodoList = ({
  data,
  onToggleDone,
  onToggleImportant,
  onDelete,
}) => {
  const elem = data.map((item) => {
    const { id, ...itemProps } = item;
    return (
      <li key={id} className="list-group">
        <TodoListItem
          {...itemProps}
          onToggleDone={() => onToggleDone(id)}
          onToggleImportant={() => onToggleImportant(id)}
          onDelete={() => onDelete(id)}
        />
      </li>
    );
  });

  return (
    <ul className="list-group ">
      {elem}
      
    </ul>
  );
};

export default TodoList;
