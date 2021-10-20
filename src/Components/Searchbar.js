import React from "react";

function Searchbar({ setQuery, start, setStart }) {
  return (
    <div class="position-relative">
      <div class="position-absolute top-20 end-0 m-2 w-25 form-control ">
        <input
          className=" position-static w-100  "
          type="search"
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for a Jam3ya!"
        />
        <div>
          <label className=" position-static m-2 ">
            <input type="checkbox" onClick={() => setStart(!start)} />
            Would you like to filter started Jam3yat?
          </label>
        </div>
      </div>
    </div>
    // we need to change the location of the filter
  );
}

export default Searchbar;
