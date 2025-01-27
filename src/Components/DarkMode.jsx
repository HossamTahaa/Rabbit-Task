import React from "react";

function DarkMode({ isDarkMode, setDarkMode }) {
  return (
    <div className=" darkmode-container">
      <button
        className="darkmode-button"
        onClick={() => setDarkMode(!isDarkMode)}
      >
        {isDarkMode ? "Dark Mood" : "White Mood"}
      </button>
    </div>
  );
}

export default DarkMode;
