"use client";
import Section from "@/components/Sections/Section";
import { useRef } from "react";

const CandidateRegistrationFallback = () => {
  const contentRef = useRef(null);

  const handleSelectAll = () => {
    if (contentRef.current) {
      const selection = window.getSelection();
      const range = document.createRange();
      range.selectNodeContents(contentRef.current);
      selection.removeAllRanges();
      selection.addRange(range);
    }
  };

  const handleCopyText = async () => {
    const textToCopy = `
    Candidate Registration

    Attachments
    Please attach the following documents before sending your registration details:
     - Proof of address*
     - ID* (some examples passport, full birth certificate, and BRP cards)
     - National insurance Number* (NI Card, P45, P60, HMRC Letter, Payslip with NI Number on)
     - Sharecode (If you have a foreign passport, BRP, visa. A sharecode is required.)
     - CV (optional)
    
    Personal Details
    Title*: 
    First Name*: 
    Middle Name:
    Last Name*: 
    Date of Birth* (yyyy-mm-dd): 
    Gender*: 
    Ethnicity*:
    National Insurance number*: 
    Sharecode (If you have a foreign passport, BRP, visa. A sharecode is required): 
    Email*: 
    Mobile Number*: 
    Landline Number: 
    
    Address Details
    address*:
    if you have lived at your current address for less than 5 years please provide previous address details below
    
    Job Preference & Work Eligibility
    Desired Salary/Hourly Rate (£)*:
    Are you appling for a specific role?* (if yes provide details)
    What means of transport do you have?*
    Do You Have Any Disabilities?* (if yes provide details)
    National Insurance Number*:
    Sharecode (If you have a foreign passport, BRP, visa. A sharecode is required):
    
    Bank Details
    Account Holder: 
    Account Number: 
    Sort Code: 
    Bank Branch: 
    
    Emergency Contact
    Name:
    Phone Number:
      `;

    try {
      await navigator.clipboard.writeText(textToCopy);
    } catch (err) {
      console.error("Failed to copy text. Please select the content manually and copy.", err);
    }
  };

  return (
    <>
      <main>
        <Section bgColor="bg-zinc-200">
          <div className="max-w-screen-md mx-auto">
            <div className="flex flex-col items-center">
              <h1 className="text-4xl text-center text-black mb-10">Candidate Registration Email Template</h1>
              <p> Please use the mail to link below to open you mail client and send the candidate registration email.</p>
              <a
                className="text-quackred-950 hover:text-quackred-600 font-semibold mt-1 text-xl"
                href="mailto:hello@quackrecruitment.co.uk?subject=Candidate%20Registration&amp;body=Please%20attach%20the%20following%20documents%20before%20sending%20your%20registration%20details:%0A
  - Proof%20of%20address*%0A
  - ID*%20(some%20examples%20passport,%20full%20birth%20certificate,%20and%20BRP%20cards)%0A
  - National%20insurance%20Number*%20(NI%20Card,%20P45,%20P60,%20HMRC%20Letter,%20Payslip%20with%20NI%20Number%20on)%0A
  - Sharecode%20(If%20you%20have%20a%20foreign%20passport,%20BRP,%20visa.%20A%20sharecode%20is%20required.)%0A
  - CV%20(optional)%0A%0A
  --Personal%20Details--%0A
  Title*:%20%0A
  First%20Name*:%20%0A
  Middle%20Name:%20%0A
  Last%20Name*:%20%0A
  Date%20of%20Birth*(yyyy-mm-dd):%20%0A
  Gender*:%20%0A
  Ethnicity*:%20%0A
  National%20Insurance%20number*:%20%0A
  Sharecode%20(If%20you%20have%20a%20foreign%20passport,%20BRP,%20visa.%20A%20sharecode%20is%20required):%20%0A
  Email*:%20%0A
  Mobile%20Number*:%20%0A
  Landline%20Number:%20%0A%0A
  --Address%20Details--%0A
  Address*:%20%0A
  If%20you%20have%20lived%20at%20your%20current%20address%20for%20less%20than%205%20years%20please%20provide%20previous%20address%20details%20below%0A%0A
  --Job%20Preference%20&%20Work%20Eligibility--%0A
  Desired%20Salary/Hourly%20Rate*(£):%20%0A
  Are%20you%20applying%20for%20a%20specific%20role?*:%20%0A
  What%20means%20of%20transport%20do%20you%20have?*:%20%0A
  Do%20You%20Have%20Any%20Disabilities?*:%20%0A%0A
  --Bank%20Details--%0A
  Account%20Holder:%20%0A
  Account%20Number:%20%0A
  Sort%20Code:%20%0A
  Bank%20Branch:%20%0A%0A
  --Emergency%20Contact--%0A
  Name:%20%0A
  Phone%20Number:%20%0A"
              >
                Send Candidate Registration Email
              </a>
            </div>
            <div className="mt-6 p-4 bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700">
              <p>{"If the button above doesn't open your email client:"}</p>
              <ul className="list-disc ml-6 mt-2">
                <li>
                  Alternatively, you can copy the contents below, fill it out and manually send it to us at{" "}
                  <a href="mailto:hello@quackrecruitment.co.uk" className="underline">
                    hello@quackrecruitment.co.uk
                  </a>
                </li>
              </ul>
            </div>
            <div className="mt-6 p-4 bg-gray-100 rounded">
              <h2 className="text-lg font-medium mb-2">Copyable Email Content:</h2>
              <div className="mt-2 space-x-4">
                {/* Copy Button */}
                <button onClick={handleCopyText} className="inline-block bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-150">
                  Copy to Clipboard
                </button>

                {/* Select All Button */}
                <button onClick={handleSelectAll} className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-150">
                  Select All Content
                </button>
              </div>
              <pre ref={contentRef} className="w-full p-2 border rounded whitespace-pre-wrap break-words">
                {`
Candidate Registration

Attachments
Please attach the following documents before sending your registration details:
 - Proof of address*
 - ID* (some examples passport, full birth certificate, and BRP cards)
 - National insurance Number* (NI Card, P45, P60, HMRC Letter, Payslip with NI Number on)
 - Sharecode (If you have a foreign passport, BRP, visa. A sharecode is required.)
 - CV (optional)

Personal Details
Title*: 
First Name*: 
Middle Name:
Last Name*: 
Date of Birth* (yyyy-mm-dd): 
Gender*: 
Ethnicity*:
National Insurance number*: 
Sharecode (If you have a foreign passport, BRP, visa. A sharecode is required): 
Email*: 
Mobile Number*: 
Landline Number: 

Address Details
address*:
if you have lived at your current address for less than 5 years please provide previous address details below

Job Preference & Work Eligibility
Desired Salary/Hourly Rate (£)*:
Are you appling for a specific role?* (if yes provide details)
What means of transport do you have?*
Do You Have Any Disabilities?* (if yes provide details)
National Insurance Number*:
Sharecode (If you have a foreign passport, BRP, visa. A sharecode is required):

Bank Details
Account Holder: 
Account Number: 
Sort Code: 
Bank Branch: 

Emergency Contact
Name:
Phone Number:
                `}
              </pre>
            </div>
          </div>
        </Section>
      </main>
    </>
  );
};

export default CandidateRegistrationFallback;
