import "./ProjectCard.css";

const ProjectCard = ({ name, codeLink, liveLink, image, description, outcomes }) => {
	return (
		<>
			<div className="introduction-project-wrapper card-shadow">
				<h3 className="project-name">{name}</h3>
				<div className="project-link-wrapper">
					{codeLink && codeLink !== "" && (
						<a
							rel="noreferrer"
							target="_blank"
							className="link-to-project"
							href={codeLink}
						>
							Code Link
						</a>
					)}
					{liveLink && liveLink !== "" && (
						<a
							rel="noreferrer"
							target="_blank"
							className="link-to-project"
							href={liveLink}
						>
							Live Link
						</a>
					)}
				</div>
				<img className="project-image" src={image} alt={name} />

				<p className="learning-outcomes">{outcomes}</p>
				<p className="project-description">{description}</p>
			</div>
		</>
	);
};

export default ProjectCard;
