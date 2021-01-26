import "./HomePage.css";
import Introduction from "../components/Introduction/Introduction";
import Experience from "../components/Experience/Experience";
import AboutMe from "../components/AboutMe/AboutMe";

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
