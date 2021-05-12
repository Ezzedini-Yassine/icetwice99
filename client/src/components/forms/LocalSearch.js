import React from "react";

const LocalSearch = ({ keyword, setKeyword }) => {
  const HandleSearchChange = (e) => {
    e.preventDefault();
    setKeyword(e.target.value.toLowerCase());
  };

  return (
    <input
      type="search"
      placeholder="Filter"
      value={keyword}
      onChange={HandleSearchChange}
      className="form-control mb-4"
    />
  );
};

export default LocalSearch;
