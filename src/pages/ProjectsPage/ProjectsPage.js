import "./ProjectsPage.css";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import { AllProjects } from "../../project-data/ProjectData";
import TrackMe from "./TrackMe/TrackMe";
import PyScript from "./PyScript/PyScript";
import Fooder from "./Fooder/Fooder";

const Projects = () => {
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

			<PyScript />
			<Fooder />
			<TrackMe />

			<div className="projects-project-card-wrapper-wrapper">
				<div className="projects-project-card-wrapper">
					{AllProjects.map((project, i) => (
						<ProjectCard key={i} {...project} />
					))}
				</div>
			</div>
		</>
	);
};

export default Projects;
