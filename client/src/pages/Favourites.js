import React from 'react';

function Favourites({ favourites }) {

	console.log(favourites);
    return (
			<div>
                Favourites: 
				{/* {favourites.map((x)=>x.name)} */}
				{favourites.map((names) =>
					names.gender === "mf" ? (
						<button
							key={names.id}
							className="neutral"
						>
							{names.name}
						</button>
					) : names.gender === "fm" ? (
						<button
							key={names.id}
							className="neutral"
						>
							{names.name}
						</button>
					) : names.gender === "f" ? (
						<button
							key={names.id}
							className="girl"
						>
							{names.name}
						</button>
					) : (
						<button key={names.id} className="boy">
							{names.name}
						</button>
					)
				)}
			</div>
		);
}

export default Favourites;