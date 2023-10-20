import { Field, ErrorMessage } from "formik";

function FormikField({ label, type, id, width = "w-full", options = [], placeholder = "" }) {
  return (
    <div className="w-full">
      <label htmlFor={id} className="block py-1">
        {label}
      </label>
      <div className="h-14">
        {type === "select" ? (
          <Field as="select" id={id} name={id} className={`${width} p-1 rounded bg-white text-black`}>
            {options.map((option, index) => (
              <option key={index} value={option.value} label={option.label} />
            ))}
          </Field>
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
