import { useState, useEffect } from "react";
import DocumentUpload from "./FormSections/DocumentUpload";
import JobAndMiscInfo from "./FormSections/JobAndMisc";
import ContactInformation from "./FormSections/ContactInformation";
import PersonalDetails from "./FormSections/PersonalDetails";
import { initialState } from "./contactData";
import { Form, Formik } from "formik";
import { personalValidationSchema, contactValidationSchema, jobAndMiscValidationSchema, allDetailsValidationSchema } from "./constactSchema";
import ContactImageOne from "../../../assets/forms/undraw_Opened_re_i38e.png";
import ContactImageTwo from "../../../assets/forms/undraw_My_location_re_r52x.png";
import ContactImageThree from "../../../assets/forms/undraw_Hiring_re_yk5n.png";
import ContactImageFour from "../../../assets/forms/undraw_Add_files_re_v09g.png";
import ErrorBoundary from "../ErrorBoundary";

const RecruitmentForm = () => {
  const [activeSection, setActiveSection] = useState(0);
  const validationSchema = [personalValidationSchema, contactValidationSchema, jobAndMiscValidationSchema, allDetailsValidationSchema];
  // Manually managing file uploads as Formik isn't playing nice
  const [fileUploads, setFileUploads] = useState({ "cv-upload": null, "id-upload": null, "proof-of-national-insurance-number": null, "proof-of-address": null, "additional-information": null });
  // Error states
  const [uploadError, setUploadError] = useState(true);
  const [formErrors, setFormErrors] = useState(null);
  const [agree, setAgree] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const section = document.querySelector(`.section-${activeSection}`);
    const input = section.querySelector("input");
    if (input) {
      input.focus();
    }
    console.log(activeSection);
  }, [activeSection]);

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    console.log(values);
    // Handle form submission
    try {
      const formData = new FormData();

      for (const key in values) {
        formData.append(key, values[key]);
      }
      for (const key in fileUploads) {
        formData.append(key, fileUploads[key]);
      }

      const response = await fetch("https://content.quackspecialists.co.uk/wp-json/contact-form-7/v1/contact-forms/8/feedback", {
        method: "POST",
        body: formData,
      });
      console.log(response);

      const data = await response.json();
      console.log(data);
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
    0: ["title", "first-name", "last-name", "date-of-birth", "nationality", "gender"],
    1: ["email", "mobile-number", "landline-number", "address-1", "address-2", "address-3", "city", "postcode"],
    2: ["salary-type", "salary-value", "specific-role", "job-title-location", "have-transportation", "have-disability", "national-insurance-number", "share-code"],
    3: [],
    4: [],
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
      <Formik initialValues={initialState} validationSchema={validationSchema[activeSection]} onSubmit={handleSubmit}>
        {({ isValid, validateForm, setTouched }) => (
          <Form className="p-5 bg-zinc-300 text-black w-full max-w-lg rounded-xl shadow-xl transition-all duration-300 shadow-violet-300">
            <div>
              <div className="">
                <div className="">
                  <div className="section-0" style={{ display: activeSection === 0 ? "block" : "none" }}>
                    <h2 className="text-xl text-center mb-8">Personal Details</h2>
                    <PersonalDetails />
                  </div>
                  <div className="section-1" style={{ display: activeSection === 1 ? "block" : "none" }}>
                    <h2 className="text-xl text-center mb-8">Contact Information</h2>
                    <ContactInformation />
                  </div>
                  <div className="section-2" style={{ display: activeSection === 2 ? "block" : "none" }}>
                    <h2 className="text-xl text-center mb-8">Job & Miscellaneous Information</h2>
                    <JobAndMiscInfo />
                  </div>
                  <div className="section-3" style={{ display: activeSection === 3 ? "block" : "none" }}>
                    <h2 className="text-xl text-center mb-8">Document Upload</h2>
                    <DocumentUpload fileUploads={fileUploads} setFileUploads={setFileUploads} setUploadError={setUploadError} />
                  </div>
                  <div className="flex flex-row my-4 h-12">
                    <img src={ContactImageOne} alt="Contact Image One" className="w-9 md:w-12" />
                    <div className={`${activeSection > 0 ? "bg-violet-900" : "bg-white"} grow h-1 my-auto`}></div>
                    <img src={ContactImageTwo} alt="Contact Image One" className={`${activeSection > 0 ? "" : "opacity-50"} w-9 md:w-12`} />
                    <div className={`${activeSection > 1 ? "bg-violet-900" : "bg-white"} grow h-1 my-auto`}></div>
                    <img src={ContactImageThree} alt="Contact Image One" className={`${activeSection > 1 ? "" : "opacity-50"} w-9 md:w-12`} />
                    <div className={`${activeSection > 2 ? "bg-violet-900" : "bg-white"} grow h-1 my-auto`}></div>
                    <img src={ContactImageFour} alt="Contact Image One" className={`${activeSection > 2 ? "" : "opacity-50"} w-9 md:w-12`} />
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
                        if (isValid || activeSection === 3) {
                          setActiveSection((prev) => Math.min(3, prev + 1));
                        }
                      }}
                      className={`${(activeSection === 3 && "hidden") || ""} ms-auto bg-violet-900 hover:bg-violet-600 hover:text-white text-white py-2 px-4 rounded `}
                    >
                      Next
                    </button>
                  </div>
                  {activeSection === 3 && (
                    <div className="text-center mt-10 flex flex-col gap-6">
                      <label>
                        <input className="w-5 h-5" type="checkbox" checked={agree} onChange={() => setAgree(!agree)} /> I agree to the terms and conditions.*
                      </label>

                      {formErrors && <div className="error error-message">{formErrors}</div>}
                      <button
                        className={`${uploadError || !agree ? "opacity-50" : ""} bg-violet-900 hover:bg-violet-600 hover:text-white text-white py-2 px-4 rounded`}
                        disabled={uploadError || !agree}
                        type="submit"
                      >
                        Submit
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

export default RecruitmentForm;
