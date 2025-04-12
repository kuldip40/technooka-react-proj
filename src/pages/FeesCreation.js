import React from "react";
import FeesCreationForm from "../components/FeesCreation/FeesCreationForm";
import ProgramsRunInColleges from "../components/FeesCreation/ProgramsRunInColleges";
import FeesDetails from "../components/FeesCreation/FeesDetails";
import "../styles/fees-creation.css";

const FeesCreation = () => {
  return (
    <div className="fees-creation">
      <h1>Fees Creation</h1>
      <div className="line" />
      <FeesCreationForm />
      <ProgramsRunInColleges />
      <FeesDetails />
    </div>
  );
};

export default FeesCreation;
