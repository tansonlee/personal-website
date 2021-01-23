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
	ParametricArt,
	CollisionSimulator,
	RunningApp,
	Minesweeper,
	ChaosGame,
	FlowField,
	TicTacToe,
	GameOfLife,
	RAM,
	SoundWaves,
	BinaryTrie,
	MazeGenerator,
	ADTinRAM,
} from "../../project-data/data";

function Projects() {
	return (
		<>
			<h1 className="projects-header">All Projects!</h1>

			<div className="projects-description-wrapper">
				<p className="projects-description">
					All projects can be found on my GitHub here:{" "}
					<a
						rel="noreferrer"
						target="_blank"
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
					<ProjectCard {...ParametricArt} />
					<ProjectCard {...CollisionSimulator} />
					<ProjectCard {...RunningApp} />
					<ProjectCard {...Minesweeper} />
					<ProjectCard {...ChaosGame} />
					<ProjectCard {...FlowField} />
					<ProjectCard {...TicTacToe} />
					<ProjectCard {...GameOfLife} />
					<ProjectCard {...RAM} />
					<ProjectCard {...SoundWaves} />
					<ProjectCard {...BinaryTrie} />
					<ProjectCard {...MazeGenerator} />
					<ProjectCard {...ADTinRAM} />
				</div>
			</div>
		</>
	);
}

export default Projects;
