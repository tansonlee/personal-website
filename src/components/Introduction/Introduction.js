import "./Introduction.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IconContext } from "react-icons/";

const Introduction = () => {
	return (
		<>
			<h1 className="name">Tanson Lee.</h1>
			<div className="software-engineer">
				{" "}
				&gt; Computer Science <div id="blinking-cursor"></div>{" "}
			</div>
			<div className="languages">
				| Python | JavaScript | C | R | Racket |
			</div>
			<p className="description-text white-border">
				Code to this website made with React.js here:{" "}
				<a
					className="inline-link"
					href="https://github.com/tansonlee/personal-website"
					rel="noreferrer"
					target="_blank"
				>
					Code
				</a>
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
						<p className="icon-description">GitHub</p>
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
