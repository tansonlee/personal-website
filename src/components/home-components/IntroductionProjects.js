import { Link } from "react-router-dom";
import "./IntroductionProjects.css";
import ProjectCard from "../ProjectCard";
import {
	MachineLanguage,
	SortingAlgorithms,
	LindenmayerSystems,
	SudokuSolver,
	Boid,
	BST,
	FunctionalList,
	RandomData,
	ParametricArt,
} from "../../project-data/data";

const IntroductionProjects = () => {
	return (
		<>
			<h2 className="introduction-project-header">Featured Projects</h2>
			<div className="intro-project-description-wrapper">
				<p className="introduction-project-description">
					You can find the rest of my projects here: &nbsp;
					<Link className="introduction-project-link" to="/projects">
						All Projects
					</Link>
				</p>
			</div>
			<div className="introduction-project-card-wrapper-wrapper">
				<div className="introduction-project-card-wrapper">
					<ProjectCard {...MachineLanguage} />
					<ProjectCard {...SortingAlgorithms} />
					<ProjectCard {...LindenmayerSystems} />
					<ProjectCard {...SudokuSolver} />
					<ProjectCard {...Boid} />
					<ProjectCard {...ParametricArt} />
					<ProjectCard {...BST} />
					<ProjectCard {...FunctionalList} />
					<ProjectCard {...RandomData} />
				</div>
			</div>
		</>
	);
};

export default IntroductionProjects;
