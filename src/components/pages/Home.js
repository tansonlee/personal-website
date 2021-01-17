import "./Home.css";
import Introduction from "../home-components/Introduction";
import Resume from "../home-components/Resume";
import IntroductionProjects from "../home-components/IntroductionProjects";

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
