"use client";
import { useState, useEffect } from "react";
import { Form, Formik, Field, ErrorMessage } from "formik";
import ErrorBoundary from "../ErrorBoundary";
import { validationSchema } from "./schema";
import { initialValues } from "./initialValues";

const GeneralContactForm = () => {
  const [formSubmittedSuccessfully, setFormSubmittedSuccessfully] = useState(false);
  const [formErrors, setFormErrors] = useState(null);

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      const formData = new FormData();

      for (const key in values) {
        formData.append(key, values[key]);
      }

      // CF7 6
      // const response = await fetch("https://content.quackrecruitmentandtraining.co.uk/wp-json/contact-form-7/v1/contact-forms/6/feedback", {
      //   method: "POST",
      //   body: formData,
      // });

      const response = await fetch("#", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.status === "mail_sent") {
        setSubmitting(false);
        resetForm();
        setFormSubmittedSuccessfully(true);
      } else {
        setFormErrors(data.message);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setFormErrors("There was a problem submitting the form. Please try again later.");
    }
  };

  return (
    <ErrorBoundary>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
        {() => (
          <div
            className={`p-5 bg-zinc-300 text-black w-full max-w-lg rounded-xl shadow-lg transition-all shadow-quackred-300 mx-auto transition-height duration-2000 transform ${
              formSubmittedSuccessfully ? "h-[300px]" : "h-[570px]"
            }`}
          >
            {formSubmittedSuccessfully ? (
              <div className="flex flex-col items-center justify-center h-full">
                <span className="material-icons text-green-500 text-6xl mb-4">check_circle</span>
                <h4 className="text-xl">Successfully Submitted!</h4>
                <p className="text-center my-3">Thank you for reaching out. Our team will review your query and get back to you promptly.</p>
              </div>
            ) : (
              <Form>
                <div>
                  <div className="">
                    <div className="">
                      <div className="section-0">
                        <h3 className="text-xl text-center mb-8">Send a Query</h3>
                        <div className="flex flex-col text-start">
                          <div className="h-20">
                            <div className="w-full justify-start">
                              <label htmlFor="contact-name" className=" block py-1">
                                Name*
                              </label>
                              <Field type="text" id="contact-name" name="contact-name" className="w-full p-1 rounded bg-white text-black" />
                            </div>
                            <ErrorMessage name="contact-name" component="span" className="error-message w-full text-center text-sm" />
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
                              <label htmlFor="subject" className=" block py-1">
                                Subject*
                              </label>
                              <Field type="text" id="subject" name="subject" className="w-full p-1 rounded bg-white text-black" />
                            </div>
                            <ErrorMessage name="subject" component="span" className="error-message w-full text-center text-sm" />
                          </div>

                          <div className="h-40">
                            <div className="w-full justify-start">
                              <label htmlFor="message" className=" block py-1">
                                Message*
                              </label>
                              <Field as="textarea" id="message" name="message" className="w-full p-1 rounded bg-white text-black h-28 resize-none" />
                            </div>
                            <ErrorMessage name="message" component="span" className="error-message w-full text-center text-sm" />
                          </div>
                        </div>
                        <div className="text-center mt-5">
                          {formErrors && <div className="error error-message">{formErrors}</div>}
                          <button className={`bg-quackred-900 hover:bg-quackred-600 hover:text-white text-white py-2 px-4 rounded`} type="submit">
                            Submit
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Form>
            )}
          </div>
        )}
      </Formik>
    </ErrorBoundary>
  );
};

export default GeneralContactForm;
