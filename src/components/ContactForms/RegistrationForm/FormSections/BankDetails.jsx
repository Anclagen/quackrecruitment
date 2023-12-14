import FormikField from "../../../Formik/FormikField";

const BankDetails = () => (
  <div className="flex flex-col">
    <h3 className="font-semibold text-lg text-center mb-3">Bank Details</h3>
    <div className="sm:flex sm:flex-row gap-6 w-full">
      <div className="sm:w-1/2">
        <FormikField label="Sort code*" type="num" id="sort-code" width="w-40" placeholder="123456" />
      </div>
      <div className="sm:w-1/2">
        <FormikField label="Account Number*" type="num" id="account-number" placeholder="12345678" />
      </div>
    </div>
    <div>
      <FormikField label="Account Holders Name*" type="text" id="account-holder-name" placeholder="John Doe" />
    </div>
    <div>
      <FormikField label="Bank Branch*" type="text" id="bank-branch" placeholder="Example Bank" />
    </div>
    <h3 className="font-semibold text-lg text-center mb-3 mt-3">Emergency Contact</h3>
    <div>
      <FormikField label="Name*" type="text" id="emergency-name" placeholder="Jane Smith" />
    </div>
    <div>
      <FormikField label="Phone Number*" type="tel" id="emergency-phone-number" placeholder="+1234567890" />
    </div>
  </div>
);

export default BankDetails;
