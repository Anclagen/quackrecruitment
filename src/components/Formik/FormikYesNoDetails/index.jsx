import { Field, useField, ErrorMessage } from "formik";
import FormikField from "../FormikFeild"; // Assuming FormikField is in the same directory

function FormikYesNoDetails({ name, question, detailsLabel, placeholder = "" }) {
  const [field] = useField(name);

  return (
    <>
      <div className="mt-2">
        <span className="me-2">{question}</span>
        <div className="mt-2 flex items-center space-x-3 gap-6">
          <label className="flex items-center cursor-pointer">
            <Field type="radio" name={name} value="yes" className="sr-only" />
            <span className={`w-6 h-6 mr-2 rounded-full border-2 ${field.value === "yes" ? "bg-quackred-950 border-white" : "border-white"}`}></span>
            Yes
          </label>
          <label className="flex items-center cursor-pointer">
            <Field type="radio" name={name} value="no" className="sr-only" />
            <span className={`w-6 h-6 mr-2 rounded-full border-2 ${field.value === "no" ? "bg-quackred-950 border-white" : "border-white"}`}></span>
            No
          </label>
        </div>
      </div>
      {field.value === "yes" && detailsLabel && (
        <div className="mt-1">
          <FormikField label={detailsLabel} type="text" id={`${name}-info`} name={`${name}-info`} placeholder={placeholder} />
        </div>
      )}
    </>
  );
}

export default FormikYesNoDetails;
