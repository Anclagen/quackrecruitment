import FormikYesNoDetails from "../../../Formik/FormikYesNoDetails";
import { useFormikContext, ErrorMessage } from "formik";

const AdditionalInformation = () => {
  const { values, setFieldValue } = useFormikContext();

  return (
    <div className="flex flex-col">
      <h3 className="font-semibold mb-3">Medical Questionnaire</h3>
      <FormikYesNoDetails name="disabilities" question="Do You Have Any Disabilities?*" detailsLabel="Please give details of your disabilities*" />
      <FormikYesNoDetails
        name="medication"
        question="Are you under any medical advise/medication?*"
        detailsLabel="Please give details of your medical requirements and how this affect your work day*"
      />
      <FormikYesNoDetails name="reasonable-adjustments" question="Do you require an reasonable adjustments in the work place*" detailsLabel="Please give details of adjustments you require*" />

      <h3 className="font-semibold my-3">Criminal Convictions</h3>
      <p className="mb-3">Please read and confirm the following statements:</p>
      <ul className="list-disc ps-4">
        <li> I am not awaiting trial to receive a sentence.</li>
        <li> I am not awaiting sentence.</li>
        <li> I am not bound by any convictions.</li>
        <li> I have not been convicted of any criminal offence.</li>
      </ul>
      <label className="py-3 cursor-pointer">
        I confirm that the above statements are true at the time of completing this form.
        <input type="checkbox" name="no-convictions" className="w-5 h-5 ms-2" checked={values["no-convictions"]} onChange={() => setFieldValue("no-convictions", !values["no-convictions"])} />
      </label>
      <ErrorMessage name="no-convictions" component="div" className="text-red-600" />
    </div>
  );
};

export default AdditionalInformation;
