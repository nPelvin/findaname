import React, { useState } from "react";
import { Link } from "react-router-dom";
import Favourites from "./Favourites";

const Search = () => {
	const [searchInput, setSearchInput] = useState("");

	function handleSearchInput(event) {
		setSearchInput(event.target.value);
	}
	return (
		<div><a href="mailto:me@me.com">email me here! Click this</a>
			<form>
				{/* <label htmlFor="babyName">Search for a name:</label> */}
				<div className="search-row">
					<input
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
						<button>Submit</button>
					</Link>
				</div>
			</form>
			<br />
			<Favourites />
		</div>
	);
};

export default Search;
