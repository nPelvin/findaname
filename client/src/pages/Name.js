import React from "react";

function Name({ names, filter, gender, favourites, setFavourites }) {
	return (
		<div>
			{names
				.filter((f) => f.name.includes(filter) || filter === "")
				.filter((f) => f.gender.includes(gender))
				.map((names) =>
					names.gender === "mf" ? (
						<button
							onClick={() => {
								setFavourites(favourites.concat(names));
								// localStorage.setItem("names", JSON.stringify(favourites));
								// console.log(JSON.parse(localStorage.getItem("names")));
							}}
							key={names.id}
							className="neutral"
						>
							{names.name}
						</button>
					) : names.gender === "fm" ? (
						<button
							onClick={() => {
								setFavourites(favourites.concat(names));
								// localStorage.setItem("names", JSON.stringify(favourites));
								// console.log(JSON.parse(localStorage.getItem("names")));
							}}
							key={names.id}
							className="neutral"
						>
							{names.name}
						</button>
					) : names.gender === "f" ? (
						<button
							onClick={() => {
								setFavourites(favourites.concat(names));
								// localStorage.setItem("names", JSON.stringify(favourites));
								// console.log(JSON.parse(localStorage.getItem("names")));
							}}
							key={names.id}
							className="girl"
						>
							{names.name}
						</button>
					) : (
						<button
							onClick={() => {
								setFavourites(favourites.concat(names));
								// localStorage.setItem("names", JSON.stringify(favourites));
								// console.log(JSON.parse(localStorage.getItem("names")));
							}}
							key={names.id}
							className="boy"
						>
							{names.name}
						</button>
					)
				)}
		</div>
	);
}

export default Name;
