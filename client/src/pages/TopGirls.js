import React from 'react';
import { useDispatch } from "react-redux";
import { addName } from "../features/counter/counterSlice";

function TopGirls({ girls }) {
    const dispatch = useDispatch();
    return (
			<div>
				<h1>Top Girls Names</h1>
				{girls.map((list) => (
					<button
						key={list.id}
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