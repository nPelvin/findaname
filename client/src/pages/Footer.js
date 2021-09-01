import React from 'react';
import logo from "./logo.png";

function Footer() {
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

export default Footer;