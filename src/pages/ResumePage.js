import "./ResumePage.css";
import ResumeCard from "../components/ResumeCard/ResumeCard";
import ResumePdf from "../assets/resume.pdf";

function ResumePage() {
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

export default ResumePage;
