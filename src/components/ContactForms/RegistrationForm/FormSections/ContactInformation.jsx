import FormikField from "../../../Formik/FormikField";
import { useFormikContext } from "formik";

const ContactInformation = () => {
  const { values, setFieldValue } = useFormikContext();
  return (
    <div className="flex flex-col">
      <h4 className="font-semibold">Current Address:</h4>
      <div>
        <FormikField label="Address Line 1*" type="text" id="address-1" placeholder="123 Example Street" />
      </div>
      <div>
        <FormikField label="Address Line 2" type="text" id="address-2" />
      </div>
      <div>
        <FormikField label="Address Line 3" type="text" id="address-3" />
      </div>

      <div className="md:flex md:flex-row gap-6 w-full">
        <div className="h-20 md:w-1/2">
          <FormikField label="City*" type="text" id="city" placeholder="City" />
        </div>

        <div className="h-20 md:w-1/2">
          <FormikField label="Post Code*" type="text" id="postcode" placeholder="SW1W 0NY" />
        </div>
      </div>

      <div className="my-3">
        <span className="me-2">Have you lived at this address for less than 5 years?</span>
        <div className="mt-2 flex items-center space-x-3 gap-6">
          <label className="flex items-center cursor-pointer">
            <input
              type="radio"
              name="yearsAtAddress"
              value="yes"
              className="sr-only"
              checked={values.yearsAtAddress === "yes"}
              onChange={() => {
                setFieldValue("yearsAtAddress", "yes");
              }}
            />
            <span className={`w-6 h-6 mr-2 rounded-full border-2 ${values.yearsAtAddress === "yes" ? "bg-quackred-950 border-white" : "border-white"}`}></span>
            Yes
          </label>
          <label className="flex items-center cursor-pointer">
            <input
              type="radio"
              name="yearsAtAddress"
              value="no"
              className="sr-only"
              checked={values.yearsAtAddress === "no"}
              onChange={() => {
                setFieldValue("yearsAtAddress", "no");
              }}
            />
            <span className={`w-6 h-6 mr-2 rounded-full border-2 ${values.yearsAtAddress === "no" ? "bg-quackred-950 border-white" : "border-white"}`}></span>
            No
          </label>
        </div>
      </div>

      {values.yearsAtAddress === "yes" && (
        <>
          <h4 className="font-semibold">Previous Address:</h4>
          <div>
            <FormikField label="Address Line 1*" type="text" id="previous-address-1" />
          </div>
          <div>
            <FormikField label="Address Line 2" type="text" id="previous-address-2" />
          </div>
          <div>
            <FormikField label="Address Line 3" type="text" id="previous-address-3" />
          </div>

          <div className="md:flex md:flex-row gap-6 w-full">
            <div className="h-20 md:w-1/2">
              <FormikField label="City*" type="text" id="previous-city" />
            </div>

            <div className="h-20 md:w-1/2">
              <FormikField label="Post Code*" type="text" id="previous-postcode" />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ContactInformation;
