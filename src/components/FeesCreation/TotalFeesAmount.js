import React from "react";
import { ReactComponent as Vector } from "../../assets/icons/vector.svg";

const totalFeesAmount = [
  {
    id: 1,
    name: "Tution Fee",
    amount: "30,000",
  },
  {
    id: 2,
    name: "Lab Fee",
    amount: "10,000",
  },
  {
    id: 3,
    name: "Sports Fee",
    amount: "30,000",
  },
];

const TotalFeesAmount = () => {
  return (
    <div className="total-fees-amount">
      <p className="total-fees-amount-heading">Total Fees Amount</p>
      <div className="total-fees-amount-card">
        <table>
          <thead>
            <tr>
              <th>No</th>
              <th>Fees Name</th>
              <th>Fees Amount</th>
            </tr>
          </thead>
          <tbody>
            {totalFeesAmount.map((obj) => (
              <tr key={obj.id}>
                <td>{obj.id}</td>
                <td>{obj.name}</td>
                <td>{obj.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="total-fees-footer">
          <p className="total-label">Total Fees Amount</p>
          <input type="text" placeholder="NUM Total" className="total-value" />
        </div>

        <Vector className="vector-top-right" />
        <Vector className="vector-bottom-left" />
      </div>
    </div>
  );
};

export default TotalFeesAmount;
