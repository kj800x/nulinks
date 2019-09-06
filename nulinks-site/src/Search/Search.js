import React from "react";

import "./Search.css";

const handleKeyDown = (onSelectedResultChange, onGo) => event => {
  if (event.key === "Enter") {
    onGo();
  }
  if (event.key === "ArrowUp") {
    onSelectedResultChange(-1);
  }
  if (event.key === "ArrowDown") {
    onSelectedResultChange(1);
  }
};

export default ({ value, onChange, onSelectedResultChange, onGo }) => (
  <div className="searchWrapper">
    <input
      onKeyDown={handleKeyDown(onSelectedResultChange, onGo)}
      type="text"
      className="searchControl"
      autoComplete="off"
      spellCheck="false"
      autoFocus="true"
      placeholder="Search Northeastern sites..."
      value={value}
      onChange={({ target: { value } }) => onChange(value)}
    />
  </div>
);
