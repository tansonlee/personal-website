import "./ContactPage.css";
import { useState } from "react";
import axios from "axios";

const Contact = () => {
	const [hasSubmitted, setHasSubmitted] = useState(false);
	const [loadingSubmission, setLoadingSubmission] = useState(false);
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		subject: "",
		message: "",
	});
	const [formValid, setFormValid] = useState({
		name: true,
		email: true,
		subject: true,
		message: true,
	});

	const handleSubmit = e => {
		e.preventDefault(); // Prevents default refresh by the browser
		setLoadingSubmission(true);

		// Check if all fields are valid
		let valid = true;
		const newFormValid = { ...formValid };
		if (formData.name === "") {
			newFormValid.name = false;
			console.log("Name is invalid");
			valid = false;
		}
		if (formData.email === "") {
			newFormValid.email = false;
			console.log("Email is invalid");
			valid = false;
		}
		if (formData.subject === "") {
			newFormValid.subject = false;
			console.log("Subject is invalid");
			valid = false;
		}
		if (formData.message === "") {
			newFormValid.message = false;
			console.log("Message is invalid");
			valid = false;
		}

		setFormValid(newFormValid);

		if (!valid) {
			setLoadingSubmission(false);
			return;
		}

		console.log(formData);
		axios({
			method: "post",
			url: "https://tansonlee-emailer.herokuapp.com/",
			data: {
				subject: formData.subject,
				body: `NAME: ${formData.name}\nSUBJECT: ${formData.subject}\nEMAIL: ${formData.email}\n\nMESSAGE:\n${formData.message}`,
			},
		}).then(
			response => {
				setHasSubmitted(true);
				setLoadingSubmission(false);
				console.log(response);
				setFormData({
					name: "",
					email: "",
					subject: "",
					message: "",
				});
			},
			error => {
				console.log(error);
				alert("Unable to submit, please try again.");
			}
		);
	};

	return (
		<>
			<h1 className="page-header">Contact Me!</h1>
			<form
				name="contact-form"
				method="POST"
				action="POST"
				className="contact-form"
				onSubmit={handleSubmit}
			>
				<input type="hidden" name="contact-form" value="contact-form" />
				<div className="small-input-wrapper">
					<p className="prompt">
						Your Name <span className="required-star">*</span>
					</p>
					<input
						name="name"
						type="text"
						value={formData.name}
						placeholder="John Smith"
						className={"small-input" + (formValid.name ? "" : " invalid-field")}
						onChange={e => {
							setFormData({ ...formData, name: e.target.value });
							setFormValid({ ...formValid, name: true });
						}}
					/>
					<p className="prompt">
						Your Email <span className="required-star">*</span>
					</p>
					<input
						name="email"
						type="text"
						value={formData.email}
						placeholder="email@email.com"
						className={`small-input ${formValid.email ? "" : "invalid-field"}`}
						onChange={e => {
							setFormValid({ ...formValid, email: true });
							setFormData({ ...formData, email: e.target.value });
						}}
					/>
					<p className="prompt">
						Subject <span className="required-star">*</span>
					</p>
					<input
						name="subject"
						type="text"
						value={formData.subject}
						placeholder="Subject . . ."
						className={`small-input ${formValid.subject ? "" : "invalid-field"}`}
						onChange={e => {
							setFormData({ ...formData, subject: e.target.value });
							setFormValid({ ...formValid, subject: true });
						}}
					/>
				</div>
				<div className="form-right-wrapper">
					<div className="large-input-wrapper">
						<p className="prompt">
							Your Message <span className="required-star">*</span>
						</p>
						<textarea
							name="message"
							type="text"
							value={formData.message}
							placeholder="Message . . ."
							className={`large-input ${formValid.message ? "" : "invalid-field"}`}
							onChange={e => {
								setFormData({ ...formData, message: e.target.value });
								setFormValid({ ...formValid, message: true });
							}}
						></textarea>
					</div>
					<button
						type="submit"
						className="form-submit"
						style={{
							cursor: loadingSubmission ? "wait" : "pointer",
							color: loadingSubmission
								? "rgba(255, 255, 255, 0.6)"
								: "rgba(255, 255, 255, 0.9)",
						}}
						disabled={loadingSubmission}
					>
						Send Message!
					</button>
				</div>
			</form>
			{hasSubmitted ? <p className="submitted-message">Thanks for submitting!</p> : null}
			{loadingSubmission ? <p className="submitted-message">Submitting...</p> : null}
		</>
	);
};

export default Contact;
