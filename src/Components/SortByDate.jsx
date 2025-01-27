import React from "react";

function SortByDate({ sortBy, setSortBy }) {
  return (
    <div className="sortby-container">
      <button className="sortby-button" onClick={() => setSortBy((e) => !e)}>
        Sort by date {sortBy ? "DESC" : "ASC"}
      </button>
    </div>
  );
}

export default SortByDate;
