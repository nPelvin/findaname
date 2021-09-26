import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectCount, deleteName } from "../features/favourites/counterSlice";
import ButtonMailto from "./ButtonMailto";

function Favourites() {
	const favourite = useSelector(selectCount);
	const dispatch = useDispatch();
	return (
		<div>
			Favourites:
			{favourite.map((names, index) =>
				names.gender === "mf" ? (
					<button
						key={names.id}
						className="neutral"
						onClick={() => {
							dispatch(deleteName(names));
							console.log("clicked", names);
						}}
					>
						{names.name} {" x"}
					</button>
				) : names.gender === "fm" ? (
					<button
						key={names.id}
						className="neutral"
						onClick={() => {
							dispatch(deleteName(names));
							console.log("clicked", names);
						}}
					>
						{names.name}
					</button>
				) : names.gender === "f" ? (
					<button
						key={names.id}
						className="girl"
						onClick={() => {
							dispatch(deleteName(names));
							console.log("clicked", names);
						}}
					>
						{names.name}
					</button>
				) : (
					<button
						key={names.id}
						className="boy"
						onClick={() => {
							dispatch(deleteName(names));
							console.log("clicked", names);
						}}
					>
						{names.name}
					</button>
				)
			)}
			<br />
			<br />
			Click names you like to add to your favourites.
			{/* <ButtonMailto
				label="Write me an E-Mail"
				mailto="mailto:no-reply@example.com"
			/> */}
		</div>
	);
}

export default Favourites;
