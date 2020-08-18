import React, { Component } from "react";

import "./search-panel.scss";

class SearchPanel extends Component {
  state = {
    term: "",
  };

  onSearchChange = (e) => {
    const term = e.target.value;
    this.setState({
      term,
    });

    this.props.onSearchChange(term);
  };

  render() {
    return (
      <div className="search-panel ">
        <input
          className="form-control"
          type="text"
          placeholder="type to seacrh"
          onChange={this.onSearchChange}
          value={this.state.term}
        />
      </div>
    );
  }
}

export default SearchPanel;
