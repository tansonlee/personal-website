import "./ProjectsPage.css";
import ProjectCard from "../components/ProjectCard/ProjectCard";
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
} from "../project-data/ProjectData";

function Projects() {
	return (
		<>
			<h1 className="page-header">All Projects!</h1>

			<div className="projects-description-wrapper">
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

					<ProjectCard {...MarchingSquares} />
					<ProjectCard {...Pong} />
					<ProjectCard {...CollisionSimulator} />

					<ProjectCard {...BST} />
					<ProjectCard {...ADTinRAM} />
					<ProjectCard {...LinearRegression} />

					<ProjectCard {...Minesweeper} />
					<ProjectCard {...MazeGenerator} />
					<ProjectCard {...HashTable} />

					<ProjectCard {...RAM} />
					<ProjectCard {...RunningApp} />
					<ProjectCard {...ParametricArt} />

					<ProjectCard {...GameOfLife} />
					<ProjectCard {...RayCasting} />
					<ProjectCard {...RayMarching} />

					<ProjectCard {...BinaryTrie} />
					<ProjectCard {...FunctionalList} />
					<ProjectCard {...SoundWaves} />

					<ProjectCard {...Snake} />
					<ProjectCard {...TicTacToe} />
					<ProjectCard {...BarnsleyFern} />

					<ProjectCard {...DoublePendulum} />
					<ProjectCard {...FlowField} />
				</div>
			</div>
		</>
	);
}

export default Projects;
