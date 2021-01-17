import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
	return (
		<>
			<nav className="navbar">
				<Link className="link big-link" to="/">
					Tanson Lee
				</Link>
				<div className="link-wrapper">
					<Link className="link small-link" to="/">
						Home
					</Link>
					<Link className="link small-link" to="/projects">
						Projects
					</Link>
					<Link className="link small-link" to="/resume">
						Resume
					</Link>
					<Link className="link small-link" to="/contact">
						Contact
					</Link>
				</div>
			</nav>
		</>
	);
};

export default Navbar;
