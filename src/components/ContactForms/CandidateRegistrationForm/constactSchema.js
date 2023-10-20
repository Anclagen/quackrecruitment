import * as Yup from "yup";
import { subYears } from "date-fns";

const MAX_AGE = 80;
const MIN_AGE = 16;
const today = new Date();
const oldestDateOfBirthAllowed = subYears(today, MAX_AGE);
const youngestDateOfBirthAllowed = subYears(today, MIN_AGE);

// Personal & Contact Details
export const personalSchema = Yup.object().shape({
  title: Yup.string().required("Title is required").oneOf(["Mr", "Mrs", "Miss", "Ms", "Mx", "Dr", "Other"], "Please select a valid gender option"),
  "first-name": Yup.string().required("First name is required").max(150, "First name cannot exceed 150 characters"),
  "last-name": Yup.string().required("Last name is required").max(150, "Last name cannot exceed 150 characters"),
  "date-of-birth": Yup.date().required("Date of Birth is required").min(oldestDateOfBirthAllowed, `Too old to apply.`).max(youngestDateOfBirthAllowed, `Too young to apply.`),
  gender: Yup.string().required("Gender is required").oneOf(["Male", "Female", "Intersex", "Other", "Prefer not to say"], "Please select a valid gender option"),
  email: Yup.string().email("Invalid email format").required("Email is required"),
  "phone-number": Yup.string()
    .required("Phone number is required")
    .matches(/^[\d\s()+-]{7,20}$/, "Invalid phone number format"),
  "ni-number": Yup.string().max(9, "National Insurance number cannot exceed 9 characters").required("National Insurance number is required"),
  "share-code": Yup.string().max(9, "Share code cannot exceed 9 characters").required("Share code is required"),
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
});

// Availability & Emergency Contact Details
export const availabilitySchema = Yup.object().shape({
  shifts: Yup.array().required("Shifts are required").min(1, "Shifts are required"),
  days: Yup.array().required("Days are required").min(1, "Days are required"),
  "available-from": Yup.date().required("Available from date is required").min(new Date(), "Cannot be in the past"),
  "emergency-name": Yup.string().required("Emergency contact name is required").max(300, "Emergency contact name cannot exceed 300 characters"),
  "emergency-relationship": Yup.string().required("Emergency contact relationship is required").max(150, "Emergency contact relationship cannot exceed 150 characters"),
  "emergency-phone-number": Yup.string()
    .required("Emergency contact phone number is required")
    .matches(/^[\d\s()+-]{7,20}$/, "Invalid emergency contact phone number format"),
});

// Bank Details
export const bankDetailsSchema = Yup.object().shape({
  "account-holder-name": Yup.string().required("Account holder name is required").max(300, "Account holder name cannot exceed 300 characters"),
  "account-number": Yup.string().required("Account number is required").max(12, "Account number cannot exceed 12 characters"),
  "sort-code": Yup.string().required("Sort code is required").max(6, "Cannot exceed 6 characters"),
  "bank-branch": Yup.string().required("Bank branch is required").max(200, "Bank branch cannot exceed 200 characters"),
});

// Reference Details
export const referenceDetailsSchema = Yup.object().shape({
  "ref-company-name": Yup.string().required("Company name is required").max(150, "Company name cannot exceed 150 characters"),
  "ref-employed-from": Yup.date().required("Employed from date is required").max(Yup.ref("ref-employed-to"), "Cannot be after end date").max(new Date(), "Cannot be in the future"),
  "ref-employed-to": Yup.date().required("Employed to date is required").min(Yup.ref("ref-employed-from"), "Cannot be before start date").max(new Date(), "Cannot be in the future"),
  "ref-reason-leaving": Yup.string().required("Reason for leaving is required").max(300, "Cannot exceed 300 characters"),
  "ref-name": Yup.string().required("Name is required").max(300, "Name cannot exceed 300 characters"),
  "ref-phone-number": Yup.string()
    .required("Phone number is required")
    .matches(/^[\d\s()+-]{7,20}$/, "Invalid phone number format"),
  "ref-email": Yup.string().email("Invalid email format").required("Email is required"),
});

// Additional Information
export const additionalInformationSchema = Yup.object().shape({
  "no-convictions": Yup.boolean().oneOf([true], "You must confirm that you have no convictions."),
  disabilities: Yup.string().required("This field is required."),
  "disabilities-info": Yup.string().when("disabilities", {
    is: "yes",
    then: () => Yup.string().required("disabilities info is required").max(400, "Cannot exceed 400 characters"),
  }),
  medication: Yup.string().required("This field is required."),
  "medication-info": Yup.string().when("medication", {
    is: "yes",
    then: () => Yup.string().required("Medication info is required").max(400, "Cannot exceed 400 characters"),
  }),
  "reasonable-adjustments": Yup.string().required("This field is required."),
  "reasonable-adjustments-info": Yup.string().when("reasonable-adjustments", {
    is: "yes",
    then: () => Yup.string().required("Reasonable adjustments info is required").max(400, "Cannot exceed 400 characters"),
  }),
});

export const allDetailsSchema = Yup.object().shape({
  ...personalSchema.fields,
  ...allAddressSchema.fields,
  ...availabilitySchema.fields,
  ...bankDetailsSchema.fields,
  ...referenceDetailsSchema.fields,
  ...additionalInformationSchema.fields,
});

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
