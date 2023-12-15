const Checklist = () => (
  <div>
    <p className="my-2">{"Before diving in, let’s ensure you have all necessary documents and information at your fingertips. Here's a checklist of what you'll be providing:"}</p>
    <h3>Essential Documents Checklist:</h3>
    <ul className="list-disc ms-4">
      <li>
        <b>CV:</b> A recent and updated copy.
      </li>
      <li>
        <b>Proof of Identification,</b> such as Passport, Full birth certificate, BRP (Biometric Residence Permit) cards
      </li>
      <li>
        <b>Proof of National Insurance Number,</b> such as a NI Card, P45, P60, HMRC Letter, Payslip with NI Number on
      </li>
      <li>
        <b>Sharecode (if applicable):</b> For non-UK nationals, a sharecode will be needed to verify your eligibility to work in the UK.{" "}
      </li>
      <li>
        <b>Proof of Address (last 5 years): </b>
        {"Utility bills, bank statements, or any official mail addressed to you. If you've moved within the last 5 years, have documents from previous addresses as well."}
      </li>
    </ul>
    <p className="my-2">These should each be in a PDF, jpeg, jpg or png format and no larger than 3MB in size.</p>
    <h3 className="my-2"> Additional Information:</h3>
    <ul className="list-disc ms-4">
      <li>
        <b>Personal Details:</b> Full name, date of birth, gender, and contact details.
      </li>
      <li>
        <b>Address History:</b> Details for the past 5 years if your current residency is less than that.
      </li>
      <li>
        <b>Professional Details:</b> Desired hourly rate or annual salary, specific role application (if any).
      </li>
      <li>
        <b>Other Personal Questions: </b>Method of transportation, disability status, ethnicity, etc.
      </li>
      <li>
        <b>Emergency Contacts: </b>
        {"Your next of kin's name and contact number."}
      </li>
      <li>
        <b>Banking Details:</b> {" Your bank's name, account name, sort code, and account number."}
      </li>
    </ul>
    <p className="my-2">{"Once you've gathered all the required items, proceed to complete the form. If you encounter any challenges, our support team is here to assist you."}</p>
  </div>
);

export default Checklist;
