import React from "react";

function Searchbar({ setQuery }) {
  return (
    <input
      className="searchBar"
      onChange={(e) => setQuery(e.target.value)}
      placeholder="Search for a Society"
    />
  );
}

export default Searchbar;
