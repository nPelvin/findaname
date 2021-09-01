import React from "react";

function Name({ names, filter, gender }) {
	return (
		<div>
			{names
				.filter((f) => f.name.includes(filter) || filter === "")
				.filter((f) => f.gender.includes(gender))
				.map((names) =>
					names.gender === "mf" ? (
						<button key={name.id} className="neutral">
							{names.name}
						</button>
					) : names.gender === "fm" ? (
						<button key={name.id} className="neutral">
							{names.name}
						</button>
					) : names.gender === "f" ? (
						<button key={name.id} className="girl">
							{names.name}
						</button>
					) : (
						<button key={name.id} className="boy">
							{names.name}
						</button>
					)
				)}
		</div>
	);
}

export default Name;
