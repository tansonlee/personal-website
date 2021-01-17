import "./Projects.css";
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
} from "../../project-data/data";

function Projects() {
	return (
		<>
			<h1 className="projects-header">All Projects!</h1>

			<div className="projects-description-wrapper">
				<p className="projects-description">
					All projects can be found on my GitHub here:{" "}
					<a
						className="projects-github-link"
						href="https://github.com/tansonlee"
					>
						GitHub
					</a>
				</p>
			</div>

			<div className="projects-project-card-wrapper-wrapper">
				<div className="projects-project-card-wrapper">
					<ProjectCard {...MachineLanguage} />
					<ProjectCard {...SortingAlgorithms} />
					<ProjectCard {...LindenmayerSystems} />
					<ProjectCard {...SudokuSolver} />
					<ProjectCard {...Boid} />
					<ProjectCard {...BST} />
					<ProjectCard {...FunctionalList} />
					<ProjectCard {...RandomData} />
					<ProjectCard {...MachineLanguage} />
					<ProjectCard {...SortingAlgorithms} />
					<ProjectCard {...LindenmayerSystems} />
					<ProjectCard {...SudokuSolver} />
					<ProjectCard {...Boid} />
					<ProjectCard {...BST} />
					<ProjectCard {...FunctionalList} />
					<ProjectCard {...RandomData} />
				</div>
			</div>
		</>
	);
}

export default Projects;
