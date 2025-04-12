import React from "react";
import FeesDetailsForm from "./FeesDetailsForm";
import TotalFeesAmount from "./TotalFeesAmount";

const FeesDetails = () => {
  return (
    <>
      <h2>Fees Details</h2>
      <div className="semesters">
        <div className="sem active">Sem 1</div>
        <div className="sem">Sem 2</div>
        <div className="sem">Sem 3</div>
        <div className="sem">Sem 4</div>
        <div className="sem">Sem 5</div>
        <div className="sem">Sem 6</div>
        <div className="sem">Sem 7</div>
        <div className="sem">Sem 8</div>
      </div>

      <div className="flex" style={{ gap: "22px" }}>
        <FeesDetailsForm />
        <hr className="verticle-line" />
        <TotalFeesAmount />
      </div>
    </>
  );
};

export default FeesDetails;
