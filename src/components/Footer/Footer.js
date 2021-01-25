import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<>
			<div className="footer-wrapper">
				<h3 className="footer-name">Tanson Lee</h3>
				<div className="footer-links">
					<Link className="footer-link" to="/">
						Home
					</Link>
					<Link className="footer-link" to="/projects">
						Projects
					</Link>
					<Link className="footer-link" to="/resume">
						Resume
					</Link>
					<Link className="footer-link" to="/contact">
						Contact
					</Link>
				</div>
			</div>
		</>
	);
};

export default Footer;
