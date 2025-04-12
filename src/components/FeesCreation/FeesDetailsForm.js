import React from "react";

const FeesDetailsForm = () => {
  return (
    <div>
      <form className="form">
        <div className="field">
          <label htmlFor="templete">Select Fees Payment Templates</label>
          <select id="select">
            <option disabled selected value="select">
              Select
            </option>
          </select>
        </div>
        <div className="flex" style={{ gap: "29px" }}>
          <div className="field">
            <label htmlFor="name">Fees Name</label>
            <input type="text" id="name" placeholder="Default" />
          </div>
          <div className="field">
            <label htmlFor="amount">Fees Amount</label>
            <input type="number" id="amount" placeholder="Default" />
          </div>
        </div>
        <div className="flex" style={{ gap: "29px" }}>
          <div className="field">
            <label htmlFor="name">Fees Name</label>
            <input type="text" id="name" placeholder="Default" />
          </div>
          <div className="field">
            <label htmlFor="amount">Fees Amount</label>
            <input type="number" id="amount" placeholder="Default" />
          </div>
        </div>
        <div className="flex" style={{ gap: "29px" }}>
          <div className="field">
            <label htmlFor="name">Fees Name</label>
            <input type="text" id="name" placeholder="Default" />
          </div>
          <div className="field">
            <label htmlFor="amount">Fees Amount</label>
            <input type="number" id="amount" placeholder="Default" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default FeesDetailsForm;
