import React from "react";
import "./Fooder.css";
import "../../../components/ProjectCard/ProjectCard.css";

const Fooder = () => {
	return (
		<div className="introduction-project-wrapper track-me-wrapper">
			<div className="fooder-image-wrapper">
				<img
					className="fooder-image fooder-image-1"
					src="https://github.com/tansonlee/fooder-frontend/raw/main/assets/home.png"
					alt="trackme"
				/>
				<img
					className="fooder-image fooder-image-2"
					src="https://github.com/tansonlee/fooder-frontend/raw/main/assets/create-room.png"
					alt="trackme"
				/>
				<img
					className="fooder-image fooder-image-3"
					src="https://github.com/tansonlee/fooder-frontend/raw/main/assets/room-lobby.png"
					alt="trackme"
				/>
				<img
					className="fooder-image fooder-image-4"
					src="https://github.com/tansonlee/fooder-frontend/raw/main/assets/matching.png"
					alt="trackme"
				/>
			</div>
			<div className="track-me-content-wrapper">
				<h3 className="project-name" style={{ justifyContent: "flex-start" }}>
					Fooder
				</h3>
				<div className="track-me-link-wrapper">
					<a
						rel="noreferrer"
						target="_blank"
						className="link-to-project track-me-link"
						href="https://github.com/tansonlee/fooder-frontend"
					>
						Code Link
					</a>
					<a
						rel="noreferrer"
						target="_blank"
						className="link-to-project track-me-link"
						href="https://fooderweb.netlify.app/"
					>
						Live Link
					</a>
				</div>
				<p className="learning-outcomes" style={{ textAlign: "unset" }}>
					Node | Socket.IO | Express | React | Material UI
				</p>

				<p className="project-description">
					Fooder helps friend groups decide where to eat. Each person joins the room on
					their device and accepts or declines restaurants. A list of restaurants that are
					unanimously accepted is displayed to the group.
				</p>
			</div>
		</div>
	);
};

export default Fooder;
