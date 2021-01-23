import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import Projects from "./components/pages/Projects";
import Resume from "./components/pages/Resume";
import Contact from "./components/pages/Contact";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";

function App() {
	return (
		<>
			<div className="app-wrapper">
				<Router>
					<Navbar />

					<ScrollToTop>
						<Switch>
							<Route path="/" exact component={Home} />
							<Route path="/projects" component={Projects} />
							<Route path="/resume" component={Resume} />
							<Route path="/contact" component={Contact} />
						</Switch>
					</ScrollToTop>

					{/* <Footer /> */}
				</Router>
			</div>
		</>
	);
}

export default App;
