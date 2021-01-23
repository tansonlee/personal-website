import "./HomeResume.css";
import ResumeCard from "../ResumeCard";
import ResumePdf from "../../assets/resume.pdf";

const HomeResume = () => {
	return (
		<>
			<h2 className="resume-header">Resume</h2>
			<p className="resume-description">
				Link to download my resume here:&nbsp;
				<a
					className="link-to-resume"
					href={ResumePdf}
					download="Resume_Tanson_Lee.pdf"
				>
					Resume
				</a>
			</p>

			<ResumeCard />
		</>
	);
};

export default HomeResume;
