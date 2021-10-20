import React from "react";

function Searchbar({ setQuery ,start, setStart}) {
  return (
    <div class="position-relative ">
      <input
        className=" position-absolute top-0 end-0 m-2 w-25 form-control "
        type="search"
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for a Jam3ya!"
      />
        <div>
      <label>
      <input type="checkbox" onClick={() => setStart(!start)} />
        Would you like to filter started Jam3yat?
      </label></div>
    </div>

// we need to change the location of the filter
    
    
  );
}

export default Searchbar;
