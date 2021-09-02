import React, { useState } from "react";
import Name from "./Name";

const Filter = ({ gender, names, favourites, setFavourites }) => {
	const [searchInput, setSearchInput] = useState("");


	function handleSearchInput(event) {
		setSearchInput(event.target.value);
	}

	return (
		<div>
			<form>
				<label htmlFor="babyName">Filter:</label>
				<div className="search-row">
					<input
						value={searchInput}
						onChange={handleSearchInput}
						type="text"
						id="babyName"
						placeholder="Filter results"
					/>
				</div>
			</form>
			<Name filter={searchInput} gender={gender} names={names} favourites={favourites} setFavourites={setFavourites} />
		</div>
	);
};

export default Filter;
