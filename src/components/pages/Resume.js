import "./Resume.css";
import ResumeCard from "../ResumeCard";
import ResumePdf from "../../assets/resume.pdf";

function Resume() {
	return (
		<>
			<h1 className="page-header">My Resume!</h1>
			<p className="description-text white-border">
				Link to download my resume here:&nbsp;
				<a
					className="inline-link"
					href={ResumePdf}
					download="Resume_Tanson_Lee.pdf"
				>
					Resume
				</a>
			</p>
			<ResumeCard />
		</>
	);
}

export default Resume;
