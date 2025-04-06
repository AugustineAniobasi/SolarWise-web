import React from "react";
import "./searchBox.css"
import { MdOutlineSearch } from "react-icons/md";

function SearchBox() {
  return (
    <div className="search__box pt-1 pb-2 w-full max-w-lg mx-4 relative">
      <MdOutlineSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
      <input
        type="text"
        placeholder="Search"
        className="w-full p-2 pl-10"
      />
    </div>
  );
}

export default SearchBox;
