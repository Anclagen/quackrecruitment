import { Field, ErrorMessage } from "formik";

const ContactDetails = () => {
  return (
    <>
      <h3 className="text-xl text-center mb-8">Contact Details</h3>
      <div className="flex flex-col text-start">
        <div className="md:flex md:flex-row gap-6 w-full">
          <div className="h-20 md:w-1/2">
            <div className="w-full justify-start">
              <label htmlFor="first-name" className=" block py-1">
                First Name*
              </label>
              <Field type="text" id="first-name" name="first-name" className="w-full p-1 rounded bg-white text-black" />
            </div>
            <ErrorMessage name="first-name" component="span" className="error-message w-full text-center text-sm" />
          </div>
          <div className="h-20 md:w-1/2">
            <div className="w-full justify-start">
              <label htmlFor="surname" className=" block py-1">
                Surname*
              </label>
              <Field type="text" id="surname" name="surname" className="w-full p-1 rounded bg-white text-black" />
            </div>
            <ErrorMessage name="surname" component="span" className="error-message w-full text-center text-sm" />
          </div>
        </div>
        <div className="h-20">
          <div className="w-full">
            <label htmlFor="email" className=" block py-1">
              Email*
            </label>
            <Field type="text" id="email" name="email" className="w-full p-1 rounded bg-white text-black" />
          </div>
          <ErrorMessage name="email" component="span" className="error-message w-full text-center text-sm" />
        </div>
        <div className="h-20">
          <div className="w-full justify-start">
            <label htmlFor="telephone" className=" block py-1">
              Telephone*
            </label>
            <Field type="tel" id="telephone" name="telephone" className="w-full p-1 rounded bg-white text-black" />
          </div>
          <ErrorMessage name="telephone" component="span" className="error-message w-full text-center text-sm" />
        </div>
      </div>
    </>
  );
};

export default ContactDetails;
