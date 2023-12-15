"use client";
import { useState, useEffect } from "react";
import { Form, Formik, Field, ErrorMessage } from "formik";
import ErrorBoundary from "../ErrorBoundary";
import { validationSchema } from "./schema";
import { initialValues } from "./initialValues";
import Link from "next/link";

const RecruitmentQuery = () => {
  const [formSubmittedSuccessfully, setFormSubmittedSuccessfully] = useState(false);
  const [formErrors, setFormErrors] = useState(null);
  const [agree, setAgree] = useState(false);

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      if (values.botInput) {
        console.log("Bot detected");
        return;
      }
      delete values.botInput;

      const formData = new FormData();

      for (const key in values) {
        formData.append(key, values[key]);
      }
      // CF7 10
      // const response = await fetch("https://content.quackrecruitmentandtraining.co.uk/wp-json/contact-form-7/v1/contact-forms/10/feedback", {
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

  if (formSubmittedSuccessfully) {
    return (
      <div
        className={`p-5 mx-auto text-center bg-zinc-300 text-black w-full max-w-lg rounded-xl shadow-xl transition-all duration-300 shadow-quackred-300 transition-height duration-2000 transform reduceHeightRec`}
      >
        <div className="my-auto max-h-fit p-4">
          <span className="material-icons text-green-500 text-6xl mt-6 mb-4">check_circle</span>
          <h2 className="text-xl text-center mb-6">Submission Successful!</h2>
          <p className="my-8">
            Thank you for submitting your details. We will get back to you shortly! You should have received an email confirming this receipt shortly, make sure you check your junk mail.
          </p>
        </div>
      </div>
    );
  }

  return (
    <ErrorBoundary>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
        {() => (
          <div className={`p-5 text-center bg-zinc-300 text-black w-full max-w-lg rounded-xl shadow-xl duration-300 shadow-quackred-300  mx-auto`}>
            <Form>
              <div>
                <div className="">
                  <div className="">
                    <div className="section-0">
                      <h3 className="text-xl text-center mb-8">{"Let's Connect: Tell Us About Your Hiring Needs"}</h3>
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
                              Business Email*
                            </label>
                            <Field type="text" id="email" name="email" className="w-full p-1 rounded bg-white text-black" />
                          </div>
                          <ErrorMessage name="email" component="span" className="error-message w-full text-center text-sm" />
                        </div>
                        <div className="h-20">
                          <div className="w-full justify-start">
                            <label htmlFor="contact-name" className=" block py-1">
                              Company Name
                            </label>
                            <Field type="text" id="company" name="company" className="w-full p-1 rounded bg-white text-black" />
                          </div>
                          <ErrorMessage name="company" component="span" className="error-message w-full text-center text-sm" />
                        </div>
                        <div className="h-20">
                          <div className="w-full">
                            <label htmlFor="phone" className=" block py-1">
                              Phone
                            </label>
                            <Field type="tel" id="phone" name="phone" className="w-full p-1 rounded bg-white text-black" />
                          </div>
                          <ErrorMessage name="phone" component="span" className="error-message w-full text-center text-sm" />
                        </div>
                        <div className="h-20">
                          <div className="w-full justify-start">
                            <label htmlFor="industry" className=" block py-1">
                              Industry
                            </label>
                            <Field type="text" id="industry" name="industry" className="w-full p-1 rounded bg-white text-black" />
                          </div>
                          <ErrorMessage name="industry" component="span" className="error-message w-full text-center text-sm" />
                        </div>
                        <div className="h-20">
                          <div className="w-full justify-start">
                            <label htmlFor="location" className=" block py-1">
                              Location(s)
                            </label>
                            <Field type="text" id="location" name="location" className="w-full p-1 rounded bg-white text-black" />
                          </div>
                          <ErrorMessage name="location" component="span" className="error-message w-full text-center text-sm" />
                        </div>
                        <div className="h-20">
                          <div className="w-full justify-start">
                            <label htmlFor="vacancies" className=" block py-1">
                              Number of vacancies
                            </label>
                            <Field type="number" id="vacancies" name="vacancies" className="w-full p-1 rounded bg-white text-black" />
                          </div>
                          <ErrorMessage name="vacancies" component="span" className="error-message w-full text-center text-sm" />
                        </div>
                        <div className="h-20">
                          <div className="w-full justify-start">
                            <label htmlFor="type" className=" block py-1">
                              Enquiry Type
                            </label>
                            <Field type="text" id="type" name="type" className="w-full p-1 rounded bg-white text-black" />
                          </div>
                          <ErrorMessage name="type" component="span" className="error-message w-full text-center text-sm" />
                        </div>
                        <div className="h-40">
                          <div className="w-full justify-start">
                            <label htmlFor="message" className=" block py-1">
                              Further Information*
                            </label>
                            <Field as="textarea" id="message" name="message" className="w-full p-1 rounded bg-white text-black h-28 resize-none" />
                          </div>
                          <ErrorMessage name="message" component="span" className="error-message w-full text-center text-sm" />
                        </div>
                      </div>
                      <div className="text-center mt-10 flex flex-col gap-6">
                        <Field type="text" name="botInput" style={{ display: "none" }} autoComplete="off" />
                        <label>
                          I agree to the{" "}
                          <Link className="text-quackred-800" prefetch={false} target="_blank" href={"/legal/privacy-policy"}>
                            terms and conditions.
                          </Link>
                          *
                          <input className="w-5 h-5 ms-3 mt-1" type="checkbox" checked={agree} onChange={() => setAgree(!agree)} />
                        </label>
                        {formErrors && <div className="error error-message">{formErrors}</div>}
                        <button className={`${!agree ? "opacity-50" : "hover:bg-quackred-600"} bg-quackred-900 mb-2 hover:text-white text-white py-2 px-4 rounded`} disabled={!agree} type="submit">
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Form>
          </div>
        )}
      </Formik>
    </ErrorBoundary>
  );
};

export default RecruitmentQuery;
