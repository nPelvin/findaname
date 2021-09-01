import React, { useState } from "react";
import Name from "./Name";
const data = require("./babyNamesData.json");

const Search = ({ gender }) => {
  const [searchInput, setSearchInput] = useState("");

  function handleSearchInput(event) {
    setSearchInput(event.target.value);
  }




  return (
    <div>
      <form>
        <label htmlFor="babyName">Baby name</label>
        <div className="search-row">
          <input
            value={searchInput}
            onChange={handleSearchInput}
            type="text"
            id="babyName"
            placeholder="Baby name"
          />
        </div>
      </form>
      <Name data={data} filter={searchInput} gender={gender} />
    </div>
  );
};

export default Search;
