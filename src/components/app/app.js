import React, { Component } from "react";
import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import TodoList from "../todo-list";
import ItemAddForm from "../item-add-form";
import ItemStatusFilter from "../item-status-filter";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "./app.scss";
import img from "./list.jpg";

const View = () => {
  return (
    <div className="box-app">
      <Router>
        <div className="box-appheader d-flex">
          <Link to="/arrow">
            <h3 className="mr-5">
              <i className="fa fa-arrow-right"></i>
            </h3>
          </Link>
          <Route path="/" exact render={() => <h2>Welcome to my-app</h2>} />
        </div>

        <Route path="/arrow" component={App} />
        <Route path="/" exact>
          <img src={img} alt="todo-img"></img>
        </Route>
      </Router>
    </div>
  );
};

export default View;

class App extends Component {
  //genraitor id;
  maxId = 100;

  //state;
  state = {
    data: [
      this.createTodoItem("Drink coffee"),
      this.createTodoItem("Learn React"),
      this.createTodoItem("Make awesome React-app"),
    ],
    //state for item-status-filter;
    filter: "all",

    //state for search-panel;
    term: "",
  };

  //temlate function for state;
  createTodoItem(label) {
    return {
      label,
      important: false,
      done: false,
      id: this.maxId++,
    };
  }

  // template function to mark 'done' & 'important';
  toggleProperty(arr, id, propName) {
    const idx = arr.findIndex((el) => el.id === id);
    const oldItem = arr[idx];
    const newItem = { ...oldItem, [propName]: !oldItem[propName] };

    return [...arr.slice(0, idx), newItem, ...arr.slice(idx + 1)];
  }

  //function for delete item;
  onDelete = (id) => {
    this.setState(({ data }) => {
      const idx = data.findIndex((el) => el.id === id);
      const newArr = [...data.slice(0, idx), ...data.slice(idx + 1)];
      return {
        data: newArr,
      };
    });
  };

  //function for add item;
  onAdd = (text) => {
    const newItem = this.createTodoItem(text);
    this.setState(({ data }) => {
      const newArr = [...data, newItem];

      return {
        data: newArr,
      };
    });
  };

  //function for changing state 'done';
  onToggleDone = (id) => {
    this.setState(({ data }) => {
      return {
        data: this.toggleProperty(data, id, "done"),
      };
    });
  };

  //function for changing state 'important';
  onToggleImportant = (id) => {
    this.setState(({ data }) => {
      return {
        data: this.toggleProperty(data, id, "important"),
      };
    });
  };

  //function for update state term;
  onSearchChange = (term) => {
    this.setState({
      term,
    });
  };

  //function search use metod filter for <SearchPanel/>;
  search(items, term) {
    if (term.length === 0) {
      return items;
    }
    return items.filter((item) => {
      return item.label.toLowerCase().indexOf(term.toLowerCase()) > -1;
    });
  }

  //function for update sate filter;
  onFilterChange = (filter) => {
    this.setState({
      filter,
    });
  };

  //logic for <ItemStatusFilter/>;
  filter(items, filter) {
    switch (filter) {
      case "all":
        return items;
      case "active":
        return items.filter((item) => item.important);
      case "done":
        return items.filter((item) => item.done);
      default:
        return items;
    }
  }

  onError = () => {
    this.setState({ error: true });
  };
  


  render() {
    const { data, filter, term } = this.state;
    const visibleItems = this.filter(this.search(data, term), filter);
    const doneCount = data.filter((el) => el.done).length;
    const toDoCount = data.length - doneCount;

    

    return (
      // <div className="box-app">
      <div className="box">
        <AppHeader todo={toDoCount} done={doneCount} />

        <div className="todo-app">
          <div className="box-searchPanel-itemStatusFilter">
            <SearchPanel onSearchChange={this.onSearchChange} />
            <ItemStatusFilter
              filter={filter}
              onFilterChange={this.onFilterChange}
            />
          </div>
          <TodoList
            data={visibleItems}
            onToggleDone={this.onToggleDone}
            onToggleImportant={this.onToggleImportant}
            onDelete={this.onDelete}
            onError={this.onError}
          />
          <ItemAddForm onAdd={this.onAdd}/>

        </div>
      </div>
    );
  }
}
