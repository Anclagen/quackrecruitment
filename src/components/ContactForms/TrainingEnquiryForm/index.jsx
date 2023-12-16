"use client";
import { useState } from "react";
import { Form, Formik, Field, ErrorMessage } from "formik";
import ErrorBoundary from "../ErrorBoundary";
import { validationSchema } from "./schema";
import { initialValues } from "./initialValues";
import Link from "next/link";
import FormikField from "@/components/Formik/FormikFeild";
import FormikYesNoDetails from "@/components/Formik/FormikYesNoDetails";

const TrainingEnquiryForm = () => {
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
      // CF7 11
      // const response = await fetch("https://content.quackrecruitmentandtraining.co.uk/wp-json/contact-form-7/v1/contact-forms/11/feedback", {
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
              <div className="section-0">
                <h3 className="text-xl text-center mb-8">Training Course Enquiry</h3>
                <div className="flex flex-col text-start">
                  <FormikField
                    label="Course(s) of Interest*"
                    type="select"
                    id="courseInterest"
                    options={[
                      { value: "", label: "Please select a course", disabled: true },
                      { value: "Food & Hygiene", label: "Food & Hygiene" },
                      { value: "SIA", label: "Security Industry Authority (SIA)" },
                      { value: "Customer Service & Administration", label: "Customer Service & Administration" },
                      { value: "CSCS", label: "Construction Skills (CSCS)" },
                      { value: "Forklift", label: "Forklift" },
                      { value: "Welding", label: "Welding" },
                    ]}
                  />
                  <FormikField
                    label="Looking to Train as"
                    type="select"
                    id="traineeType"
                    options={[
                      { value: "", label: "Please select an option", disabled: true },
                      { value: "Company", label: "Company" },
                      { value: "Individual", label: "Individual" },
                      { value: "Training Provider", label: "Training Provider" },
                    ]}
                  />
                  <FormikField label="Company Name (if applicable)" type="text" id="company" />
                  <FormikField label="Contact Name*" type="text" id="contactName" />
                  <FormikField label="Contact Number*" type="tel" id="contactNumber" />
                  <FormikField label="Email Address*" type="email" id="email" />

                  <FormikYesNoDetails name="multipleStudents" question="Do you want to place multiple students?" detailsLabel="How many would you like to place?*" />
                  <div className="my-3">
                    <FormikYesNoDetails name="disabilities" question="Any relevant learning disabilities or disabilities?" detailsLabel="Please further details.*" />
                  </div>

                  <FormikField
                    label="Further Information"
                    type="textarea" // This will be ignored since we're using the 'as' prop
                    id="furtherInformation"
                    as="textarea" // This turns the field into a textarea
                    placeholder="Please provide any other relevant information"
                  />
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
            </Form>
          </div>
        )}
      </Formik>
    </ErrorBoundary>
  );
};

export default TrainingEnquiryForm;

// Direct Learner...Employer...Primary Training Provider..
