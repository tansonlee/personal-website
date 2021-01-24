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
	MarchingSquares,
	HashTable,
	DoublePendulum,
	Pong,
	Snake,
	LinearRegression,
	RayMarching,
	RayCasting,
	BarnsleyFern,
} from "../../project-data/data";

function Projects() {
	return (
		<>
			<h1 className="page-header">All Projects!</h1>

			<div className="projects-description-wrapper">
				{/* <p className="projects-description"> */}
				<p className="description-text white-border">
					All projects can be found on my GitHub here:{" "}
					<a
						rel="noreferrer"
						target="_blank"
						className="inline-link"
						href="https://github.com/tansonlee"
					>
						GitHub
					</a>
				</p>
			</div>

			<div className="projects-project-card-wrapper-wrapper">
				<div className="projects-project-card-wrapper">
					<ProjectCard {...Boid} />
					<ProjectCard {...SudokuSolver} />
					<ProjectCard {...ChaosGame} />
					<ProjectCard {...MachineLanguage} />
					<ProjectCard {...SortingAlgorithms} />
					<ProjectCard {...LindenmayerSystems} />
					<ProjectCard {...BST} />
					<ProjectCard {...FunctionalList} />
					<ProjectCard {...ParametricArt} />
					<ProjectCard {...CollisionSimulator} />
					<ProjectCard {...RunningApp} />
					<ProjectCard {...Minesweeper} />
					<ProjectCard {...FlowField} />
					<ProjectCard {...TicTacToe} />
					<ProjectCard {...GameOfLife} />
					<ProjectCard {...RAM} />
					<ProjectCard {...SoundWaves} />
					<ProjectCard {...BinaryTrie} />
					<ProjectCard {...MazeGenerator} />
					<ProjectCard {...ADTinRAM} />
					<ProjectCard {...MarchingSquares} />
					<ProjectCard {...HashTable} />
					<ProjectCard {...DoublePendulum} />
					<ProjectCard {...Pong} />
					<ProjectCard {...Snake} />
					<ProjectCard {...LinearRegression} />
					<ProjectCard {...RayMarching} />
					<ProjectCard {...RayCasting} />
					<ProjectCard {...BarnsleyFern} />
				</div>
			</div>
		</>
	);
}

export default Projects;
