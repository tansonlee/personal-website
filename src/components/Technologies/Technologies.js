import "./Technologies.css";
import SkillData from "../../project-data/SkillData";

const Technologies = () => {
	return (
		<>
			<h2 className="page-header">My Tools</h2>
			<div className="skills-wrapper">
				{SkillData.map(({ topic, items }) => (
					<div key={topic} className="skill-card">
						<h3 className="skill-topic">{topic}</h3>
						<ul className="skill-list">
							{items.map(({ item, image }) => (
								<li className="skill-item">
									<span className="skill-span">
										<img src={image} alt={item} className="skill-image" />
									</span>
									<p>{item}</p>
								</li>
							))}
						</ul>
					</div>
				))}
			</div>
		</>
	);
};

export default Technologies;
