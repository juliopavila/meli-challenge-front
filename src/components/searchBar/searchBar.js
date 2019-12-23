import React from "react";
//Styles
import "./searchBar.scss";
import { FaSearch } from "react-icons/fa";

class Searchbar extends React.Component {
  render() {
    return (
      <div className="searchBar input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Nunca dejes de buscar"
          name="Search bar"
          aria-describedby="basic-addon1"
        ></input>
        <div className="input-group-prepend">
          <span className="input-group-text rounded-right" id="basic-addon1">
            <FaSearch />
          </span>
        </div>
      </div>
    );
  }
}

export default Searchbar;
