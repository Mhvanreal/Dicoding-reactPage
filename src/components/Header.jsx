import React from "react";
import SearchBar from "./SearchBar";

const Header = ({ onSearch }) => {
  return (
    <header className="note-app__header">
      <h1 className="note-app__title">Notes</h1>
      <SearchBar onSearch={onSearch} />
    </header>
  );
};

export default Header;
