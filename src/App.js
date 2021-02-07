import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import ResumePage from "./pages/ResumePage";
import ContactPage from "./pages/ContactPage";
import ScrollToTop from "./components/ScrollToTop";
// import Footer from "./components/Footer/Footer";

const App = () => {
	return (
		<>
			<div className="app-wrapper">
				<Router>
					<Navbar />

					<ScrollToTop>
						<Switch>
							<Route path="/" exact component={HomePage} />
							<Route path="/projects" component={ProjectsPage} />
							<Route path="/resume" component={ResumePage} />
							<Route path="/contact" component={ContactPage} />
						</Switch>
					</ScrollToTop>

					{/* <Footer /> */}
				</Router>
			</div>
		</>
	);
};

export default App;
