import React, { useState, useEffect } from "react";
import Favourites from "./Favourites";
import Filter from "./Filter";

function Results(props) {

const [api, setApi] = useState(`/api/search/${props.location.searchRes}`);
const [gender, setGender] = useState("");
const [names, setNames] = useState([]);
const [favourites, setFavourites] = useState([]);


	useEffect(() => {
		fetch(api)
			.then((res) => res.json())
			.then((data) => {
				setNames(data);
			})
	}, []);


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
				<Filter
					gender={gender}
					names={names}
					favourites={favourites}
					setFavourites={setFavourites}
				/>
				{favourites !== [] ? <Favourites favourites={favourites} /> : null}
				
			</div>
		);
}

export default Results;