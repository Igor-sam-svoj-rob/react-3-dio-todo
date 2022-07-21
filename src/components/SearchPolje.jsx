import React from "react";

const SearchPolje = ({ onFilterChange }) => {
  return (
    <input
      type="search"
      placeholder="pretraži"
      className="search-box"
      onChange={onFilterChange}
    />
  );
};

export default SearchPolje;
