import * as Yup from "yup";

export const validationSchema = Yup.object({
  "first-name": Yup.string().required("Required"),
  surname: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email address").required("Required"),
  telephone: Yup.string().required("Required"),
  "address-1": Yup.string().required("Required"),
  "address-2": Yup.string(),
  "address-3": Yup.string(),
  city: Yup.string().required("Required"),
  "post-code": Yup.string().required("Required"),
  "company-name": Yup.string().required("Required"),
  "company-reg-no": Yup.string(),
  "work-location": Yup.string().required("Required"),
  sector: Yup.string().required("Required"),
  skills: Yup.string().required("Required"),
  qualifications: Yup.string().required("Required"),
  "additional-info": Yup.string(),
});

export const validationSection1 = Yup.object({
  "first-name": Yup.string().required("Required"),
  surname: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email address").required("Required"),
  telephone: Yup.string().required("Required"),
});

export const validationSection2 = Yup.object({
  "address-1": Yup.string().required("Required"),
  "address-2": Yup.string(),
  "address-3": Yup.string(),
  city: Yup.string().required("Required"),
  "post-code": Yup.string().required("Required"),
  "company-name": Yup.string().required("Required"),
  "company-reg-no": Yup.string(),
});
