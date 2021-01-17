import "./Home.css";
import Introduction from "../home-components/Introduction";
import HomeResume from "../home-components/HomeResume";
import IntroductionProjects from "../home-components/IntroductionProjects";

const Home = () => {
	return (
		<>
			<Introduction />

			<div className="above-introduction-resume"></div>
			<hr className="introduction-resume" />
			<div className="below-introduction-resume"></div>

			<HomeResume />

			<div className="above-introduction-resume"></div>
			<hr className="introduction-resume" />
			<div className="below-introduction-resume"></div>

			<IntroductionProjects />
		</>
	);
};

export default Home;
