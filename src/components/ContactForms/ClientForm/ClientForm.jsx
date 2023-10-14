import { useState, useEffect } from "react";
import { Form, Formik, Field, ErrorMessage } from "formik";
import ErrorBoundary from "../ErrorBoundary";
import { validationSchema, validationSection1, validationSection2 } from "./schema";
import { initialValues } from "./initialValues";
import ContactDetails from "./sections/ContactDetails";
import CompanyDetails from "./sections/CompanyDetails";
import JobDetails from "./sections/JobDetails";
import ContactImageOne from "../../../assets/forms/undraw_Opened_re_i38e.png";
import ContactImageTwo from "../../../assets/forms/undraw_My_location_re_r52x.png";
import ContactImageThree from "../../../assets/forms/undraw_Hiring_re_yk5n.png";
import ContactImageFour from "../../../assets/forms/undraw_Add_files_re_v09g.png";

const ClientForm = () => {
  const [formSubmittedSuccessfully, setFormSubmittedSuccessfully] = useState(false);
  const [formErrors, setFormErrors] = useState(null);
  const [activeSection, setActiveSection] = useState(0);
  const validationSchemas = [validationSection1, validationSection2, validationSchema];
  const sectionFields = {
    0: ["first-name", "surname", "email", "telephone"],
    1: ["company-name", "company-reg-no", "address_1", "address_2", "address_3", "city", "post-code"],
    2: ["sector", "work-location", "skills", "qualifications", "additional-info"],
  };

  useEffect(() => {
    const section = document.querySelector(`.section-${activeSection}`);
    const input = section.querySelector("input");
    if (input) {
      input.focus();
    }
    console.log(activeSection);
  }, [activeSection]);

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      const formData = new FormData();

      for (const key in values) {
        formData.append(key, values[key]);
      }

      const response = await fetch("https://content.quackspecialists.co.uk/wp-json/contact-form-7/v1/contact-forms/7/feedback", {
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
      <Formik initialValues={initialValues} validationSchema={validationSchemas[activeSection]} onSubmit={handleSubmit}>
        {({ isValid, validateForm, setTouched, values }) => (
          <div className="p-5 bg-zinc-300 text-black w-full max-w-lg rounded-xl shadow-xl transition-all duration-300 shadow-violet-300 mx-auto transition-all duration-1000 transform">
            {formSubmittedSuccessfully ? (
              <div className="flex flex-col items-center justify-center h-full">
                <span className="material-icons text-green-500 text-6xl mb-4">check_circle</span>
                <h4 className="text-xl">Successfully Submitted!</h4>
                <p className="text-center my-3">Thank you for reaching out. Our team will review your enquiry and get back to you promptly.</p>
              </div>
            ) : (
              <Form>
                <div>
                  <div className="section-0" style={{ display: activeSection === 0 ? "block" : "none" }}>
                    <ContactDetails />
                  </div>
                  <div className="section-1" style={{ display: activeSection === 1 ? "block" : "none" }}>
                    <CompanyDetails />
                  </div>
                  <div className="section-2" style={{ display: activeSection === 2 ? "block" : "none" }}>
                    <JobDetails />
                  </div>
                  <div className="flex flex-row my-4 h-12">
                    <img src={ContactImageOne} alt="Contact Image One" className="w-9 md:w-12" />
                    <div className={`${activeSection > 0 ? "bg-violet-900" : "bg-white"} grow h-1 my-auto`}></div>
                    <img src={ContactImageTwo} alt="Contact Image One" className={`${activeSection > 0 ? "" : "opacity-50"} w-9 md:w-12`} />
                    <div className={`${activeSection > 1 ? "bg-violet-900" : "bg-white"} grow h-1 my-auto`}></div>
                    <img src={ContactImageThree} alt="Contact Image One" className={`${activeSection > 1 ? "" : "opacity-50"} w-9 md:w-12`} />
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
                        if (isValid || activeSection === 2) {
                          setActiveSection((prev) => Math.min(2, prev + 1));
                        }
                      }}
                      className={`${(activeSection === 2 && "hidden") || ""} ms-auto bg-violet-900 hover:bg-violet-600 hover:text-white text-white py-2 px-4 rounded `}
                    >
                      Next
                    </button>
                  </div>
                  <div className="text-center mt-5" style={{ display: activeSection === 2 ? "block" : "none" }}>
                    {formErrors && <div className="error error-message">{formErrors}</div>}
                    <button className={`bg-violet-900 hover:bg-violet-600 hover:text-white text-white py-2 px-4 rounded`} type="submit">
                      Submit
                    </button>
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

export default ClientForm;
