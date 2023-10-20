"use client";
import { useState, useEffect } from "react";
import { AvailabilityAndKin, ContactInformation, PersonalDetails, BankDetails, ReferenceDetails, AdditionalInformation, DocumentUpload } from "./FormSections";
import { personalSchema, allAddressSchema, availabilitySchema, bankDetailsSchema, referenceDetailsSchema, additionalInformationSchema } from "./constactSchema";
import { initialState, uploadInitialState } from "./contactData";
import { Form, Formik, Field } from "formik";
import ErrorBoundary from "../ErrorBoundary";
import Stepper from "../../Formik/Stepper";
import Link from "next/link";

const CandidateRegistrationForm = () => {
  const [activeSection, setActiveSection] = useState(0);
  // Manually managing file uploads as Formik isn't playing nice
  const [fileUploads, setFileUploads] = useState(uploadInitialState);
  // Error states
  const [uploadError, setUploadError] = useState(true);
  const [formErrors, setFormErrors] = useState(null);
  const [agree, setAgree] = useState(false);
  const [success, setSuccess] = useState(false);
  const Schema = [personalSchema, allAddressSchema, availabilitySchema, bankDetailsSchema, referenceDetailsSchema, additionalInformationSchema];

  useEffect(() => {
    const section = document.querySelector(`.section-${activeSection}`);
    const input = section.querySelector("input, select");
    if (input) {
      input.focus();
    }
  }, [activeSection]);

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    // Check for honeypot
    if (values.botInput) {
      console.log("Bot detected");
      return;
    }
    delete values.botInput;

    // Handle form submission
    try {
      const formData = new FormData();
      values["no-convictions"] = "Candidate confirms they have no convictions.";
      values.agrees = "Candidate confirms they have provided truthful information and agrees to the terms and conditions.";

      for (const key in values) {
        formData.append(key, values[key]);
      }

      formData.append("proof-of-address", fileUploads["proof-of-address"]);
      formData.append("proof-passport", fileUploads["proof-passport"]);
      formData.append("proof-birth-certificate", fileUploads["proof-birth-certificate"]);

      formData.append("proof-ni-number", fileUploads["proof-ni-number"]);
      formData.append("proof-share-code", fileUploads["proof-share-code"]);
      formData.append("proof-indefinite-leave", fileUploads["proof-indefinite-leave"]);

      if (fileUploads["proof-student-term-time"]) {
        formData.append("proof-student-term-time", fileUploads["proof-student-term-time"]);
      }

      if (fileUploads["proof-visa"]) {
        formData.append("proof-visa", fileUploads["proof-visa"]);
      }

      const response = await fetch("", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      if (data.status === "mail_sent") {
        console.log(values);
        setSubmitting(false);
        setSuccess(true);
        resetForm();
        scrollTo(0, 0);
      } else {
        setFormErrors(data.message);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setFormErrors("There was a problem submitting the form. Please try again later.");
    }
  };

  const sectionFields = {
    0: ["title", "first-name", "last-name", "date-of-birth", "phone-number", "gender", "email", "ni-number", "share-code"],
    1: ["address-1", "address-2", "address-3", "city", "postcode"],
    2: ["shifts", "days", "available-from", "emergency-name", "emergency-relationship", "emergency-phone-number"],
    3: ["sort-code", "account-number", "account-holder-name", "bank-branch"],
    4: ["ref-company-name", "ref-employed-from", "ref-employed-to", "ref-reason-leaving", "ref-name", "ref-phone-number", "ref-email"],
    5: ["disabilities", "disabilities-info", "medication", "medication-info", "reasonable-adjustments", "reasonable-adjustments-info", "no-convictions"],
    6: [],
  };

  if (success) {
    return (
      <div
        className={`"p-5 text-center bg-zinc-300 text-black w-full max-w-lg rounded-xl shadow-xl transition-all duration-300 shadow-violet-300 transition-height duration-2000 transform reduceHeightCan`}
      >
        <div className="my-auto max-h-fit p-4">
          <span className="material-icons text-green-500 text-6xl mt-6 mb-4">check_circle</span>
          <h2 className="text-xl text-center mb-6">Submission Successful!</h2>
          <p className="my-8">Thank you for submitting your details. We will get back to you shortly!</p>
        </div>
      </div>
    );
  }

  return (
    <ErrorBoundary>
      <Formik initialValues={initialState} validationSchema={Schema[activeSection]} onSubmit={handleSubmit}>
        {({ isValid, validateForm, setTouched, isSubmitting }) => (
          <Form className="p-5 bg-zinc-300 text-black w-full max-w-lg rounded-xl shadow-xl transition-all duration-300 shadow-violet-300">
            <div>
              <div className="">
                <div className="">
                  <div className="section-0" style={{ display: activeSection === 0 ? "block" : "none" }}>
                    <h2 className="text-xl text-center">Personal & Contact Info</h2>
                    <Stepper activeSection={activeSection} steps={7} />
                    <PersonalDetails />
                  </div>
                  <div className="section-1" style={{ display: activeSection === 1 ? "block" : "none" }}>
                    <h2 className="text-xl text-center">Contact Information</h2>
                    <Stepper activeSection={activeSection} steps={7} />
                    <ContactInformation />
                  </div>
                  <div className="section-2" style={{ display: activeSection === 2 ? "block" : "none" }}>
                    <h2 className="text-xl text-center">Availability & Emergency Contact</h2>
                    <Stepper activeSection={activeSection} steps={7} />
                    <AvailabilityAndKin />
                  </div>
                  <div className="section-3" style={{ display: activeSection === 3 ? "block" : "none" }}>
                    <h2 className="text-xl text-center">Bank Details</h2>
                    <Stepper activeSection={activeSection} steps={7} />
                    <BankDetails />
                  </div>
                  <div className="section-4" style={{ display: activeSection === 4 ? "block" : "none" }}>
                    <h2 className="text-xl text-center">Reference Details</h2>
                    <Stepper activeSection={activeSection} steps={7} />
                    <ReferenceDetails />
                  </div>
                  <div className="section-5" style={{ display: activeSection === 5 ? "block" : "none" }}>
                    <h2 className="text-xl text-center">Additional Information</h2>
                    <Stepper activeSection={activeSection} steps={7} />
                    <AdditionalInformation />
                  </div>
                  <div className="section-6" style={{ display: activeSection === 6 ? "block" : "none" }}>
                    <h2 className="text-xl text-center">Document Upload</h2>
                    <Stepper activeSection={activeSection} steps={7} />
                    <DocumentUpload fileUploads={fileUploads} setFileUploads={setFileUploads} setUploadError={setUploadError} />
                  </div>
                  <div className="flex mt-8">
                    <button
                      type="button"
                      onClick={() => setActiveSection((prev) => Math.max(0, prev - 1))}
                      className={`${(activeSection === 0 && "hidden") || ""} bg-violet-900 hover:bg-violet-600 hover:text-white text-white py-2 px-4 rounded`}
                    >
                      Back
                    </button>
                    <button
                      type="button"
                      onClick={async () => {
                        const currentSectionFields = sectionFields[activeSection];
                        const touchedFields = {};
                        currentSectionFields.forEach((key) => {
                          touchedFields[key] = true;
                        });
                        setTouched(touchedFields);

                        await validateForm();
                        if (isValid || activeSection === 6) {
                          setActiveSection((prev) => Math.min(6, prev + 1));
                        }
                      }}
                      className={`${(activeSection === 6 && "hidden") || ""} ms-auto bg-violet-900 hover:bg-violet-600 hover:text-white text-white py-2 px-4 rounded `}
                    >
                      Next
                    </button>
                  </div>

                  {activeSection === 6 && (
                    <div className="text-center mt-10 flex flex-col gap-6">
                      <label>
                        I herby confirm that the information I have provided is correct and I agree to the terms and conditions.*
                        <input className="w-5 h-5 ms-3 mt-1" type="checkbox" checked={agree} onChange={() => setAgree(!agree)} />
                      </label>
                      {formErrors && (
                        <>
                          <div className="error error-message">
                            {formErrors} If problem persist please submit your details to using the provided{" "}
                            <Link target="_blank" href={"/contact/candidate-registration/fallback"} className="text-violet-950 font-semibold">
                              email template here.
                            </Link>
                          </div>
                        </>
                      )}
                      <Field type="text" name="botInput" style={{ display: "none" }} autoComplete="off" />
                      <button
                        className={`${uploadError || !agree ? "opacity-50" : ""} bg-violet-900 hover:bg-violet-600 hover:text-white text-white py-2 px-4 rounded`}
                        disabled={uploadError || !agree}
                        type="submit"
                      >
                        {isSubmitting ? (
                          <>
                            <svg className="inline animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                              ></path>
                            </svg>
                            Processing
                          </>
                        ) : (
                          "Submit"
                        )}
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </ErrorBoundary>
  );
};

export default CandidateRegistrationForm;
