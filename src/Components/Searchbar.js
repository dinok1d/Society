import React from "react";

function Searchbar({ setCourse }) {
  return (
    <input
      className="searchBar"
      onChange={(e) => setCourse(e.target.value)}
      placeholder="Search for a Society"
    />
  );
}

export default Searchbar;
