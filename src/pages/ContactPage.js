import "./ContactPage.css";
import emailjs from "emailjs-com";
import ids from "./Ids";

const Contact = () => {
	const handleSubmit = e => {
		e.preventDefault(); // Prevents default refresh by the browser
		emailjs
			.sendForm(ids.SERVICE_ID, ids.TEMPLATE_ID, e.target, ids.USER_ID)
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
			<form className="form" onSubmit={handleSubmit}>
				<p>Your Name:</p>
				<input
					name="name"
					type="text"
					placeholder="name…"
					className="form__input"
				/>
				<p>Your Email:</p>
				<input
					name="email"
					type="text"
					placeholder="email…"
					className="form__input"
				/>
				<p>Subject:</p>
				<input
					name="subject"
					type="text"
					placeholder="Subject…"
					className="form__input"
				/>
				<p>Your Message:</p>
				<textarea
					name="message"
					type="text"
					placeholder="Your Message…"
					className="form__input-message"
				></textarea>
				<button className="form__input — button">Send Message</button>
			</form>
		</>
	);
};

export default Contact;
