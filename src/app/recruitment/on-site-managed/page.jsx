import BannerHalf from "@/components/Banner/BannerHalf";
import Section from "@/components/Sections/Section";
import RecruitmentQuery from "@/components/ContactForms/RecruitmentQuery";
import recruitmentPages from "@/components/data/recruitment/recruitmentPages";
import OurServices from "@/components/templates/recruitment/OurServices";
import FAQSection from "@/components/Sections/FAQSection";
import { OnSiteFAQ } from "@/components/data/recruitment/recruitmentFAQ";

export const metadata = {
  title: `${recruitmentPages[2].title} | Quack Recruitment & Training`,
  description: "TBD",
  keywords: ["TBD"],
  authors: [{ name: "Alexander Barrett", url: "https://github.com/Anclagen" }],
};

const OnSiteManagedService = () => {
  return (
    <>
      <div className="hidden bg-teal-900 bg-gray-900 bg-sky-900 bg-indigo-900 bg-red-900 bg-blue-900 bg-green-900 bg-sky-400 text-teal-900 text-gray-900 text-sky-900 text-indigo-900 text-red-900 text-blue-900 text-green-900 text-sky-400"></div>
      <main>
        <BannerHalf
          title={recruitmentPages[2].title}
          slogan="Flexible Talent Solutions, Tailored for Success"
          imgSrc="/images/banners/construction-2578.jpg"
          imgAlt="Descriptive Image Alt Text"
          links={[]}
          position="center"
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
          <FAQSection title={"On-Site Managed Services FAQ"} faqs={OnSiteFAQ} />
        </Section>
        <Section bgColor="bg-zinc-200">
          <RecruitmentQuery />
        </Section>
        <Section bgColor="bg-gray-50">
          <OurServices />
        </Section>
      </main>
    </>
  );
};

export default OnSiteManagedService;
