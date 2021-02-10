import "./AboutMe.css";

const AboutMe = () => {
	return (
		<>
			<h1 className="page-header">About Me</h1>
			<p className="self-description card-shadow">
				I'm a Computer Science student at the University of Waterloo. I
				built this website as an accessible way to showcase some of my
				projects.
			</p>
			<div className="skills-wrapper">
				<div className="skills-languages">
					<h3>Languages</h3>
					<ul className="languages-list">
						<li>Python</li>
						<li>JavaScript</li>
						<li>C</li>
						<li>R</li>
						<li>Racket</li>
					</ul>
				</div>
				<div className="skills-technologies">
					<h3>Technologies</h3>
					<ul className="technologies-list">
						<li>React</li>
						<li>p5.js</li>
						<li>Vim</li>
						<li>VSCode</li>
						<li>github</li>
					</ul>
				</div>
			</div>
		</>
	);
};

export default AboutMe;
