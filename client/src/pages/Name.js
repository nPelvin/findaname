import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addName, selectCount } from "../features/favourites/counterSlice";

function Name({ names, filter, gender, favourites, setFavourites }) {
	const count = useSelector(selectCount);
	const dispatch = useDispatch();
	const [incrementAmount, setIncrementAmount] = useState("");
	const incrementValue = incrementAmount || "";

	return (
		<div>
			{names
				.filter((f) => f.name.includes(filter) || filter === "")
				.filter((f) => f.gender.includes(gender))
				.map((names) =>
					names.gender === "mf" ? (
						<button
							onClick={() => {
								dispatch(addName(names));
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
								dispatch(addName(names));
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
								dispatch(addName(names));
							}}
							key={names.id}
							className="girl"
						>
							{names.name}
						</button>
					) : (
						<button
							onClick={() => {
								dispatch(addName(names));
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
