import "./ProjectCard.css";

const ProjectCard = () => {
	return (
		<>
			<div className="introduction-project-wrapper">
				<h3 className="project-name">Project</h3>
				<a
					className="link-to-project"
					href="https://github.com/tansonlee"
				>
					Link to Project
				</a>
				<img
					className="project-image"
					src="https://biomedicalodyssey.blogs.hopkinsmedicine.org/files/2020/02/programming-code-window-GettyImages-1124838925_640.jpg"
				/>
				<p className="project-description">
					Descripton: Lorem ipsum dolor sit amet consectetur
					adipisicing elit. Temporibus quod veritatis repellendus
					dolorem, saepe eos.
				</p>
				<p className="learning-outcomes">
					Learning ourcomes: Lorem ipsum dolor sit amet consectetur
					adipisicing elit. Eligendi, nisi?
				</p>
			</div>
		</>
	);
};

export default ProjectCard;
