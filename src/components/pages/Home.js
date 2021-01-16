import "./Home.css";
import Introduction from "../Introduction";
import Resume from "../Resume";
import IntroductionProjects from "../IntroductionProjects";

const Home = () => {
	return (
		<>
			<Introduction />

			<div className="above-introduction-resume"></div>
			<hr className="introduction-resume" />
			<div className="below-introduction-resume"></div>

			<Resume />

			<div className="above-introduction-resume"></div>
			<hr className="introduction-resume" />
			<div className="below-introduction-resume"></div>

			<IntroductionProjects />
		</>
	);
};

export default Home;
