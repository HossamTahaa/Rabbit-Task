import React from "react";

function Search({ searchBy, setSearchBy }) {
  return (
    <div>
      <input
        type="text"
        value={searchBy}
        placeholder="Enter Name or ID"
        onChange={(e) => setSearchBy(e.target.value)}
      />
    </div>
  );
}

export default Search;
