import React, { useEffect, useMemo, useState } from "react";
import { SEMESTERS } from "../../constants/fees-creation";
import FeesDetailsSem from "./FeesDetailsSem";

const getFeesDataFromLocal = () => {
  const data = JSON.parse(window.localStorage.getItem("semestersFees") || "[]");
  return data;
};

const FeesDetails = () => {
  const [feesData, setFeesData] = useState(() => getFeesDataFromLocal());
  const [currentSem, setCurrentSem] = useState(1);

  useEffect(() => {
    if (feesData) {
      window.localStorage.setItem("semestersFees", JSON.stringify(feesData));
    }
  }, [feesData]);

  const currentSemData = useMemo(() => {
    return feesData.find((d) => d.id === currentSem);
  }, [feesData, currentSem]);

  const handleSubmitFeesData = (data) => {
    const prevCurrentSemData = feesData.find((d) => d.id === currentSem);

    const prevFeesData = [...feesData];

    let newFeesData = [];
    if (prevCurrentSemData) {
      newFeesData = prevFeesData.map((pf) =>
        pf.id === currentSem ? { ...pf, ...data } : pf
      );
    } else {
      newFeesData = [...prevFeesData, { id: currentSem, ...data }];
    }

    setFeesData(newFeesData);
  };

  return (
    <>
      <h2>Fees Details</h2>
      <div className="semesters">
        {SEMESTERS.map(({ id, name }) => (
          <div
            className={`sem ${currentSem === id ? "active" : ""}`}
            key={id}
            onClick={() => setCurrentSem(id)}
          >
            {name}
          </div>
        ))}
      </div>

      <FeesDetailsSem
        key={currentSem}
        currentSemData={currentSemData}
        onSubmitFeesData={handleSubmitFeesData}
      />
    </>
  );
};

export default FeesDetails;
