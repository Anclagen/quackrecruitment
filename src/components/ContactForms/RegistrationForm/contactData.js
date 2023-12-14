export const initialState = {
  // Personal Details
  title: "",
  "first-name": "",
  "last-name": "",
  "date-of-birth": "",
  gender: "",
  ethnicity: "",
  email: "",
  "mobile-number": "",
  "landline-number": "",

  //Address Details
  "address-1": "",
  "address-2": "",
  "address-3": "",
  city: "",
  postcode: "",
  yearsAtAddress: "no",
  "previous-address-1": "",
  "previous-address-2": "",
  "previous-address-3": "",
  "previous-city": "",
  "previous-postcode": "",

  // Job Preferences & Work Eligibility
  "salary-type": "Annual",
  "salary-value": "",
  "specific-role": "no",
  "specific-role-info": "",
  transport: "",
  disabilities: "no",
  "disabilities-info": "",
  "ni-number": "",
  "share-code": "",

  // Bank Details
  "account-holder-name": "",
  "account-number": "",
  "sort-code": "",
  "bank-branch": "",
  // Emergency Contact Details
  "emergency-name": "",
  "emergency-phone-number": "",

  // Honey Pot
  botInput: "",
};

export const uploadInitialState = {
  cv: null,
  "proof-of-address": null,
  "proof-id": null,
  "proof-ni-number": null,
  "proof-share-code": null,
};
