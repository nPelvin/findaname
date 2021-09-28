import React, { useState } from "react";
import { Link } from "react-router-dom";
import Favourites from "../features/favourites/Favourites";

const Search = () => {
	const [searchInput, setSearchInput] = useState("");

	function handleSearchInput(event) {
		setSearchInput(event.target.value);
	}
	return (
		<div>
			<form>
				{/* this should be replaced perhaps with screen reader only <label htmlFor="babyName">Search for a name:</label> */}
				<div className="search-row">
					<input
						className="input"
						value={searchInput}
						onChange={handleSearchInput}
						type="text"
						id="babyName"
						placeholder="Search for a name"
					/>
					<Link
						to={{
							pathname: "/results",
							searchRes: searchInput,
						}}
					>
						<button className="submit">
							Search
						</button>
					</Link>
				</div>
			</form>
			<br />
			<Favourites />
		</div>
	);
};

export default Search;
