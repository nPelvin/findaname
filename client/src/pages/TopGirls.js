import React from 'react';
import { useDispatch } from "react-redux";
import { addName } from "../features/favourites/counterSlice";

function TopGirls({ girls }) {
    const dispatch = useDispatch();
    return (
			<div className="card">
				<h2>Top Girls Names</h2>
				{girls.map((list, index) => (
					<button
						key={index}
						className="girl"
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

export default TopGirls;