import "./ContactPage.css";
import emailjs from "emailjs-com";
import { useState } from "react";

const Contact = () => {
	const [hasSubmitted, setHasSubmitted] = useState(false);

	const handleSubmit = e => {
		e.preventDefault(); // Prevents default refresh by the browser
		emailjs
			.sendForm(
				process.env.REACT_APP_SERVICE_ID,
				process.env.REACT_APP_TEMPLATE_ID,
				e.target,
				process.engv.REACT_APP_USER_ID
			)
			.then(
				result => {
					alert(
						"Message Sent, I'll get back to you shortly",
						result.text
					);
				},
				error => {
					alert("An error occured, Plese try again", error.text);
					console.log(error);
				}
			);
	};

	return (
		<>
			<h1 className="page-header">Contact Me!</h1>
			<form className="contact-form" onSubmit={handleSubmit}>
				<div className="small-input-warpper">
					<p className="prompt">Your Name:</p>
					<input
						name="name"
						type="text"
						placeholder="John Smith"
						className="small-input"
					/>
					<p className="prompt">Your Email:</p>
					<input
						name="email"
						type="text"
						placeholder="email@email.com"
						className="small-input"
					/>
					<p className="prompt">Subject:</p>
					<input
						name="subject"
						type="text"
						placeholder="Subject . . ."
						className="small-input"
					/>
				</div>
				<div className="large-input-wrapper">
					<div>
						<p className="prompt">Your Message:</p>
						<textarea
							name="message"
							type="text"
							placeholder="Message . . ."
							className="large-input"
						></textarea>
					</div>
					<button className="form-submit">Send Message!</button>
				</div>
			</form>
			{hasSubmitted ? (
				<p className="submitted-message">Thanks for submitting!</p>
			) : null}
		</>
	);
};

export default Contact;
