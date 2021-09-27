import React, { useState } from "react";
import { Link } from "react-router-dom";
import Name from "./Name";
import Favourites from "./Favourites";

const Filter = ({ gender, names }) => {
	const [searchInput, setSearchInput] = useState("");

	function handleSearchInput(event) {
		setSearchInput(event.target.value);
	}

	return (
		<div>
			<form>
				<div className="search-row">
					{/* <label htmlFor="babyName">Filter: </label> */}
					<input
						value={searchInput}
						onChange={handleSearchInput}
						type="text"
						id="babyName"
						placeholder="Filter results"
					/>

					{" or "}
					<Link
						to={{
							pathname: "/",
						}}
					>
						search again
					</Link>
				</div>
			</form>
			<br />
			<Favourites />
			<br />
			Returned {names.length} results
			<br />
			<Name
				filter={searchInput}
				gender={gender}
				names={names}
			/>
		</div>
	);
};

export default Filter;