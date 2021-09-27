import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addName } from "../features/favourites/counterSlice";
import { selectCount } from "../features/favourites/counterSlice";

function TopBoys({ boys }) {
    const dispatch = useDispatch();
	const favourite = useSelector(selectCount);
	return (
		<div className="card">
			<h2>Top Boys Names</h2>
			{boys.map((list, index) => (
				<button
					key={index}
					className="boy"
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

export default TopBoys;
