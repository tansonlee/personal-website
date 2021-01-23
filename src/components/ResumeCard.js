import "./ResumeCard.css";
import ResumeImg from "../assets/resume.png";

const ResumeCard = () => {
	return (
		<>
			<div className="resume-wrapper">
				<img className="resume-img" src={ResumeImg} alt="resume" />
			</div>
		</>
	);
};

export default ResumeCard;
