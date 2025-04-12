import React from "react";

const FeesCreationForm = () => {
  return (
    <form className="form">
      <div className="field">
        <label htmlFor="username">Name a Fees Creation</label>
        <input type="text" id="username" placeholder="Type something" />
      </div>
      <div className="flex" style={{ gap: "25px" }}>
        <div className="field">
          <label htmlFor="level">Program Level</label>
          <select id="level">
            <option disabled selected value="select">
              Select
            </option>
          </select>
        </div>
        <div className="field">
          <label htmlFor="type">Program Type</label>
          <select id="type">
            <option disabled selected value="select">
              Select
            </option>
          </select>
        </div>
      </div>
      <div className="field">
        <label htmlFor="name">Program Name</label>
        <select id="name">
          <option disabled selected value="select">
            Select
          </option>
        </select>
      </div>
    </form>
  );
};

export default FeesCreationForm;
