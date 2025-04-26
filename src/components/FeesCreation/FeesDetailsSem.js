import React, { useEffect } from "react";
import FeesDetailsForm from "./FeesDetailsForm";
import TotalFeesAmount from "./TotalFeesAmount";
import { FormProvider, useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import Joi from "joi";

const feesDetailsSchema = Joi.object({
  template: Joi.string().required().messages({
    "string.empty": "Templte must be specified",
  }),
  fields: Joi.array().items({
    feesName: Joi.string().required().messages({
      "string.empty": "Fees name must be specified",
    }),
    amount: Joi.number().required().positive().messages({
      "number.positive": "Amount must be positive number",
    }),
  }),
});

const FeesDetailsSem = ({ currentSemData, onSubmitFeesData }) => {
  const methods = useForm({
    resolver: joiResolver(feesDetailsSchema),
    defaultValues: {
      template: "",
      fields: [{ feesName: "", amount: 0 }],
    },
  });

  const { reset } = methods;

  useEffect(() => {
    if (currentSemData) {
      reset({
        template: currentSemData.template,
        fields: currentSemData.fields,
      });
    }
  }, [currentSemData, reset]);

  return (
    <FormProvider {...methods}>
      <div className="flex" style={{ gap: "22px" }}>
        <FeesDetailsForm onSubmitFeesData={onSubmitFeesData} />
        <hr className="verticle-line" />
        <TotalFeesAmount />
      </div>
    </FormProvider>
  );
};

export default FeesDetailsSem;
