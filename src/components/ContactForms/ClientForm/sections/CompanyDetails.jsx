import { Field, ErrorMessage } from "formik";

const CompanyDetails = ({ formik }) => {
  return (
    <>
      <h3 className="text-xl text-center mb-8">Company Details</h3>
      <div className="h-20">
        <div className="w-full justify-start">
          <label htmlFor="company-name" className="block py-1">
            Company Name*
          </label>
          <Field type="text" id="company-name" name="company-name" className="w-full p-1 rounded bg-white text-black" />
        </div>
        <ErrorMessage name="company-name" component="span" className="error-message w-full text-center text-sm" />
      </div>

      <div className="h-20">
        <div className="w-full justify-start">
          <label htmlFor="company-reg-no" className=" block py-1">
            Company Registration No
          </label>
          <Field type="text" id="company-reg-no" name="company-reg-no" className="w-full p-1 rounded bg-white text-black" />
        </div>
        <ErrorMessage name="company-reg-no" component="span" className="error-message w-full text-center text-sm" />
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
            <Field type="tel" id="city" name="city" className="w-full p-1 rounded bg-white text-black" />
          </div>
          <ErrorMessage name="city" component="span" className="error-message w-full text-center text-sm" />
        </div>
        <div className="h-20 md:w-1/2">
          <div className="w-full justify-start">
            <label htmlFor="post-code" className=" block py-1">
              Postcode*
            </label>
            <Field type="text" id="post-code" name="post-code" className="w-full p-1 rounded bg-white text-black" />
          </div>
          <ErrorMessage name="post-code" component="span" className="error-message w-full text-center text-sm" />
        </div>
      </div>
    </>
  );
};

export default CompanyDetails;
