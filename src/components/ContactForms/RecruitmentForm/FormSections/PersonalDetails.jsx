import { Field, ErrorMessage } from "formik";

const PersonalDetails = () => (
  <div className="flex flex-col">
    <div className="md:flex md:flex-row gap-6 w-full">
      {/* First Name */}
      <div className="h-20 md:w-1/2">
        <div className="w-full">
          <label htmlFor="first-name" className="block py-1">
            First Name*
          </label>
          <Field type="text" id="first-name" name="first-name" className="w-full p-1 rounded bg-white text-black" />
        </div>
        <ErrorMessage name="first-name" component="span" className="error-message w-full text-center text-sm" />
      </div>

      {/* Last Name */}
      <div className="h-20 md:w-1/2">
        <div className="w-full">
          <label htmlFor="last-name" className="block py-1">
            Last Name*
          </label>
          <Field type="text" id="last-name" name="last-name" className="w-full p-1 rounded bg-white text-black" />
        </div>
        <ErrorMessage name="last-name" component="span" className="error-message w-full text-center text-sm" />
      </div>
    </div>

    <div className="md:flex md:flex-row gap-6 w-full">
      {/* Title */}
      <div className="h-20 md:w-1/2">
        <div className="w-full">
          <label htmlFor="title" className="block py-1">
            Title*
          </label>
          <Field type="text" id="title" name="title" className="w-32 p-1 rounded bg-white text-black" />
        </div>
        <ErrorMessage name="title" component="span" className="error-message w-full text-center text-sm" />
      </div>

      {/* Date of Birth */}
      <div className="h-20 md:w-1/2">
        <div className="w-full">
          <label htmlFor="date-of-birth" className="block py-1">
            Date of Birth*
          </label>
          <Field type="date" id="date-of-birth" name="date-of-birth" className="w-content p-1 rounded bg-white text-black" />
        </div>
        <ErrorMessage name="date-of-birth" component="span" className="error-message w-full text-center text-sm" />
      </div>
    </div>

    <div className="md:flex md:flex-row gap-6 w-full">
      {/* Nationality */}
      <div className="h-20 md:w-1/2">
        <div className="w-full">
          <label htmlFor="nationality" className="block py-1">
            Nationality*
          </label>
          <Field type="text" id="nationality" name="nationality" className="p-1 rounded bg-white text-black" />
        </div>
        <ErrorMessage name="nationality" component="span" className="error-message w-full text-center text-sm" />
      </div>

      {/* Gender */}
      <div className="h-20 md:w-1/2">
        <div className="w-full">
          <label htmlFor="gender" className=" block py-1">
            Gender*
          </label>
          <Field as="select" id="gender" name="gender" className="w-32 p-1 rounded bg-white text-black">
            <option value="" label="Select gender" />
            <option value="Male" label="Male" />
            <option value="Female" label="Female" />
            <option value="Other" label="Other" />
            <option value="Prefer not to say" label="Prefer not to say" />
          </Field>
        </div>
        <ErrorMessage name="gender" component="span" className="error-message w-full text-center text-sm" />
      </div>
    </div>
  </div>
);

export default PersonalDetails;
