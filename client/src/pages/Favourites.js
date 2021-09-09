import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
	// decrement,
	// increment,
	addName,
	// incrementAsync,
	// incrementIfOdd,
	selectCount,
} from "../features/counter/counterSlice";

function Favourites({ favourites }) {
	console.log(favourites);
	  const count = useSelector(selectCount);
		const dispatch = useDispatch();
	return (
		<div>
			Favourites:

			{count.map((names, index) => 
			// <button key={index}>{names}</button>)}
			names.gender === "mf" ? (
			<button key={names.id} className="neutral">
			{names.name}
			</button>
			) : names.gender === "fm" ? (
			<button key={names.id} className="neutral">
				{names.name}
			</button>
			) : names.gender === "f" ? (
			<button key={names.id} className="girl">
				{names.name}
			</button>
			) : (
			<button key={names.id} className="boy" onClick={()=>console.log(names)}>
				{names.name}
			</button>
			)
			)}
		</div>
	);
}

export default Favourites;
