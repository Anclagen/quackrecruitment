import BannerHalf from "@/components/Banner/BannerHalf";
import Section from "@/components/Sections/Section";
import ExpandableSection from "@/components/ExpandableSection/ExpandableSection";
import RecruitmentQuery from "@/components/ContactForms/RecruitmentQuery/RecruitmentQuery";
import recruitmentPages from "@/components/data/recruitmentPages";

export const metadata = {
  title: `${recruitmentPages[2].title} | Quack Recruitment`,
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
            <p className="mb-6">{recruitmentPages[2].introduction}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {recruitmentPages[2].sections.map((section, sectionIndex) => (
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
          <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">FAQ</h2>
          <div className="mx-auto max-w-screen-md">
            <ExpandableSection title="What are On-Site Managed Services in recruitment?">
              <p>
                Our On-Site Managed Services involve placing a dedicated recruitment team within your organization. This team works closely with your HR department to manage all aspects of
                recruitment, from sourcing to onboarding, tailored specifically to your business needs.
              </p>
            </ExpandableSection>

            <ExpandableSection title="How does this service benefit my company?">
              <p>
                {`This service streamlines your recruitment process, reduces hiring times, and ensures a consistent supply of high-quality candidates. It's like having an expert recruitment department
                embedded within your company, dedicated solely to your staffing needs.`}
              </p>
            </ExpandableSection>

            <ExpandableSection title="Can the on-site team handle high-volume recruitment?">
              <p>
                Yes, our on-site teams are experienced in managing high-volume recruitment drives. They are equipped to handle rapid scaling, ensuring that your staffing levels meet your business
                demands at all times.
              </p>
            </ExpandableSection>

            <ExpandableSection title="Is this service suitable for all industries?">
              <p>
                Our on-site managed services are versatile and can be customized to suit a variety of industries. We adapt our recruitment strategies to align with the specific challenges and
                requirements of your industry.
              </p>
            </ExpandableSection>

            <ExpandableSection title="How does the integration with our existing HR processes work?">
              <p>
                We begin with a thorough analysis of your current HR processes, then seamlessly integrate our team to complement and enhance these processes. Our aim is to work in harmony with your
                existing HR framework while bringing in our expertise and efficiency.
              </p>
            </ExpandableSection>
          </div>
        </Section>
      </main>
    </>
  );
};

export default TemporaryRecruitment;
