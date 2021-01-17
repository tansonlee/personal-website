import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import Projects from "./components/pages/Projects";
import Contact from "./components/pages/Contact";

function App() {
	return (
		<>
			<div className="app-wrapper">
				<Router>
					<Navbar />

					<Switch>
						<Route path="/" exact component={Home} />
						<Route path="/projects" component={Projects} />
						<Route path="/contact" component={Contact} />
					</Switch>
				</Router>
			</div>
		</>
	);
}

export default App;
