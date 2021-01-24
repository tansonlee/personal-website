import "./Experience.css";
import ExperienceCard from "./ExperienceCard";
import { Sciex, Tutor, CanadianTire } from "../project-data/ExperienceData";

const Experience = () => {
	return (
		<>
			<h3 className="page-header">My Experience</h3>
			<ExperienceCard {...Sciex} />
			<ExperienceCard {...Tutor} />
			<ExperienceCard {...CanadianTire} />
		</>
	);
};

export default Experience;
