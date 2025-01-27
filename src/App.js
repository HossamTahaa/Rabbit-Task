import React, { useState } from "react";
import "./App.css";
import Filter from "./Components/Filter";
import Search from "./Components/Search";
import SortByDate from "./Components/SortByDate";
import DarkMode from "./Components/DarkMode";
import Table from "./Components/Table";

const orders = [
  {
    id: 1,
    customerName: "Alice",
    status: "New",
    items: ["ItemA", "Item B"],
    createdAt: "2025-01-20",
  },

  {
    id: 2,
    customerName: "Bob",
    status: "Delivered",
    items: ["Item C"],
    createdAt: "2025-01-17",
  },
  {
    id: 3,
    customerName: "Ahmed",
    status: "Picking",
    items: ["Item D"],
    createdAt: "2025-01-16",
  },
  {
    id: 4,
    customerName: "Hossam",
    status: "Delivering",
    items: ["Item E"],
    createdAt: "2025-01-19",
  },
];

function App() {
  const [filterBy, setFilterBy] = useState("All");
  const [searchBy, setSearchBy] = useState("");
  const [sortBy, setSortBy] = useState(true); // True ASC - False DESC
  const [isDarkMode, setDarkMode] = useState(true); // True to darkmood - False to whitee
  return (
    <div className={`app ${isDarkMode ? "light" : "dark"}`}>
      <div>
        <h1>Responsive Order</h1>
        <DarkMode
          className="button"
          isDarkMode={isDarkMode}
          setDarkMode={setDarkMode}
        />
      </div>
      <div className="controls">
        <Filter filterBy={filterBy} setFilterBy={setFilterBy} />
        <Search searchBy={searchBy} setSearchBy={setSearchBy} />
        <SortByDate sortBy={sortBy} setSortBy={setSortBy} />
      </div>
      <Table
        orders={orders}
        filterBy={filterBy}
        searchBy={searchBy}
        sortBy={sortBy}
      />
    </div>
  );
}

export default App;
