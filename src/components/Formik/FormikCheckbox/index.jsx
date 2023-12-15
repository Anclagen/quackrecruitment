import { Field, ErrorMessage, useField } from "formik";

function FormikCheckbox({ label, id }) {
  const [field] = useField(id);

  return (
    <div className="w-full flex items-center">
      <label htmlFor={id} className="block flex-grow py-1">
        {label}
      </label>
      <label className="flex items-center cursor-pointer">
        <Field {...field} type="checkbox" id={id} name={id} className="sr-only" />
        <span className={`w-6 h-6 ml-2 border-2 ${field.checked ? "bg-quackred-950 border-white" : "border-white"}`}></span>
      </label>
      <div>
        <ErrorMessage name={id} component="span" className="error-message w-full text-center text-sm" />
      </div>
    </div>
  );
}

export default FormikCheckbox;
