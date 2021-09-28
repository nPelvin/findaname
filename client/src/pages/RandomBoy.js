import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addName } from "../features/favourites/favSlice";
import { selectFav } from "../features/favourites/favSlice";

function RandomBoy() {
	const dispatch = useDispatch();
	const favourite = useSelector(selectFav);
	const api = "/api/randomboy";
	const [name, setName] = useState([]);

	useEffect(() => {
		fetch(api)
			.then((res) => res.json())
			.then((data) => {
				setName(data);
			});
	}, []);
	console.log(name);
	return (
		<div className="random">
			Random Boys Name:{" "}
			<button
				className="boy"
				onClick={() => {
					favourite.includes(name[0])
						? alert(`${name[0].name} is already in your favourites`)
						: dispatch(addName(name[0]));
				}}
			>
				{name.length === 0 ? null : name[0].name}
			</button>
		</div>
	);
}

export default RandomBoy;
