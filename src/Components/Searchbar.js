import React from "react";

function Searchbar({ setQuery }) {
  return (
    <div class="position-relative ">
      <input
        className=" position-absolute top-0 end-0 m-2 w-25 form-control "
        type="search"
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for a Jam3ya!"
      />
    </div>
  );
}

export default Searchbar;
