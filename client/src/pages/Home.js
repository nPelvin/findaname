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
	const [message, setMessage] = useState("Loading...");
	useEffect(() => {
		fetch("/api")
			.then((res) => {
				if (!res.ok) {
					throw new Error(res.statusText);
				}
				return res.json();
			})
			.then((body) => {
				setMessage(body.message);
			})
			.catch((err) => {
				console.error(err);
			});
	}, []);

	return (
		<main role="main">
			<div>
				<h1 className="message" data-qa="message">
					{message}
				</h1>
				<Search />
			</div>
			<br />
			<Favourites />
			<TopGirls girls={girls} />
			<TopBoys boys={boys} />
		</main>
	);
}
export default Home;
