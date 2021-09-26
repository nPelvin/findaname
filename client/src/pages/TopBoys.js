import React from "react";
import { useDispatch } from "react-redux";
import { addName } from "../features/favourites/counterSlice";

function TopBoys({ boys }) {
    const dispatch = useDispatch();
	return (
		<div className="card">
			<h2>Top Boys Names</h2>
			{boys.map((list, index) => (
				<button
					key={index}
					className="boy"
					onClick={() => {
						dispatch(addName(list));
					}}
				>
					{list.name}
				</button>
			))}
		</div>
	);
}

export default TopBoys;
