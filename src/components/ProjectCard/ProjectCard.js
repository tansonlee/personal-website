import "./ProjectCard.css";

const ProjectCard = ({
	name,
	link,
	image,
	category,
	description,
	outcomes,
}) => {
	return (
		<>
			<div className="introduction-project-wrapper card-shadow">
				<h3 className="project-name">{name}</h3>
				<a
					rel="noreferrer"
					target="_blank"
					className="link-to-project"
					href={link}
				>
					Link to Project
				</a>
				<img className="project-image" src={image} alt={name} />

				<p className="learning-outcomes">{outcomes}</p>
				<p className="project-description">{description}</p>
			</div>
		</>
	);
};

export default ProjectCard;
