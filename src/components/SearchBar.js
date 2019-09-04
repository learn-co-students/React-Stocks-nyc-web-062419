import React from "react";

class SearchBar extends React.Component {
  state = {
    sort: ""
  };

  onChange = e => {
    this.setState({ sort: e.target.value });
    this.props.change(e.target.value);
  };

  onSelect = e => {
    this.setState({ filter: e.target.value });
    this.props.select(e.target.value);
  };

  render() {
    return (
      <div>
        <strong>Sort by:</strong>
        <label>
          <input
            type="radio"
            value="Alphabetically"
            checked={this.state.sort === "Alphabetically"}
            onChange={this.onChange}
          />
          Alphabetically
        </label>
        <label>
          <input
            type="radio"
            value="Price"
            checked={this.state.sort === "Price"}
            onChange={this.onChange}
          />
          Price
        </label>
        <br />

        <label>
          <strong>Filter:</strong>
          <select onChange={this.onSelect}>
            <option value="Tech">Tech</option>
            <option value="Sportswear">Sportswear</option>
            <option value="Finance">Finance</option>
          </select>
        </label>
      </div>
    );
  }
}

export default SearchBar;
