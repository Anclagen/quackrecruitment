import { Field, ErrorMessage } from "formik";
const JobAndMiscInfo = () => (
  <div className="flex flex-col">
    <div className="md:flex md:flex-row gap-6 w-full">
      <div className="h-20 md:w-1/2">
        <div className="w-full justify-start">
          <label htmlFor="salary-type" className=" block py-1">
            Salary Type*
          </label>
          <Field as="select" id="salary-type" name="salary-type" className="w-full p-1 rounded bg-white text-black">
            <option value="" label="Select option" />
            <option value="Salary" label="Salary" />
            <option value="Hourly" label="Hourly" />
          </Field>
        </div>
        <ErrorMessage name="salary-type" component="span" className="error-message w-full text-center text-sm" />
      </div>

      <div className="h-20 md:w-1/2">
        <div className="w-full justify-start">
          <label htmlFor="salary-value" className=" block py-1">
            Desired Salary/Hourly Rate (£)*
          </label>
          <Field type="number" id="salary-value" name="salary-value" className="w-full p-1 rounded bg-white text-black" />
        </div>
        <ErrorMessage name="salary-value" component="span" className="error-message w-full text-center text-sm" />
      </div>
    </div>

    <div className="h-20">
      <div className="w-full justify-start">
        <label htmlFor="specific-role" className=" block py-1">
          Sought After Role(s)
        </label>
        <Field type="text" id="specific-role" name="specific-role" className="w-full p-1 rounded bg-white text-black" />
      </div>
      <ErrorMessage name="specific-role" component="span" className="error-message w-full text-center text-sm" />
    </div>

    <div className="h-20">
      <div className="w-full justify-start">
        <label htmlFor="job-title-location" className=" block py-1">
          Current Job Title & Location*
        </label>
        <Field type="text" id="job-title-location" name="job-title-location" className="w-full p-1 rounded bg-white text-black" />
      </div>
      <ErrorMessage name="job-title-location" component="span" className="error-message w-full text-center text-sm" />
    </div>

    <div className="h-20">
      <div className="w-full justify-start">
        <label htmlFor="have-disability" className=" block py-1">
          Do You Have Any Disabilities?
        </label>
        <Field type="text" id="have-disability" name="have-disability" className="w-full p-1 rounded bg-white text-black" />
      </div>
      <ErrorMessage name="have-disability" component="span" className="error-message w-full text-center text-sm" />
    </div>

    <div className="md:flex md:flex-row gap-6 w-full">
      <div className="h-20 md:w-1/2">
        <div className="w-full justify-start">
          <label htmlFor="national-insurance-number" className=" block py-1">
            National Insurance Number
          </label>
          <Field type="text" id="national-insurance-number" name="national-insurance-number" className="w-full p-1 rounded bg-white text-black" />
        </div>
        <ErrorMessage name="national-insurance-number" component="span" className="error-message w-full text-center text-sm" />
      </div>

      <div className="h-20 md:w-1/2">
        <div className="w-full justify-start">
          <label htmlFor="share-code" className=" block py-1">
            Share Code (right to work)
          </label>
          <Field type="text" id="share-code" name="share-code" className="w-full p-1 rounded bg-white text-black" />
        </div>
        <ErrorMessage name="share-code" component="span" className="error-message w-full text-center text-sm" />
      </div>
    </div>

    <div className="h-20 flex items-center">
      <label className=" block py-1">
        Do You Have Transportation
        <Field type="checkbox" name="have-transportation" className="ms-6 p-1 form-checkbox h-5 w-5" />
      </label>
    </div>
  </div>
);

export default JobAndMiscInfo;
