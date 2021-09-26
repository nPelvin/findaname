import { Route, Switch } from "react-router-dom";
import Header from "./pages/Header";
import Home from "./pages/Home";
import Results from "./pages/Results";
import Filter from "./pages/Filter";
import Footer from "./pages/Footer";
import logo from "./logo.png";
import { AddName } from "./features/counter/AddName";
import { FavouritesRedux } from "./features/counter/FavouritesRedux";
import "./App.css";

function App() {
	return (
		<div className="App">
			{" "}
			<Header />
			<header> </header>
			{/* <img src={logo} className="App-logo" alt="logo" /> */}
			<br />
			<Switch>
				<Route path="/" component={Home} exact></Route>
				<Route path="/results" component={Results}></Route>
				<Route path="/filter" component={Filter}></Route>
			</Switch>
			{/* <AddName /> */}
			{/* <Footer /> */}
		</div>
	);
}

export default App;

// import React from "react";
// import logo from "./logo.png";
// import { Counter } from "./features/counter/Counter";
// import "./App.css";

// function App() {
// 	return (
// 		<div className="App">
// 			<header className="App-header">
// 				<img src={logo} className="App-logo" alt="logo" />
// 				<br />
// 				<Counter />
// 			</header>
// 		</div>
// 	);
// }

// export default App;