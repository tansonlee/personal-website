import "./HomePage.css";
import Introduction from "../Introduction";
import Experience from "../Experience";
import AboutMe from "../AboutMe";

const Home = () => {
	return (
		<>
			<Introduction />

			<div className="spacing"></div>

			<Experience />

			<div className="spacing"></div>

			<AboutMe />
		</>
	);
};

export default Home;
