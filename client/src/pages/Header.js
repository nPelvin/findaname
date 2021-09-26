import React from "react";
import { Link } from "react-router-dom";
import logo from "./logo.png";
function Header() {
	return (
		<div className="header">
			<Link
				to={{
					pathname: "/",
				}}
			>
				<img
					className="logo"
					data-qa="logo"
					src={logo}
					alt="Find a name logo"
				/>
			</Link>
		</div>
	);
}

export default Header;
