import React from "react";
import { ReactComponent as Vector } from "../../assets/icons/vector.svg";
import { useFormContext } from "react-hook-form";
import { FEES_OPTIONS } from "../../constants/fees-creation";

const TotalFeesAmount = () => {
  const { watch } = useFormContext();
  const totalFeesAmount = watch("fields");

  const totalValue = totalFeesAmount.reduce(
    (prevVal, currentVal) => prevVal + Number(currentVal.amount),
    0
  );

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
            {totalFeesAmount.map((obj, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>
                    {FEES_OPTIONS.find((f) => f.value === obj.feesName)?.text ||
                      "-"}
                  </td>
                  <td>{obj.amount}</td>
                </tr>
              );
            })}
          </tbody>
        </table>

        <div className="total-fees-footer">
          <p className="total-label">Total Fees Amount</p>
          <input
            type="text"
            placeholder="NUM Total"
            className="total-value"
            value={totalValue}
            onChange={() => {}}
            disabled
          />
        </div>

        <Vector className="vector-top-right" />
        <Vector className="vector-bottom-left" />
      </div>
    </div>
  );
};

export default TotalFeesAmount;
