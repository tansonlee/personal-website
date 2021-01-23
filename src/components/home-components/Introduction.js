import "./Introduction.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IconContext } from "react-icons/";

const Introduction = () => {
	return (
		<>
			<h1 className="name">Tanson Lee.</h1>
			<div className="software-engineer">
				{" "}
				&gt; COMPUTER SCIENCE <div id="blinking-cursor"></div>{" "}
			</div>
			<p className="self-description">
				I'm a Computer Science student at the University of Waterloo. I
				built this website as an accessible way to showcase some of my
				projects.
			</p>

			<div className="media-link-wrapper">
				<IconContext.Provider value={{ className: "media-icon" }}>
					<a
						rel="noreferrer"
						target="_blank"
						className="media-link"
						href="https://github.com/tansonlee"
					>
						<FaGithub />
						<p className="icon-description">GitHib</p>
					</a>
					<a
						rel="noreferrer"
						target="_blank"
						className="media-link"
						href="https://linkedin.com/in/tanson-lee"
					>
						<FaLinkedin />
						<p className="icon-description">LinkedIn</p>
					</a>
				</IconContext.Provider>
			</div>
		</>
	);
};

export default Introduction;
