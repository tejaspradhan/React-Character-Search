import React from "react";
import "./search-box.styles.css";

export const SearchBox = ({ placeholder, handleChange }) => {
  return (
    <div>
      <input
        className="search"
        type="search"
        placeholder={placeholder}
        name=""
        id=""
        onChange={handleChange}
      />
    </div>
  );
};
