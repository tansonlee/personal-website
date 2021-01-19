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
			<div className="introduction-project-wrapper">
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
				<p className="project-category">
					<span className="paragraph-descriptor">Category:</span>{" "}
					{category}
				</p>
				<p className="project-description">
					<span className="paragraph-descriptor">Descripton:</span>{" "}
					{description}
				</p>
				<p className="learning-outcomes">
					<span className="paragraph-descriptor">
						Learning outcomes:
					</span>{" "}
					{outcomes}
				</p>
			</div>
		</>
	);
};

export default ProjectCard;
