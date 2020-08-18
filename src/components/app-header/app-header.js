import React from "react";
import { Link } from "react-router-dom";

import "./app-header.scss";

const AppHeader = ({ todo, done }) => {
  return (
    <div className="app-header">
      <Link to="/">
        <h1>ToDo list</h1>
      </Link>

      <h2>
        {" "}
        {todo} more to do, {done} done
      </h2>
    </div>
  );
};

export default AppHeader;
