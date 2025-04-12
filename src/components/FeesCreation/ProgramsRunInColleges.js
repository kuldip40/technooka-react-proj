import React from "react";
import ProgramCard from "./ProgramCard";

const ProgramsRunInColleges = () => {
  return (
    <>
      <h2>Program Run in Colleges</h2>
      <div className="programs">
        <ProgramCard status="pending" />
        <ProgramCard status="completed" />
        <ProgramCard status="pending" />
      </div>
    </>
  );
};

export default ProgramsRunInColleges;
