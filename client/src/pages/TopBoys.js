import React from "react";
import { useDispatch } from "react-redux";
import { addName } from "../features/counter/counterSlice";

function TopBoys({ boys }) {
    const dispatch = useDispatch();
	return (
		<div>
			<h1>Top Boys Names</h1>
			{boys.map((list) => (
				<button
					key={list.id}
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
