import Search from "./Search";
import "./Home.css";
import girls from "../pages/TopGirls.json";
import boys from "../pages/TopBoys.json";
import TopGirls from "./TopGirls";
import TopBoys from "./TopBoys";
import RandomBoy from "./RandomBoy";
import RandomGirl from "./RandomGirl";

export function Home() {

	return (
		<main role="main" className="main">
			<div>
				<Search />
			</div>
			<br />
			<RandomGirl />
			<RandomBoy />
			<div className="row">
				{" "}
				<TopGirls girls={girls} />
				<TopBoys boys={boys} />
			</div>
		</main>
	);
}
export default Home;
