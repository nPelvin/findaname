import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addName } from "../features/favourites/counterSlice";
import { selectFav } from "../features/favourites/counterSlice";

function Name({ names, filter, gender }) {
	const dispatch = useDispatch();
	const favourite = useSelector(selectFav);
	const handleClick = (names) => {
		favourite.includes(names)
			? alert(`${names.name} is already in your favourites`)
			: dispatch(addName(names));
	};

	return (
		<div>
			{/* ***Counts results**** */}
			{`Returned ${
				names
					.filter((names) => names.name.includes(filter) || filter === "")
					.filter((names) => names.gender.includes(gender)).length
			} results `}
			<br />
			{/* ***Returns results**** */}
			{names
				.filter((names) => names.name.includes(filter) || filter === "")
				.filter((names) => names.gender.includes(gender))
				.map((names) =>
					names.gender === "mf" ? (
						<button
							onClick={() => {
								handleClick(names);
							}}
							key={names.id}
							className="neutral"
						>
							{names.name}
						</button>
					) : names.gender === "fm" ? (
						<button
							onClick={() => {
								handleClick(names);
							}}
							key={names.id}
							className="neutral"
						>
							{names.name}
						</button>
					) : names.gender === "f" ? (
						<button
							onClick={() => {
								handleClick(names);
							}}
							key={names.id}
							className="girl"
						>
							{names.name}
						</button>
					) : (
						<button
							onClick={() => {
								handleClick(names);
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
