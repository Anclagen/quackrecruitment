import Section from "@/components/Sections/Section";
import ExpandableSection from "@/components/ExpandableSection/ExpandableSection";
import BannerHalf from "@/components/Banner/BannerHalf";

export const metadata = {
  title: "Privacy Policy | Quack Recruitment & Training",
  description: "Need to get in touch with us?",
  keywords: ["Quack Group", "Quack Recruitment", "Jobs", "Training", "Recruiters", "Recruitment"],
  authors: [{ name: "Alexander Barrett", url: "https://github.com/Anclagen" }],
};

const PrivacyPolicy = () => {
  return (
    <>
      <div className="hidden bg-teal-900 bg-gray-900 bg-sky-900 bg-indigo-900 bg-red-900 bg-blue-900 bg-green-900 bg-sky-400 text-teal-900 text-gray-900 text-sky-900 text-indigo-900 text-red-900 text-blue-900 text-green-900 text-sky-400"></div>
      <main>
        <BannerHalf title="Privacy Policy" slogan="Need to get in touch with us?" imgSrc="/images/banners/privacy-banner.jpg" imgAlt="Privacy Policy" position="top" />
        <Section bgColor="bg-zinc-200">
          <div className="mx-auto max-w-screen-md bg-zinc-50 p-3 px-3 sm:px-10 mb-5">
            <p className="my-2 italic">{"Quack Group Ltd – GDPR & Privacy Policy 2023"}</p>

            <p className="my-2">
              {
                "The purpose of this Privacy Notice is to tell you what information the Quack Group company (the “Company”), acting as a data controller and as listed in Annex 1, collects from you, how and when it may be collected and what happens to it. For this Privacy Policy, “we” and “us” refers to the Company. It applies to the personal data of our Candidates, Suppliers, clients, website users and Employees (see below for further explanation of these terms)."
              }
            </p>
            <p className="my-2">
              {
                "Personal Information is any personally identifiable information, such as your email address, name, home or work address, telephone number, bank details or tax codes, which can directly or indirectly identify you.  We refer to it as “Personal Information” here."
              }
            </p>
          </div>
          <div className="mx-auto max-w-screen-md">
            <ExpandableSection title="1. What information might we collect about you?">
              <p className="my-2">{"When you interact with us in the different ways described below, we may ask you for the following information:"}</p>
              <h3 className="text-xl font-semibold my-3">Candidates</h3>
              <p className="my-2">{"Personal and contact details (for example your name, email address, date of birth, gender);"}</p>
              <p className="my-2">{"Personal and contact details you give us when subscribing to receive emails, newsletters, or marketing information from us;"}</p>
              <p className="my-2">
                {
                  "During pre-assignment vetting we will request details from you including, your name, your work history, qualifications, contact details (such as email, telephone number and home address), your right to work documents, details required for equality and discrimination legislation checks and your personal preferences, choices, and requirements specific to requests or services;"
                }
              </p>
              <p className="my-2">
                {
                  "Details of your education, employment history, bank details and national insurance number, references, right to work and other information you tell us about yourself (e.g., the information contained within your CV) when you engage with us for the provision of services;"
                }
              </p>
              <p className="my-2">{"Information from social media activity (such as likes, shares and tweets) when you interact with us on social media;"}</p>
              <h3 className="text-xl font-semibold my-3">Job role requirements and location</h3>
              <p className="my-2">{"Additional information which you provide voluntarily and/or which we may ask from you to better understand you and your interests."}</p>
              <p className="my-2">
                {
                  "We may also collect Sensitive Personal Information about you (including details of your physical or mental health, racial or ethnic origin, criminal allegations or offences, trade union membership and/or other Sensitive Personal Information that you may choose to provide to us voluntarily from time to time. "
                }
              </p>

              <h3 className="text-xl font-semibold my-3">Suppliers</h3>
              <p className="my-2">
                {
                  "contact details to enable the provision of your services to us and the fulfilment of our contract obligations, this may include names, email addresses and telephone numbers; bank details and any other details required to enable payment for the services supplied."
                }
              </p>

              <h3 className="text-xl font-semibold my-3">Clients</h3>
              <p className="my-2">
                {
                  "Contact details of individuals at your organisation (such as names, telephone numbers and email addresses) to enable the provision of services and to facilitate our relationship with you, including relevant marketing. "
                }
              </p>

              <h3 className="text-xl font-semibold my-3">Website Users</h3>
              <p className="my-2">
                {
                  "Information we collect via cookies or similar technology stored on your device (find out more about cookies and how we use them in our Group Cookie Policy, your IP address; information from social media activity (such as likes, shares and tweets) when you interact with us on social media; information you provide if you report a problem with our website or service; job role requirements and location additional information which you provide voluntarily and/or which we may ask from you to better understand you and your interests. "
                }
              </p>

              <h3 className="text-xl font-semibold my-3">Employees</h3>
              <p className="my-2">{"Personal and contact details (for example your name, email address, date of birth, gender);"}</p>
              <p className="my-2">{"Personal and contact details of your emergency contact and referees;"}</p>
              <p className="my-2">
                {
                  "During pre-employment vetting we will request details from you including, your name, your work history, qualifications, contact details (such as email, telephone number and home address), your right to work documents, details required for equality and discrimination legislation checks and your personal preferences, choices, and requirements specific to requests or services;"
                }
              </p>
              <p className="my-2">
                {
                  "Details of your education, employment history, bank details and national insurance number, references, right to work and other information you tell us about yourself (e.g., the information contained within your CV);"
                }
              </p>
              <p className="my-2">{"Information from social media activity (such as likes, shares and tweets) when you interact with us on social media;"}</p>
              <p className="my-2">{"Additional information which you provide voluntarily and/or which we may ask from you to better understand you and your interests."}</p>
              <p className="my-2">
                {
                  "We may also collect Sensitive Personal Information about you (including details of your physical or mental health, racial or ethnic origin, criminal allegations or offences, trade union membership and/or other Sensitive Personal Information that you may choose to provide to us voluntarily from time to time. "
                }
              </p>

              <h3 className="text-xl font-semibold my-3">Referees and Emergency Contacts</h3>
              <p className="my-2">
                {
                  "We may also collect Sensitive Personal Information about you (including details of your physical or mental health, racial or ethnic origin, criminal allegations or offences, trade union membership and/or other Sensitive Personal Information that you may choose to provide to us voluntarily from time to time. "
                }
              </p>
            </ExpandableSection>

            <ExpandableSection title="2. How, when, and why do we collect your Personal Information?">
              <h3 className="text-xl font-semibold my-3">Candidates</h3>
              <p className="my-2 italic">{"How and when do we collect your Personal Information?"}</p>
              <p className="my-2">
                {
                  "We may collect your Personal Information when you apply for a role through us (or otherwise contact us from time to time) by: you responding to an advert on a job board or other website; by you directly contacting our business; by you filling in an application form in a branch when you speak to one of our consultants by telephone; or another agency or organisation passes your details to us."
                }
              </p>
              <p className="my-2 italic">{"Why do we collect your Personal Information?"}</p>
              <p className="my-2">
                {
                  "We collect and use your Personal Information because it is necessary to obtain certain details including Personal Information from you in the work-searching process and it is in our legitimate interests while operating our business, including: responding to your queries; providing work-finding services and/or information to you; transmitting Personal Information between our offices or functions for internal administrative purposes; setting you up on a work assignment with a client; hosting and maintaining our websites; ensuring network and information security; and/or carrying out direct marketing. However, we will only collect, use, and handle your Personal Information when: it is necessary for our legitimate interests in connection with carrying out our business, if, in each case, these interests are in line with applicable law and your legal rights; and/or where you have agreed; and/or where this is necessary for legal obligations which apply to us."
                }
              </p>
              <h3 className="text-xl font-semibold my-3">Employees</h3>
              <p className="my-2 italic">{"How and when do we collect your Personal Information?"}</p>
              <p className="my-2">
                {
                  "We collect your Personal Information when you come to work with us from: your application to us; and the information you provide when you complete the necessary forms required by our Human Resources team."
                }
              </p>
              <p className="my-2 italic">{"Why do we collect your Personal Information?"}</p>
              <p className="my-2">
                {
                  "We collect and use your Personal Information because it is necessary to obtain certain details including Personal Information from you as part of the employee/employer relationship: However, we will only collect, use and handle your Personal Information when: it is necessary for the performance of our contract with you where you have agreed; and/or where this is necessary for legal obligations which apply to us."
                }
              </p>
              <h3 className="text-xl font-semibold my-3">Suppliers and Clients</h3>
              <p className="my-2 italic">{"How and when do we collect your Personal Information?"}</p>
              <p className="my-2">{"We may collect your Personal Information when required during our business relationship with you."}</p>
              <p className="my-2 italic">{"Why do we collect your Personal Information?"}</p>
              <p className="my-2">
                {
                  "We collect and use your Personal Information because it is necessary to obtain certain details including Personal Information from you: to offer services to you or to obtain support and services from you; to perform certain legal obligations; in the performance of our contract with you; to help us to target appropriate marketing campaigns; in transmitting Personal Information between our offices or functions for internal. "
                }
              </p>
              <p className="my-2">
                {
                  "Administrative purposes; in hosting and maintaining our websites; in ensuring network and information security; and/or in carrying out direct marketing. However, we will only collect, use, and handle your Personal Information when: it is necessary for our legitimate interests in connection with carrying out our business, as long as, in each case, these interests are in line with applicable law and your legal rights; and/or where you have consented; in the performance of our contract with you; and/or it is necessary for legal obligations which apply to us."
                }
              </p>
            </ExpandableSection>

            <ExpandableSection title="3. How we use the Personal Information that you provide to us.">
              <p className="my-2">
                {
                  "Where necessary and appropriate for our business purposes and in accordance with regulatory requirements, and where if required we have an appropriate processing agreement in place, we may use your personal data for: The performance of our contracts with clients and suppliers; Third party professional advisers such as lawyers, auditors and accountants and third-party service providers and consultants performing technical services for us (such as IT support functions, testing and development work and external consultants);Where necessary in using technology systems and document storage; and. In using marketing services platforms. Website Cookies - We use cookies on our website. You can find out which cookies we use and why by viewing our Cookie Policy."
                }
              </p>
              <h3 className="text-xl font-semibold my-3">Candidates </h3>
              <p className="my-2">
                {
                  "We undertake the following processing of your Personal Information on the legal basis that it is necessary to perform the contract with you and to provide the services we have agreed to provide to you. Where we have not entered a contract with you, we may also carry out this processing because in that pre-contractual stage where we consider it is necessary in our legitimate business interests to deal with requests, enquiries or comments you have made to us. Submission of details to clients – If you register to apply for a particular role, request to be put forward for a role or if you have asked us to put you forward for suitable roles, we will share some of your personal details. Including your name, work history and qualifications with our clients offering potential roles which might be suitable for you. On-boarding for a work-assignment – If you are offered and accept a work assignment through us, we will need further Personal Information from you such as NI number, bank details, emergency contact details and some medical information to fulfil our statutory and contractual obligations to both you and our client. Reporting to clients and managing timesheets, payroll and work performance – We sometimes have to prepare reports for clients relating to the services provided by us for example reports on financial or administrative matters or compliance with legal requirements.  Such reports may contain your Personal Information such as your name, hours worked and pay rate.  In addition, we may need to manage submission of timesheets, payroll services and other Human Resourcing services such as managing your statutory rights and work appraisals for our clients, all of which would require use of your Personal Information. "
                }
              </p>

              <p className="my-2">
                {
                  "Other lawfully permitted processing – We may also use any Personal Information that you provide to us for example to other companies within the Quack Group or to employers or any other company who you ask us to approach on your behalf for work-searching purposes If you choose not to provide Personal Information requested by us, we may not be able to provide you with the services and/or information you have requested or otherwise fulfil the purpose(s) for which we have asked for the Personal Information, including placing you in a work-assignment. We will where possible anonymise or aggregate such data for reporting purposes. Pre-Assignment vetting – we collect your Personal Information which you provide to us when applying for a role or registering for our job-finding services to comply with our (and clients’) legal obligations regarding your right to work and any necessary qualifications for roles,. We may also process your Personal Information for this purpose where we consider it necessary for performance of the contract with you, or otherwise with your consent. We undertake the following processing of your Personal Information with your consent. "
                }
              </p>

              <p className="my-2">
                {
                  "Marketing – where legally permitted to do so where you have provided us with your contact details and have agreed to be contacted for marketing purposes, we may contact you by telephone or by post for marketing purposes relating to our services, our website, and/or to research opinion on proposed business developments. Your agreement to the use of your Personal Information for these purposes is optional and if you fail to provide your agreement, your use of our work-finding services will not be affected."
                }
              </p>
            </ExpandableSection>
            <ExpandableSection title="4. How and when do we share information with third parties?">
              <p className="my-2">
                {
                  "Some services that we provide require the involvement of third parties. We have carefully selected these third parties and taken steps to ensure that your Personal Information is adequately protected.  The third parties may include our clients, suppliers of IT services, pay-rolling services, or vetting services."
                }
              </p>
              <p className="my-2">
                {
                  "Where we employ third party companies or individuals to process Personal Information provided by us on our behalf for business functions, including (without limitation) IT support, hosting our data on cloud platforms, legal, accounting, audit, consulting and other professional service providers, and providers of other services related to our business."
                }
              </p>
              <p className="my-2">
                {
                  "Portions of our services may be provided by organisations with which we have a contractual relationship, including subcontractors, and, accordingly, your Personal Information may be disclosed to them. We only provide these organisations with the information that they need to be able to perform their services."
                }
              </p>
              <p className="my-2">{"We will have in place an agreement with our service providers which will restrict how they are able to process your Personal Information. "}</p>
              <p className="my-2">
                {
                  "We may also share your personal information where we reasonably believe that applicable law or regulation requires any personal data to be processed, for example with local tax authorities, immigration officials or for audit or other investigative purposes (including in connection with anticipated litigation)."
                }
              </p>
              <p className="my-2 italic">{"Sharing within the Quack Group and to Service Providers"}</p>
              <p className="my-2">
                {
                  "The Personal Information you provide to us is collected by Quack Group plc or one of its subsidiaries as listed at Annex 1 below. However, where we are legally permitted to do so in accordance with this Privacy Policy, we may transfer your Personal Information between and to other functions or offices within the same corporate group for the purposes set out above."
                }
              </p>

              <h3 className="text-xl font-semibold my-3">International Transfers of your Personal Information</h3>
              <p className="my-2 italic">{"Sharing with other third parties"}</p>

              <p className="my-2">
                {
                  "We may also provide your information to other third parties such as regulators and law enforcement agencies, where we are required by law to do so, where necessary for the purposes of preventing and detecting fraud, other criminal offences and/or to ensure network and information security."
                }
              </p>
            </ExpandableSection>
            <ExpandableSection title="5. How long do we store Personal Information for?">
              <p className="my-2">
                {
                  "It is our policy to retain your Personal Information only for the length of time required for the specific purpose or purposes for which it was collected, and this is set out in Annex B. However, on occasion we may be obliged to store some data for a longer time, for example, where a longer time is required by applicable laws. In this case, we will ensure that your Personal Data will continue to be treated in accordance with this Privacy Policy."
                }
              </p>
              <p className="my-2">
                {
                  "We support Candidates over many years and potentially throughout their careers and the reason for which we retain the Personal Data can be an ongoing purpose.  We also work with Suppliers and Clients over long periods of time and retain Personal Data as part of these relationships.   If we have not had meaningful contact with you for an extended period, we will delete Personal Data."
                }
              </p>
            </ExpandableSection>
            <ExpandableSection title="6. Security and Confidentiality">
              <p className="my-2">
                {
                  "We employ appropriate security measures to help protect your Personal Information and guard against access by unauthorised persons. Information storage is on secure computers in a secure environment, or in secure, locked storage in the case of hard copy information.  The information is encrypted wherever possible and we undergo periodic reviews of our security policies and procedures to ensure that our systems is secure and protected. However, the transmission of information via the Internet is not completely secure so we cannot guarantee the security of your information when it is transmitted to our website or from third party websites such as job boards. "
                }
              </p>
              <p className="my-2">
                {
                  "We acknowledge that the information you provide may be confidential. We do not sell, rent, distribute, or otherwise make Personal Information commercially available to any third party, but we may share information with our service providers for the purposes set out in this Privacy Policy. We will keep your information confidential and protect it in accordance with our Privacy Policy and all applicable laws."
                }
              </p>
            </ExpandableSection>
            <ExpandableSection title="7. Your rights">
              <p className="my-2">{"It is important to us that you are in control of your own information. As a result, you have the following controls:"}</p>
              <p className="my-2">
                {
                  "Right of Access: You may request access to or copies of the Personal Information that we hold about you. If you would like to exercise this right, please contact us at hello@quackrecruitment.co.uk or the address below;"
                }
              </p>
              <p className="my-2">
                {
                  "Right to Rectification: If you believe that any information, we have about you is incorrect or incomplete, please contact us hello@quackrecruitment.co.uk as soon as possible. We will take steps to seek to correct or update any information if we are satisfied that the information we hold is inaccurate."
                }
              </p>
              <p className="my-2">
                {
                  "Right to Erasure: You may request that your Personal Information be deleted, where it is no longer necessary for the purposes for which it is being processed and provided there is no other lawful basis for which we may continue to process such information. If we do delete your data we will generally assume you would prefer us to keep a note of your name on our register of individuals who would not prefer to be contacted and we do keep a record of names of those asking for their information to be erased. If you prefer us not to do this, you are free to say so;"
                }
              </p>
              <p className="my-2">
                {
                  "Right to Restrict Processing: You may request that we restrict the processing of your data in certain circumstances, for example if you are concerned about the accuracy of the data or how it is being used;"
                }
              </p>
              <p className="my-2">
                {
                  "Right to Object to Processing: To the extent we are processing your Personal Information to meet our legitimate interests (as set out above), you may object to the processing of your Personal Information by us. If we are unable to demonstrate our legitimate grounds for that processing, we will no longer process your Personal Information for those purposes;"
                }
              </p>
              <p className="my-2">{"Right to Withdraw Marketing Consent: You may withdraw your consent to receiving marketing contact at any time by emailing optout@quackrecruitment.co.uk"}</p>
              <p className="my-2">
                {
                  "Right of Data Portability: This only applies to information you have given us. You may have the right to request we transfer the information you gave us from one organisation to another or give it to you;"
                }
              </p>
              <p className="my-2">
                {
                  "Right not to be Subject to Automated Individual Decision-Making: You have the right not to be subject to a decision based solely on automated processing, including profiling, if such profiling produces a legal effect concerning you or similarly significantly affects you,"
                }
              </p>
              <p className="my-2">
                {`Right to Complain: If you are unhappy with the way that we have handled your data, you can make a complaint to the Information Commissioners Office (ICO) which is the UK authority responsible for data protection. Contact details are available online, or alternatively please ask us on `}
                <a className="text-quackred-950 hover:text-quackred-700 font-semibold" href="mailto:hello@quackrecruitment.co.uk">
                  hello@quackrecruitment.co.uk
                </a>
                {` for assistance.`}
              </p>
            </ExpandableSection>
            <ExpandableSection title="8. Updates to this Privacy Notice">
              <p className="my-2">
                {
                  "This Privacy Notice may be updated periodically to reflect changes in our privacy practices and legal updates.  We will indicate at the top of the notice, which is posted on our websites, when it was most recently updated."
                }
              </p>
            </ExpandableSection>
            <ExpandableSection title="9. Contact Us.">
              <p className="my-2">
                {"If you have any questions in relation to this Privacy Policy, or if you would like to contact us to exercise your rights as stated in this Privacy Policy, you may contact us at: "}
                <a className="text-quackred-950 hover:text-quackred-700 font-semibold" href="mailto:hello@quackrecruitment.co.uk">
                  hello@quackrecruitment.co.uk
                </a>
              </p>
            </ExpandableSection>
            <ExpandableSection title="10. Definitions">
              <p className="my-2">
                {
                  "Candidates – refers to applicants (and those subsequently engaged on temporary assignments, directly or indirectly, by the Company) for any roles advertised by or through the Company, whether permanent or temporary positions, whether as freelancers, contractors, flexible employees or through third parties including Suppliers; as well as people who have submitted a speculative CV to the Company. "
                }
              </p>
              <p className="my-2">{"Clients – covers organisations which engage with the Company for it to provide recruitment or other services."}</p>
              <p className="my-2">
                {
                  "Employees – includes employees engaged directly by Quack (or who have accepted an offer to be employed) as well as certain other workers engaged in the business of providing services to the Company.  This includes Company employees engaged to work on client premises under the terms of managed service agreements or equivalent."
                }
              </p>
              <p className="my-2">
                {
                  "Suppliers – covers supplier companies (including sole traders), vendors, umbrella companies, partnerships and limited company contractors who provide services to the Company including as sub-contractors.  Suppliers should ensure their employees and workers are made aware of the provisions of this Privacy Policy as applicable."
                }
              </p>
            </ExpandableSection>
          </div>
        </Section>
      </main>
    </>
  );
};

export default PrivacyPolicy;
