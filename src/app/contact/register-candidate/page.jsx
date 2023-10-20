import Section from "@/components/Sections/Section";
import CandidateRegistrationForm from "@/components/ContactForms/CandidateRegistrationForm/CandidateRegistrationForm";

export const metadata = {
  title: "Register Candidate | Quack Recruitment",
  description: "Need to get in touch with us?",
  keywords: ["Quack Group", "Quack Recruitment", "Jobs", "Training", "Recruiters", "Recruitment"],
  authors: [{ name: "Alexander Barrett", url: "https://github.com/Anclagen" }],
};

const CandidateRegistration = () => {
  return (
    <>
      <div className="hidden bg-teal-900 bg-gray-900 bg-sky-900 bg-indigo-900 bg-red-900 bg-blue-900 bg-green-900 bg-sky-400 text-teal-900 text-gray-900 text-sky-900 text-indigo-900 text-red-900 text-blue-900 text-green-900 text-sky-400"></div>
      <main>
        <Section bgColor="bg-gray bg-opacity-10">
          <div className="flex flex-col items-center">
            <h2 className="text-2xl font-bold leading-8 text-black sm:text-3xl sm:leading-9 text-center mb-10">Register With Us</h2>
            <CandidateRegistrationForm />
          </div>
        </Section>
      </main>
    </>
  );
};

export default CandidateRegistration;
