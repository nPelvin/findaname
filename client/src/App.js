import { Route, Switch } from "react-router-dom";
import Header from "./pages/Header";
import Home from "./pages/Home";
import Name from "./pages/Name";
import Results from "./pages/Results";
import Filter from "./pages/Filter";
import Footer from "./pages/Footer";
import "./App.css";

function App() {
	return (
		<div className="App">
			<Header />
			<Switch>
				<Route path="/" component={Home} exact></Route>
				<Route path="/results" component={Results}></Route>
				<Route path="/filter" component={Filter}></Route>
			</Switch>
			<Footer />
		</div>
	);
}

export default App;
