import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addName } from "../features/favourites/counterSlice";
import { selectFav } from "../features/favourites/counterSlice";

function TopGirls({ girls }) {
	const dispatch = useDispatch();
	const favourite = useSelector(selectFav);
	return (
		<div className="card">
			<h2>Top Girls Names</h2>
			{girls.map((list, index) => (
				<button
					key={index}
					className="girl"
					onClick={() => {
						favourite.includes(list)
							? alert(`${list.name} is already in your favourites`)
							: dispatch(addName(list));
					}}
				>
					{list.name}
				</button>
			))}
		</div>
	);
}

export default TopGirls;
