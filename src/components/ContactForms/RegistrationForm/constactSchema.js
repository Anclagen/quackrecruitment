import * as Yup from "yup";
import { subYears } from "date-fns";

const MAX_AGE = 80;
const MIN_AGE = 16;
const today = new Date();
const oldestDateOfBirthAllowed = subYears(today, MAX_AGE);
const youngestDateOfBirthAllowed = subYears(today, MIN_AGE);
export const empty = Yup.object().shape({});

// Personal & Contact Details
export const personalSchema = Yup.object().shape({
  title: Yup.string().required("Title is required").oneOf(["Mr", "Mrs", "Miss", "Ms", "Mx", "Dr", "Other"], "Please select a valid gender option"),
  "first-name": Yup.string().required("First name is required").max(150, "First name cannot exceed 150 characters"),
  "middle-name": Yup.string().max(150, "Cannot exceed 150 characters"),
  "last-name": Yup.string().required("Last name is required").max(150, "Last name cannot exceed 150 characters"),
  "date-of-birth": Yup.date().required("Date of Birth is required").min(oldestDateOfBirthAllowed, `Too old to apply.`).max(youngestDateOfBirthAllowed, `Too young to apply.`),
  gender: Yup.string().required("Gender is required").oneOf(["Male", "Female", "Intersex", "Other", "Prefer not to say"], "Please select a valid gender option"),
  ethnicity: Yup.string().required("Enthnicity is required").max(150, "Enthnicity cannot exceed 150 characters"),
  email: Yup.string().email("Invalid email format").required("Email is required").max(150, "Enthnicity cannot exceed 150 characters"),
  "mobile-number": Yup.string()
    .required("Phone number is required")
    .matches(/^[\d\s()+-]{7,20}$/, "Invalid phone number format"),
  "landline-number": Yup.string().matches(/^[\d\s()+-]{7,20}$/, "Invalid phone number format"),
});

// Address Details
export const allAddressSchema = Yup.object().shape({
  "address-1": Yup.string().required("Address 1 is required").max(150, "Address is too long"),
  "address-2": Yup.string().max(150, "Address is too long"),
  "address-3": Yup.string().max(150, "Address is too long"),
  city: Yup.string()
    .required("City is required")
    .matches(/^[a-zA-Z\s]{1,100}$/, "Invalid city format"),
  postcode: Yup.string().required("Postcode is required").max(12, "Postcode is too long"),
  yearsAtAddress: Yup.string().required("This field is required."),
  "previous-address-1": Yup.string().when("yearsAtAddress", {
    is: "yes",
    then: () => Yup.string().required("Previous Address Line 1 is required.").max(150, "Address is too long"),
  }),
  "previous-address-2": Yup.string().max(150, "Address is too long"),
  "previous-address-3": Yup.string().max(150, "Address is too long"),
  "previous-city": Yup.string().when("yearsAtAddress", {
    is: "yes",
    then: () =>
      Yup.string()
        .required("City is required")
        .matches(/^[a-zA-Z\s]{1,100}$/, "Invalid city format"),
  }),
  "previous-postcode": Yup.string().when("yearsAtAddress", {
    is: "yes",
    then: () => Yup.string().required("Postcode is required").max(12, "Postcode is too long"),
  }),
});

// Job Preferences & Eligibility
export const workEligibilitySchema = Yup.object().shape({
  "salary-type": Yup.string().required("Salary type is required.").oneOf(["Annual", "Hourly"], "Select either Annual or Hourly"),
  "salary-value": Yup.number()
    .required("Salary value is required.")
    .positive("Salary value must be positive.")
    .integer("Salary value must be an integer.")
    .min(8, "Salary seems too low.")
    .max(1000000, "Salary seems too high."),
  "specific-role": Yup.string().required("Specific role is required.").oneOf(["yes", "no"], "Select either yes or no"),
  "specific-role-info": Yup.string().when("specific-role", { is: "yes", then: () => Yup.string().required("Specific role info is required").max(150, "Role should not exceed 150 characters.") }),
  transport: Yup.string().required("Transport is required.").max(150, "Transport should not exceed 150 characters."),
  disabilities: Yup.string().nullable().oneOf(["yes", "no"], "Select either yes or no"),
  "disabilities-info": Yup.string().when("disability", { is: "yes", then: () => Yup.string().required("Disability info is required").max(150, "Disability info should not exceed 150 characters.") }),
  "ni-number": Yup.string().max(9, "National Insurance number cannot exceed 9 characters").required("NI number is required"),
  "share-code": Yup.string().max(9, "Share code cannot exceed 9 characters"),
});

// Bank Details
export const bankDetailsSchema = Yup.object().shape({
  "account-holder-name": Yup.string().required("Account holder name is required").max(300, "Account holder name cannot exceed 300 characters"),
  "account-number": Yup.string().required("Account number is required").max(12, "Account number cannot exceed 12 characters"),
  "sort-code": Yup.string().required("Sort code is required").max(6, "Cannot exceed 6 characters"),
  "bank-branch": Yup.string().required("Bank branch is required").max(200, "Bank branch cannot exceed 200 characters"),
  "emergency-name": Yup.string().required("Emergency contact name is required").max(300, "Emergency contact name cannot exceed 300 characters"),
  "emergency-phone-number": Yup.string()
    .required("Emergency contact phone number is required")
    .matches(/^[\d\s()+-]{7,20}$/, "Invalid emergency contact phone number format"),
});

// export const allDetailsSchema = Yup.object().shape({
//   ...personalSchema.fields,
//   ...allAddressSchema.fields,
//   ...availabilitySchema.fields,
//   ...bankDetailsSchema.fields,
//   ...referenceDetailsSchema.fields,
//   ...additionalInformationSchema.fields,
// });

// File Uploads
const cvFile = Yup.mixed()
  .test("fileSize", `File too large. Max size is 4MB`, (value) => {
    console.log(value);
    return value && value.size <= 4000000;
  })
  .test("fileType", "Unsupported Format", (value) => {
    const SUPPORTED_FORMATS = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      "application/vnd.oasis.opendocument.text",
      "application/rtf",
      "text/plain",
    ];
    return value && SUPPORTED_FORMATS.includes(value.type);
  });

// Helper function to validate the file size and type for images and documents
const imageAndDocumentFile = Yup.mixed()
  .test("fileSize", "File too large. Max size is 4MB", (value) => {
    return value && value.size <= 4000000;
  })
  .test("fileType", "Unsupported Format. Upload PDFs or images only", (value) => {
    const SUPPORTED_FORMATS = ["application/pdf", "image/jpg", "image/jpeg", "image/png"];
    return value && SUPPORTED_FORMATS.includes(value.type);
  });

export const documentUploadSchema = Yup.object().shape({
  "cv-upload": cvFile.required("Required"),
  "id-upload": imageAndDocumentFile.required("Required"),
  "proof-of-national-insurance-number": imageAndDocumentFile,
  "proof-of-address": imageAndDocumentFile,
  "additional-information": imageAndDocumentFile,
});
