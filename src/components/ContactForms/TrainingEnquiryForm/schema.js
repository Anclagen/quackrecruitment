import * as Yup from "yup";

export const validationSchema = Yup.object({
  traineeType: Yup.string().oneOf(["Company", "Individual", "Training Provider"], "Please select a valid training type").required("Training type selection is required"),

  company: Yup.string().when("traineeType", {
    is: (traineeType) => traineeType === "Company",
    then: () => Yup.string().required("Please provide a company name."),
    otherwise: () => Yup.string(),
  }),

  contactName: Yup.string().required("Contact name is required").max(150, "Must be 150 characters or less"),
  contactNumber: Yup.string()
    .required("Phone number is required")
    .matches(/^[\d\s()+-]{7,20}$/, "Invalid phone number format"),
  email: Yup.string().email("Invalid email address").required("Email is required").max(150, "Must be 150 characters or less"),

  courseInterest: Yup.string()
    .oneOf(["Food & Hygiene", "SIA", "Customer Service & Administration", "CSCS", "Forklift", "Welding"], "Please select a valid course")
    .required("Course selection is required"),
  multipleStudents: Yup.string(),
  "multipleStudents-info": Yup.string().when("multipleStudents", {
    is: "yes",
    then: () => Yup.string().required("Please provide additional information"),
    otherwise: () => Yup.string(),
  }),
  disabilities: Yup.string(),
  "disabilities-info": Yup.string().when("disabilities", {
    is: "yes",
    then: () => Yup.string().required("Please provide additional information"),
    otherwise: () => Yup.string(),
  }),

  furtherInformation: Yup.string().max(500, "Must be 500 characters or less"),
  botInput: Yup.string(),
});
