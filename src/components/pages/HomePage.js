import "./HomePage.css";
import Introduction from "../Introduction/Introduction";
import Experience from "../Experience/Experience";
import AboutMe from "../AboutMe/AboutMe";

const Home = () => {
	return (
		<>
			<Introduction />

			<div className="spacing"></div>

			<AboutMe />

			<div className="spacing"></div>

			<Experience />
		</>
	);
};

export default Home;
