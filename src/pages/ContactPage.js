import "./ContactPage.css";
import emailjs from "emailjs-com";
import { useState } from "react";
import axios from "axios";

const Contact = () => {
	const [hasSubmitted, setHasSubmitted] = useState(false);
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		subject: "",
		message: "",
	});

	// const handleSubmit = e => {
	// 	e.preventDefault(); // Prevents default refresh by the browser
	// 	emailjs
	// 		.sendForm(
	// 			process.env.REACT_APP_SERVICE_ID,
	// 			process.env.REACT_APP_TEMPLATE_ID,
	// 			e.target,
	// 			process.env.REACT_APP_USER_ID
	// 		)
	// 		.then(
	// 			result => {
	// 				// alert(
	// 				// 	"Message Sent, I'll get back to you shortly",
	// 				// 	result.text
	// 				// );
	// 				setHasSubmitted(true);
	// 			},
	// 			error => {
	// 				alert("An error occured, Plese try again", error.text);
	// 				console.log(error);
	// 			}
	// 		);
	// };
	const handleSubmit = e => {
		e.preventDefault(); // Prevents default refresh by the browser

		console.log(formData);
		axios({
			method: "post",
			url: "https://tansonlee-emailer.herokuapp.com/",
			data: {
				subject: formData.subject,
				body: `NAME: ${formData.name}\nSUBJECT: ${formData.subject}\nEMAIL: ${formData.name}\n\nMESSAGE:\n${formData.message}`,
			},
		}).then(
			response => {
				setHasSubmitted(true);
				console.log(response);
			},
			error => {
				console.log(error);
			}
		);
	};

	return (
		<>
			<h1 className="page-header">Contact Me!</h1>
			<form name="contact-form" method="POST" action="POST" className="contact-form" onSubmit={handleSubmit}>
				<input type="hidden" name="contact-form" value="contact-form" />
				<div className="small-input-warpper">
					<p className="prompt">Your Name:</p>
					<input
						name="name"
						type="text"
						placeholder="John Smith"
						className="small-input"
						onChange={e => setFormData({ ...formData, name: e.target.value })}
					/>
					<p className="prompt">Your Email:</p>
					<input
						required
						name="email"
						type="text"
						placeholder="email@email.com"
						className="small-input"
						onChange={e => setFormData({ ...formData, email: e.target.value })}
					/>
					<p className="prompt">Subject:</p>
					<input
						name="subject"
						type="text"
						placeholder="Subject . . ."
						className="small-input"
						onChange={e => setFormData({ ...formData, subject: e.target.value })}
					/>
				</div>
				<div className="large-input-wrapper">
					<div>
						<p className="prompt">Your Message:</p>
						<textarea
							required
							name="message"
							type="text"
							placeholder="Message . . ."
							className="large-input"
							onChange={e => setFormData({ ...formData, message: e.target.value })}
						></textarea>
					</div>
					<button type="submit" className="form-submit">
						Send Message!
					</button>
				</div>
			</form>
			{hasSubmitted ? <p className="submitted-message">Thanks for submitting!</p> : null}
		</>
	);
};

export default Contact;
