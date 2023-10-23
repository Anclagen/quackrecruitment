import FormikField from "../../../Formik/FormikField";
import FormikYesNoDetails from "../../../Formik/FormikYesNoDetails";

const WorkAndDisabilites = () => {
  return (
    <div className="flex flex-col">
      <div className="md:flex md:flex-row gap-6 w-full">
        <div className="md:w-1/2">
          <FormikField
            label="Salary Type*"
            type="select"
            id="salary-type"
            width="w-40"
            options={[
              { value: "Annual", label: "Annual" },
              { value: "Hourly", label: "Hourly" },
            ]}
          />
        </div>

        <div className=" md:w-1/2">
          <FormikField label="Desired Salary/Hourly Rate (£)*" type="number" id="salary-value" placeholder="50000" />
        </div>
      </div>

      <div>
        <FormikYesNoDetails
          name="specific-role"
          question="Are you appling for a specific role?*"
          detailsLabel="If yes, please state the job and location.*"
          placeholder="Warehouse Operatives, Stevenage"
        />
      </div>

      <div className="mt-1">
        <FormikField label="What means of transport do you have?*" type="text" id="transport" placeholder="Car, bike, train...." />
      </div>

      <div>
        <FormikYesNoDetails name="disabilities" question="Do You Have Any Disabilities?*" detailsLabel="Please give details of your disabilities*" placeholder="" />
      </div>

      {/* NI number */}
      <div className="h-20 sm:w-1/2 mt-1">
        <FormikField label="National Insurance Number*" type="text" id="ni-number" placeholder="QQ123456C" />
      </div>

      {/* Share Code */}
      <p className="mt-2">If you have a foreign passport, BRP, visa. A sharecode is required.</p>
      <div className="h-20 sm:w-1/2">
        <FormikField label="Share Code" type="text" id="share-code" placeholder="123456789" />
      </div>
    </div>
  );
};

export default WorkAndDisabilites;
