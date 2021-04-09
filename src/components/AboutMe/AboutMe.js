import "./AboutMe.css";
import SkillData from "../../project-data/SkillData";

const AboutMe = () => {
	return (
		<>
			<h1 className="page-header">About Me</h1>
			<p className="self-description card-shadow">
				I'm a Computer Science student at the University of Waterloo. I built this website as an accessible way to showcase some of my projects.
			</p>
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

export default AboutMe;
