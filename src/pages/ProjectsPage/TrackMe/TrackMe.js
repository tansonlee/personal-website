import React from "react";
import "./TrackMe.css";
import "../../../components/ProjectCard/ProjectCard.css";

const TrackMe = () => {
	return (
		<div className="introduction-project-wrapper track-me-wrapper">
			<img
				className="track-me-image"
				src="https://github.com/tansonlee/TrackMe/raw/main/example2.png"
				alt="trackme"
			/>
			<div className="track-me-content-wrapper">
				<h3 className="project-name" style={{ justifyContent: "flex-start" }}>
					Track Me
				</h3>
				<div className="track-me-link-wrapper">
					<a
						rel="noreferrer"
						target="_blank"
						className="link-to-project track-me-link"
						href="https://github.com/tansonlee/TrackMe"
					>
						Code Link
					</a>
					<a
						rel="noreferrer"
						target="_blank"
						className="link-to-project track-me-link"
						href="https://track-me.netlify.app/"
					>
						Live Link
					</a>
				</div>
				<p className="learning-outcomes" style={{ textAlign: "unset" }}>
					React | Redux | Node | MongoDb | Express
				</p>

				<p className="project-description">
					TrackMe is a full stack web application that allows users to track their
					progress on personal projects. Features include authentication, bug tracking, to
					do lists, and more. projects.
				</p>
			</div>
		</div>
	);
};

export default TrackMe;
