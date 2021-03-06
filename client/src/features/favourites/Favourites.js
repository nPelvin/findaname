import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectFav, deleteName } from "./favSlice";

function Favourites() {
	const favourite = useSelector(selectFav);
	const dispatch = useDispatch();
	return (
		<div className="favouritesMain">
			Favourites:
			{favourite.map((names) =>
				names.gender === "mf" ? (
					<button
						key={names.id}
						className="neutral"
						onClick={() => {
							dispatch(deleteName(names));
							console.log("clicked", names);
						}}
					>
						{names.name}{" "}
						{
							<b
								className="deleteGlyph"
								onClick={() => {
									dispatch(deleteName(names));
								}}
								onKeyDown={(e) => {
									if (e.keyCode == 9) {
										e.preventDefault;
										return;
									}
									dispatch(deleteName(names));
								}}
								role="button"
								tabIndex={0}
							>
								x
							</b>
						}
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
						{names.name}{" "}
						{
							<b
								className="deleteGlyph"
								onClick={() => {
									dispatch(deleteName(names));
								}}
								onKeyDown={(e) => {
									if (e.keyCode == 9) {
										e.preventDefault;
										return;
									}
									dispatch(deleteName(names));
								}}
								role="button"
								tabIndex={0}
							>
								x
							</b>
						}
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
						{names.name}{" "}
						{
							<b
								className="deleteGlyph"
								onClick={() => {
									dispatch(deleteName(names));
								}}
								onKeyDown={(e) => {
									if (e.keyCode == 9) {
										e.preventDefault;
										return;
									}
									dispatch(deleteName(names));
								}}
								role="button"
								tabIndex={0}
							>
								x
							</b>
						}
					</button>
				) : (
					<button key={names.id} className="boy">
						{names.name}{" "}
						{
							<b
								className="deleteGlyph"
								onClick={() => {
									dispatch(deleteName(names));
								}}
								onKeyDown={(e) => {
									if (e.keyCode == 9) {
										e.preventDefault;
										return;
									}
									dispatch(deleteName(names));
								}}
								role="button"
								tabIndex={0}
							>
								x
							</b>
						}
					</button>
				)
			)}
			<br />
			<br />
			Click names you like to add them to your favourites.
		</div>
	);
}

export default Favourites;
