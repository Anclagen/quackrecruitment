import * as Yup from "yup";

export const validationSchema = Yup.object({
  "contact-name": Yup.string().required("Required"),
  email: Yup.string().email("Invalid email address").required("Required"),
  subject: Yup.string().required("Required"),
  message: Yup.string().required("Required"),
});
