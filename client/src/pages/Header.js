import React from 'react';
import logo from "./logo.png";

function Header() {
    return (
			<div>
				<img
					className="logo"
					data-qa="logo"
					src={logo}
					alt="Find a name logo"
				/>
			</div>
		);
}

export default Header;