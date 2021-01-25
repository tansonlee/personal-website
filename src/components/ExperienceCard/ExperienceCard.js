import "./ExperienceCard.css";

const ExperienceCard = ({ company, date, role, description }) => {
	return (
		<>
			<div className="experience-wrapper card-shadow">
				<div className="experience-info">
					<h3>{company}</h3>
					<p className="experience-date">{date}</p>
					<p className="experience-role">{role}</p>
				</div>
				<div className="vertical-line"></div>
				<ul className="experience-description">
					{description.map((d, i) => (
						// okay to use index as key since ordering, etc...
						// will never change
						<li key={i}>{d}</li>
					))}
				</ul>
			</div>
		</>
	);
};

export default ExperienceCard;
