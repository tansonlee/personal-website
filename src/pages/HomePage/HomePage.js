import "./HomePage.css";
import Introduction from "../../components/Introduction/Introduction";
// import Experience from "../../components/Experience/Experience";
// import AboutMe from "../../components/AboutMe/AboutMe";
import Technologies from "../../components/Technologies/Technologies";
import { Link } from "react-router-dom";

const Home = () => {
	return (
		<>
			<Introduction />

			<div className="spacing-200"></div>

			<Technologies />

			<div className="spacing-100"></div>

			<div className="home-project-link">
				<p>
					Check out my projects: <Link to="/projects">Projects</Link>
				</p>
			</div>
			<div className="spacing-100"></div>
		</>
	);
};

export default Home;
