import * as Yup from "yup";
import { subYears } from "date-fns";

const MAX_AGE = 80;
const MIN_AGE = 16;
const today = new Date();
const oldestDateOfBirthAllowed = subYears(today, MAX_AGE);
const youngestDateOfBirthAllowed = subYears(today, MIN_AGE);

export const personalValidationSchema = Yup.object().shape({
  title: Yup.string().required("Title is required"),
  "first-name": Yup.string().required("First name is required").max(50, "First name cannot exceed 50 characters"),
  "last-name": Yup.string().required("Last name is required").max(50, "Last name cannot exceed 50 characters"),
  "date-of-birth": Yup.date().required("Date of Birth is required").min(oldestDateOfBirthAllowed, `Too old to apply.`).max(youngestDateOfBirthAllowed, `Too young to apply.`),
  nationality: Yup.string().required("Nationality is required").max(50, "Nationality cannot exceed 50 characters"),
  gender: Yup.string().required("Gender is required").oneOf(["Male", "Female", "Other", "Prefer not to say"], "Please select a valid gender option"),
});

export const contactValidationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email format").required("Email is required"),
  "mobile-number": Yup.string()
    .required("Mobile number is required")
    .matches(/^[\d\s()+-]{7,20}$/, "Invalid mobile number format"),
  "landline-number": Yup.string().matches(/^[\d\s()+-]{7,20}$/, "Invalid landline number format"),
  "address-1": Yup.string().required("Address 1 is required").max(150, "Address is too long"),
  "address-2": Yup.string().max(150, "Address is too long"),
  "address-3": Yup.string().max(150, "Address is too long"),
  city: Yup.string()
    .required("City is required")
    .matches(/^[a-zA-Z\s]{1,100}$/, "Invalid city format"),
  postcode: Yup.string().required("Postcode is required").max(12, "Postcode is too long"),
});

export const jobAndMiscValidationSchema = Yup.object().shape({
  "salary-type": Yup.string().required("Salary type is required.").oneOf(["Salary", "Hourly"], "Select either Salary or Hourly"),
  "salary-value": Yup.number()
    .required("Salary value is required.")
    .positive("Salary value must be positive.")
    .integer("Salary value must be an integer.")
    .min(8, "Salary seems too low.")
    .max(1000000, "Salary seems too high."),
  "specific-role": Yup.string().required("Specific role is required.").max(100, "Role should not exceed 100 characters."),
  "job-title-location": Yup.string().required("Job title location is required.").max(150, "Location should not exceed 150 characters."),
  "have-transportation": Yup.bool(),
  "have-disability": Yup.string().nullable().max(100, "Disability description should not exceed 100 characters."),
  "national-insurance-number": Yup.string().length(9, "Must be 9 characters long"),
  "share-code": Yup.string().min(9, "Share code must be 9 digits."),
});

const cvFileValidation = Yup.mixed()
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
const imageAndDocumentFileValidation = Yup.mixed()
  .test("fileSize", "File too large. Max size is 4MB", (value) => {
    return value && value.size <= 4000000;
  })
  .test("fileType", "Unsupported Format. Upload PDFs or images only", (value) => {
    const SUPPORTED_FORMATS = ["application/pdf", "image/jpg", "image/jpeg", "image/png"];
    return value && SUPPORTED_FORMATS.includes(value.type);
  });

export const documentUploadValidationSchema = Yup.object().shape({
  "cv-upload": cvFileValidation.required("Required"),
  "id-upload": imageAndDocumentFileValidation.required("Required"),
  "proof-of-national-insurance-number": imageAndDocumentFileValidation,
  "proof-of-address": imageAndDocumentFileValidation,
  "additional-information": imageAndDocumentFileValidation,
});

export const allDetailsValidationSchema = Yup.object().shape({
  title: Yup.string().required("Title is required"),
  "first-name": Yup.string().required("First name is required").max(50, "First name cannot exceed 50 characters"),
  "last-name": Yup.string().required("Last name is required").max(50, "Last name cannot exceed 50 characters"),
  "date-of-birth": Yup.date().required("Date of birth is required").max(new Date(), "You cannot have a birthdate in the future"),
  nationality: Yup.string().required("Nationality is required").max(50, "Nationality cannot exceed 50 characters"),
  gender: Yup.string().required("Gender is required").oneOf(["Male", "Female", "Other", "Prefer not to say"], "Please select a valid gender option"),
  email: Yup.string().email("Invalid email format").required("Email is required"),
  "mobile-number": Yup.string()
    .required("Mobile number is required")
    .matches(/^[\d\s()+-]{7,20}$/, "Invalid mobile number format"),
  "landline-number": Yup.string().matches(/^[\d\s()+-]{7,20}$/, "Invalid landline number format"),
  "address-1": Yup.string().required("Address 1 is required").max(150, "Address is too long"),
  "address-2": Yup.string().max(150, "Address is too long"),
  "address-3": Yup.string().max(150, "Address is too long"),
  city: Yup.string()
    .required("City is required")
    .matches(/^[a-zA-Z\s]{1,100}$/, "Invalid city format"),
  postcode: Yup.string().required("Postcode is required").max(12, "Postcode is too long"),
  "salary-type": Yup.string().required("Salary type is required.").oneOf(["Salary", "Hourly"], "Select either Salary or Hourly"),
  "salary-value": Yup.number()
    .required("Salary value is required.")
    .positive("Salary value must be positive.")
    .integer("Salary value must be an integer.")
    .min(8, "Salary seems too low.")
    .max(1000000, "Salary seems too high."),
  "specific-role": Yup.string().required("Specific role is required.").max(100, "Role should not exceed 100 characters."),
  "job-title-location": Yup.string().required("Job title location is required.").max(150, "Location should not exceed 150 characters."),
  "have-transportation": Yup.bool(),
  "have-disability": Yup.string().nullable().max(100, "Disability description should not exceed 100 characters."),
  "national-insurance-number": Yup.string().length(9, "Must be 9 characters long"),
  "share-code": Yup.string().min(9, "Share code must be 9 digits."),
});
