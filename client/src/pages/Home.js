import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Search from "./Search";
import "./Home.css";
import Favourites from "./Favourites";
import girls from "../pages/TopGirls.json";
import boys from "../pages/TopBoys.json";
import TopGirls from "./TopGirls";
import TopBoys from "./TopBoys";

export function Home() {

	return (
		<main role="main">
			<div>
				<Search />
			</div>
			<br />
			<Favourites />
			<div className="row">
				{" "}
				<TopGirls girls={girls} />
				<TopBoys boys={boys} />
			</div>
		</main>
	);
}
export default Home;
