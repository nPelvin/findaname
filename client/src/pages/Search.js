import React, { useState } from "react";
import { Link } from "react-router-dom";

const Search = () => {
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
		</div>
	);
};

export default Search;
