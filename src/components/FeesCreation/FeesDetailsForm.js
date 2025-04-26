import React from "react";
import { Controller, useFieldArray, useFormContext } from "react-hook-form";
import {
  FEES_OPTIONS,
  FES_PAYMENT_TEMPLATE_OPTIONS,
} from "../../constants/fees-creation";
import { removeDoubleQuotes } from "../../utils/helper";

const FeesDetailsForm = ({ onSubmitFeesData }) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useFormContext();

  const { fields, append, remove } = useFieldArray({
    name: "fields",
    control,
  });

  const submitForm = (data) => {
    onSubmitFeesData(data);
  };

  return (
    <div>
      <form className="form">
        <div className="field">
          <label htmlFor="templete">Select Fees Payment Templates</label>
          <Controller
            name="template"
            control={control}
            render={({ field }) => {
              return (
                <select id="select" {...field}>
                  <option disabled value="">
                    Select
                  </option>
                  {FES_PAYMENT_TEMPLATE_OPTIONS.map(({ key, value, text }) => (
                    <option key={key} value={value}>
                      {text}
                    </option>
                  ))}
                </select>
              );
            }}
          />
          {errors?.template && (
            <p className="error-message">
              {removeDoubleQuotes(errors?.template?.message)}
            </p>
          )}
        </div>

        {fields.map(({ id, feesName, amount }, index) => (
          <React.Fragment key={id}>
            <div className="fields">
              <div className="field">
                <label htmlFor="feesName">Fees Name</label>
                <Controller
                  control={control}
                  name={`fields.${index}.feesName`}
                  defaultValue={feesName}
                  render={({ field }) => {
                    return (
                      <select id="select" {...field}>
                        <option disabled value="">
                          Select
                        </option>
                        {FEES_OPTIONS.map(
                          ({ key, value: optionValue, text }) => (
                            <option key={key} value={optionValue}>
                              {text}
                            </option>
                          )
                        )}
                      </select>
                    );
                  }}
                />
                {errors?.fields?.[index]?.feesName && (
                  <p className="error-message">
                    {removeDoubleQuotes(
                      errors?.fields?.[index]?.feesName?.message
                    )}
                  </p>
                )}
              </div>
              <div className="field">
                <label htmlFor="amount">Fees Amount</label>
                <Controller
                  control={control}
                  name={`fields.${index}.amount`}
                  defaultValue={amount}
                  render={({ field }) => {
                    return (
                      <input
                        min={0}
                        type="number"
                        id="amount"
                        placeholder="Default"
                        {...field}
                      />
                    );
                  }}
                />
                {errors?.fields?.[index]?.amount && (
                  <p className="error-message">
                    {removeDoubleQuotes(
                      errors?.fields?.[index]?.amount?.message
                    )}
                  </p>
                )}
              </div>
              {fields.length > 1 && (
                <div className="field" style={{ marginTop: "28px" }}>
                  <button
                    type="button"
                    className="action-btn"
                    onClick={() => remove(index)}
                  >
                    Delete
                  </button>
                </div>
              )}
            </div>
            {index === fields.length - 1 && (
              <button
                type="button"
                className="action-btn"
                onClick={() => append({ feesName: "", amount: 0 })}
              >
                Add
              </button>
            )}
          </React.Fragment>
        ))}

        <button
          type="submit"
          className="cta"
          onClick={handleSubmit(submitForm)}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default FeesDetailsForm;
