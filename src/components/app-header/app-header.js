import React from "react";

import "./app-header.scss";

const AppHeader = ({ todo, done }) => {
  return (
    <div className="app-header">
      <h1>ToDo list</h1>
      <h2>
        {" "}
        {todo} more to do, {done} done
      </h2>
    </div>
  );
};

export default AppHeader;
