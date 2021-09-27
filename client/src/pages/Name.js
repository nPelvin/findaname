import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addName } from "../features/favourites/counterSlice";
import { selectCount } from "../features/favourites/counterSlice";

function Name({ names, filter, gender }) {
	const dispatch = useDispatch();
	const favourite = useSelector(selectCount);


	return (
		<div>
			{names
				.filter((f) => f.name.includes(filter) || filter === "")
				.filter((f) => f.gender.includes(gender))
				.map((names) =>
					names.gender === "mf" ? (
						<button
							onClick={() => {
								favourite.includes(names)
									? alert(`${names.name} is already in your favourites`)
									: dispatch(addName(names));
							}}
							key={names.id}
							className="neutral"
						>
							{names.name}
						</button>
					) : names.gender === "fm" ? (
						<button
							onClick={() => {
								favourite.includes(names)
									? alert(`${names.name} is already in your favourites`)
									: dispatch(addName(names));
							}}
							key={names.id}
							className="neutral"
						>
							{names.name}
						</button>
					) : names.gender === "f" ? (
						<button
							onClick={() => {
								favourite.includes(names)
									? alert(`${names.name} is already in your favourites`)
									: dispatch(addName(names));
							}}
							key={names.id}
							className="girl"
						>
							{names.name}
						</button>
					) : (
						<button
							onClick={() => {
								favourite.includes(names)
									? alert(`${names.name} is already in your favourites`)
									: dispatch(addName(names));
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
