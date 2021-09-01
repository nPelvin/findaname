import React, { useState } from "react";
import NameDeux from "./Name";

const Filter = ({ gender, names }) => {
	const [searchInput, setSearchInput] = useState("");

	function handleSearchInput(event) {
		setSearchInput(event.target.value);
	}

  console.log("filterNames", names)


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
			<NameDeux filter={searchInput} gender={gender} names={names} />
		</div>
	);
};

export default Filter;
