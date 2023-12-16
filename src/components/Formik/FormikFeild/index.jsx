import { Field, ErrorMessage } from "formik";

function FormikField({ label, type, id, width = "w-full", options = [], placeholder = "" }) {
  const heightClass = type === "textarea" ? "h-24" : "h-14";
  return (
    <div className="w-full">
      <label htmlFor={id} className="block py-1">
        {label}
      </label>
      <div className={`w-full ${heightClass}`}>
        {type === "select" ? (
          <Field as="select" id={id} name={id} className={`${width} p-1 rounded bg-white text-black`}>
            {options.map((option, index) => (
              <option key={index} value={option.value} label={option.label} />
            ))}
          </Field>
        ) : type === "textarea" ? (
          <Field as="textarea" id={id} name={id} placeholder={placeholder} className={`${width} p-1 rounded bg-white text-black h-28 resize-none`} />
        ) : (
          <Field type={type} id={id} name={id} placeholder={placeholder} className={`${width} p-1 rounded bg-white text-black`} />
        )}
        <div>
          <ErrorMessage name={id} component="span" className="error-message w-full text-center text-sm" />
        </div>
      </div>
    </div>
  );
}

export default FormikField;
