import React, { useState, useEffect } from "react";
import Filter from "./Filter";

function Results(props) {
	const api = `/api/search/${props.location.searchRes}`;
	const [gender, setGender] = useState("");
	const [names, setNames] = useState([]);

	useEffect(() => {
		fetch(api)
			.then((res) => res.json())
			.then((data) => {
				setNames(data);
			});
	}, [api]);

	function toggleMale() {
		setGender("m");
	}
	function toggleFemale() {
		setGender("f");
	}
	function toggleNeutral() {
		setGender("");
	}

	return (
		<div className="results">
			Filter:{" "}
			<button onClick={toggleMale} style={{ backgroundColor: "lightblue" }}>
				Male
			</button>{" "}
			<button onClick={toggleFemale} style={{ backgroundColor: "pink" }}>
				Female
			</button>{" "}
			<button onClick={toggleNeutral} style={{ backgroundColor: "lightgrey" }}>
				Both
			</button>
			<br />
			<br />
			<Filter gender={gender} names={names} />
			<br />
		</div>
	);
}

export default Results;