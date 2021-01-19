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
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
				facere quibusdam magni est dolore necessitatibus atque neque,
				enim tempora nobis sint aliquam, numquam voluptatum officiis
				expedita quidem, perspiciatis perferendis ullam.
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
