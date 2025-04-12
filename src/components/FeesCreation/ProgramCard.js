import React from "react";
import collegeWhite from "../../assets/icons/college.svg";
import collegeYellow from "../../assets/icons/college-yellow.svg";
import { ReactComponent as Vector } from "../../assets/icons/vector.svg";

const ProgramCard = ({ status }) => {
  const imageSrc = status === "pending" ? collegeYellow : collegeWhite;
  return (
    <div className={`program ${status}`}>
      <div className="college-icon">
        <img src={imageSrc} alt="college" />
      </div>
      <div className="college-name">College Name</div>
      {status === "pending" && <span className="status">Pending</span>}
      <div className="circle">
        <Vector />
      </div>
    </div>
  );
};

export default ProgramCard;
