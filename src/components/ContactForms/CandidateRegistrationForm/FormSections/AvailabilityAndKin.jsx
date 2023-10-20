import { Field, ErrorMessage } from "formik";
import FormikField from "../../../Formik/FormikField";

const AvailabilityAndKin = () => (
  <div className="flex flex-col">
    <div>
      <h3 className="font-semibold text-lg text-center mb-3">Availability</h3>
      <label id="shifts" className="font-semibold">
        Time of day*:
      </label>
      <div role="group" aria-labelledby="checkbox-group" className="flex gap-2 flex-wrap">
        <div className="w-1/4">
          <label className="me-6 cursor-pointer">
            <Field type="checkbox" name="shifts" value=" AM" className="me-2" />
            AM
          </label>
        </div>
        <div className="w-1/4">
          <label className="me-6 cursor-pointer">
            <Field type="checkbox" name="shifts" value=" PM" className="me-2" />
            PM
          </label>
        </div>
        <div className="w-1/4">
          <label className="me-6 cursor-pointer">
            <Field type="checkbox" name="shifts" value=" Nights" className="me-2" />
            Nights
          </label>
        </div>
      </div>
      <div className="h-8">
        <ErrorMessage name="shifts" component="div" className="error-message w-full text-sm " />
      </div>
    </div>
    <div>
      <label id="days" className="font-semibold">
        Days*:
      </label>
      <div role="group" aria-labelledby="checkbox-group" className="flex gap-2 flex-wrap">
        <div className="w-1/4">
          <label className="me-6 cursor-pointer">
            <Field type="checkbox" name="days" value=" Mon" className="me-2" />
            Mon
          </label>
        </div>
        <div className="w-1/4">
          <label className="me-6 cursor-pointer ">
            <Field type="checkbox" name="days" value=" Tue" className="me-2" />
            Tue
          </label>
        </div>
        <div className="w-1/4">
          <label className="me-6 cursor-pointer ">
            <Field type="checkbox" name="days" value=" Wed" className="me-2" />
            Wed
          </label>
        </div>
        <div className="w-1/4">
          <label className="me-6 cursor-pointer">
            <Field type="checkbox" name="days" value=" Thu" className="me-2" />
            Thu
          </label>
        </div>
        <div className="w-1/4">
          <label className="me-6 cursor-pointer">
            <Field type="checkbox" name="days" value=" Fri" className="me-2" />
            Fri
          </label>
        </div>
        <div className="w-1/4">
          <label className="me-6 cursor-pointer">
            <Field type="checkbox" name="days" value=" Sat" className="me-2" />
            Sat
          </label>
        </div>
        <div className="w-1/4">
          <label className="me-6 cursor-pointer">
            <Field type="checkbox" name="days" value=" Sun" className="me-2" />
            Sun
          </label>
        </div>
      </div>
      <div className="h-8">
        <ErrorMessage name="days" component="div" className="error-message w-full text-sm " />
      </div>
    </div>
    <div>
      <FormikField label="Available from*" type="date" id="available-from" width="w-fit" />
    </div>

    <h3 className="font-semibold text-lg text-center mb-3 mt-3">Emergency Contact</h3>
    <div>
      <FormikField label="Name*" type="text" id="emergency-name" placeholder="Jane Smith" />
    </div>
    <div>
      <FormikField label="Relationship*" type="text" id="emergency-relationship" placeholder="Partner" />
    </div>
    <div>
      <FormikField label="Phone Number*" type="tel" id="emergency-phone-number" placeholder="+1234567890" />
    </div>
  </div>
);

export default AvailabilityAndKin;
