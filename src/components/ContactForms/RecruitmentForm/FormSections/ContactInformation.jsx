import { Field, ErrorMessage } from "formik";
const ContactInformation = () => (
  <div className="flex flex-col">
    <div className="h-20">
      <div className="w-full">
        <label htmlFor="email" className=" block py-1">
          Email*
        </label>
        <Field type="email" id="email" name="email" className="w-full p-1 rounded bg-white text-black" />
      </div>
      <ErrorMessage name="email" component="span" className="error-message w-full text-center text-sm" />
    </div>

    <div className="md:flex md:flex-row gap-6 w-full">
      <div className="h-20 md:w-1/2">
        <div className="w-full justify-start">
          <label htmlFor="mobile-number" className=" block py-1">
            Mobile Number*
          </label>
          <Field type="tel" id="mobile-number" name="mobile-number" className="w-full p-1 rounded bg-white text-black" />
        </div>
        <ErrorMessage name="mobile-number" component="span" className="error-message w-full text-center text-sm" />
      </div>

      <div className="h-20 md:w-1/2">
        <div className="w-full justify-start">
          <label htmlFor="landline-number" className=" block py-1">
            Landline Number
          </label>
          <Field type="tel" id="landline-number" name="landline-number" className="w-full p-1 rounded bg-white text-black" />
        </div>
        <ErrorMessage name="landline-number" component="span" className="error-message w-full text-center text-sm" />
      </div>
    </div>

    <div className="h-20">
      <div className="w-full justify-start">
        <label htmlFor="address-1" className=" block py-1">
          Address 1*
        </label>
        <Field type="text" id="address-1" name="address-1" className="w-full p-1 rounded bg-white text-black" />
      </div>
      <ErrorMessage name="address-1" component="span" className="error-message w-full text-center text-sm" />
    </div>

    <div className="h-20">
      <div className="w-full justify-start">
        <label htmlFor="address-2" className=" block py-1">
          Address 2
        </label>
        <Field type="text" id="address-2" name="address-2" className="w-full p-1 rounded bg-white text-black" />
      </div>
      <ErrorMessage name="address-2" component="span" className="error-message w-full text-center text-sm" />
    </div>

    <div className="h-20">
      <div className="w-full justify-start">
        <label htmlFor="address-3" className=" block py-1">
          Address 3
        </label>
        <Field type="text" id="address-3" name="address-3" className="w-full p-1 rounded bg-white text-black" />
      </div>
      <ErrorMessage name="address-3" component="span" className="error-message w-full text-center text-sm" />
    </div>

    <div className="md:flex md:flex-row gap-6 w-full">
      <div className="h-20 md:w-1/2">
        <div className="w-full justify-start">
          <label htmlFor="city" className=" block py-1">
            City*
          </label>
          <Field type="text" id="city" name="city" className="w-full p-1 rounded bg-white text-black" />
        </div>
        <ErrorMessage name="city" component="span" className="error-message w-full text-center text-sm" />
      </div>

      <div className="h-20 md:w-1/2">
        <div className="w-full justify-start">
          <label htmlFor="postcode" className=" block py-1">
            Postcode*
          </label>
          <Field type="text" id="postcode" name="postcode" className="w-full p-1 rounded bg-white text-black" />
        </div>
        <ErrorMessage name="postcode" component="span" className="error-message w-full text-center text-sm" />
      </div>
    </div>
  </div>
);

export default ContactInformation;
