import BannerHalf from "@/components/Banner/BannerHalf";
import Section from "@/components/Sections/Section";
import ExpandableSection from "@/components/ExpandableSection/ExpandableSection";
import RecruitmentQuery from "@/components/ContactForms/RecruitmentQuery/RecruitmentQuery";
import recruitmentPages from "@/components/data/recruitmentPages";

export const metadata = {
  title: `${recruitmentPages[0].title} | Quack Recruitment`,
  description: "TBD",
  keywords: ["TBD"],
  authors: [{ name: "Alexander Barrett", url: "https://github.com/Anclagen" }],
};

const TemporaryRecruitment = () => {
  return (
    <>
      <div className="hidden bg-teal-900 bg-gray-900 bg-sky-900 bg-indigo-900 bg-red-900 bg-blue-900 bg-green-900 bg-sky-400 text-teal-900 text-gray-900 text-sky-900 text-indigo-900 text-red-900 text-blue-900 text-green-900 text-sky-400"></div>
      <main>
        <BannerHalf
          title="Temporary Recruitment"
          slogan="Flexible Talent Solutions, Tailored for Success"
          imgSrc="images/banners/pexels-pixabay-162553.jpg"
          imgAlt="Descriptive Image Alt Text"
          links={[]}
        />
        <Section bgColor="bg-zinc-200">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Why Choose Us</h2>
            <p className="mb-6">{recruitmentPages[0].introduction}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {recruitmentPages[0].sections.map((section, sectionIndex) => (
                <div key={sectionIndex} className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-semibold text-gray-700 mb-4">{section.heading}</h3>
                  <ul className="list-disc list-inside space-y-2">
                    {section.description.map((desc, descIndex) => (
                      <li key={descIndex} className="text-gray-600">
                        {desc}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </Section>
        <Section bgColor="bg-gray-50">
          <RecruitmentQuery />
        </Section>
        <Section bgColor="bg-gray-50">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Temporary Recruitment FAQ</h2>
          <div className="mx-auto max-w-screen-md">
            <ExpandableSection title="How quickly can you fill a temporary position?">
              <p>We pride ourselves on our swift response times. Depending on the specifics of the role and our current talent pool, we can often fill positions within a few days to a week.</p>
            </ExpandableSection>

            <ExpandableSection title="What types of roles can you provide temporary staff for?">
              <p>
                We cover a wide range of industries and roles, from administrative and customer service positions to specialized roles in IT, finance, and more. Our diverse talent pool ensures we can
                meet your varied temporary staffing needs.
              </p>
            </ExpandableSection>

            <ExpandableSection title="Are temporary staff vetted for qualifications and experience?">
              <p>
                Absolutely. Every candidate undergoes a thorough vetting process including skill assessments, reference checks, and interviews to ensure they meet our high standards and are a good fit
                for your specific requirements.
              </p>
            </ExpandableSection>

            <ExpandableSection title="Can we hire a temporary worker permanently if they're a good fit?">
              <p>
                Yes, many of our clients find great value in transitioning temporary workers to permanent roles. We facilitate this process to ensure a smooth transition that benefits both the
                employee and your organization.
              </p>
            </ExpandableSection>
          </div>
        </Section>
      </main>
    </>
  );
};

export default TemporaryRecruitment;
