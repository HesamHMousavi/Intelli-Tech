import React from "react";
import { BsSearch } from "react-icons/bs";
import "./Search.css";

const Search = () => {
  return (
    <div>
      <div className="search-container">
        <BsSearch className="search-icon" />
        <input type="text" className="search-input" placeholder="Search" />
      </div>
    </div>
  );
};

export default Search;
