import FormikField from "../../../Formik/FormikField";

const ContactInformation = () => {
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
    </div>
  );
};

export default ContactInformation;
