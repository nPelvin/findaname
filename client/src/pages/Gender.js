import React, { useState, useEffect } from "react";
import Filter from "./Filter";

function Gender(props) {

const [api, setApi] = useState(`/api/search/${props.location.searchRes}`);
const [gender, setGender] = useState("");
const [names, setNames] = useState([]);
console.log("api",api);
console.log("search", props.location);

	useEffect(() => {
		fetch(api)
			.then((res) => res.json())
			.then((data) => {
				setNames(data);
			})
	}, []);

console.log("api", api);
console.log("names", names);

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
			<div>
				<button
					onClick={toggleMale}
					style={{ backgroundColor: "lightskyblue" }}
				>
					Male
				</button>
				<button onClick={toggleFemale} style={{ backgroundColor: "pink" }}>
					Female
				</button>
				<button onClick={toggleNeutral} style={{ backgroundColor: "yellow" }}>
					Both
				</button>
				<Filter gender={gender} names={names} />
		
			</div>
		);
}

export default Gender;