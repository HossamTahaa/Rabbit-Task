import React from "react";

function Filter({ filterBy, setFilterBy }) {
  return (
    <div className="filter-container">
      <select
        className="filter-select"
        onChange={(e) => setFilterBy(e.target.value)}
      >
        <option value="All">All</option>
        <option value="New">New</option>
        <option value="Picking">Picking</option>
        <option value="Delivering">Delivering</option>
        <option value="Delivered">Delivered</option>
      </select>
    </div>
  );
}

export default Filter;
