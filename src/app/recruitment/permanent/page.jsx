import BannerHalf from "@/components/Banner/BannerHalf";
import Section from "@/components/Sections/Section";
import ExpandableSection from "@/components/ExpandableSection/ExpandableSection";
import RecruitmentQuery from "@/components/ContactForms/RecruitmentQuery/RecruitmentQuery";
import recruitmentPages from "@/components/data/recruitmentPages";
import Link from "next/link";

export const metadata = {
  title: `${recruitmentPages[1].title} | Quack Recruitment & Training`,
  description: "TBD",
  keywords: ["TBD"],
  authors: [{ name: "Alexander Barrett", url: "https://github.com/Anclagen" }],
};

const PermanentRecruitment = () => {
  return (
    <>
      <div className="hidden bg-teal-900 bg-gray-900 bg-sky-900 bg-indigo-900 bg-red-900 bg-blue-900 bg-green-900 bg-sky-400 text-teal-900 text-gray-900 text-sky-900 text-indigo-900 text-red-900 text-blue-900 text-green-900 text-sky-400"></div>
      <main>
        <BannerHalf title="Permanent Recruitment" slogan="Secure Top Talent with Quack Recruitment." imgSrc="images/banners/pexels-pixabay-162553.jpg" imgAlt="Descriptive Image Alt Text" links={[]} />
        <Section bgColor="bg-zinc-200">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Why Choose Us</h2>
            <p className="mb-6">{recruitmentPages[1].introduction}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {recruitmentPages[1].sections.map((section, sectionIndex) => (
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
          <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Permanent Recruitment FAQ</h2>
          <div className="mx-auto max-w-screen-md">
            <ExpandableSection title="How does the permanent recruitment process work?">
              <p>
                Our permanent recruitment process starts with understanding your specific needs and requirements. We then utilize our extensive network and advanced search techniques to identify and
                shortlist candidates who not only match the skill requirements but also fit into your company culture.
              </p>
            </ExpandableSection>

            <ExpandableSection title="What industries do you specialize in for permanent recruitment?">
              <p>
                We specialize in a range of industries including but not limited to IT, healthcare, finance, engineering, and retail. Our team has deep expertise in sourcing candidates for various
                sectors, ensuring a perfect match for your industry-specific needs.
              </p>
            </ExpandableSection>

            <ExpandableSection title="How do you ensure the quality of candidates?">
              <p>
                We have a rigorous screening process that includes thorough interviews, skill assessments, and reference checks. This process helps us ensure that the candidates we propose are of the
                highest quality and meet your specific requirements.
              </p>
            </ExpandableSection>

            <ExpandableSection title="What is the typical timeframe for filling a permanent position?">
              <p>
                The timeframe can vary depending on the complexity of the role and specific requirements. On average, it can take anywhere from a few weeks to a couple of months. Our team works
                diligently to balance speed with thoroughness in finding the right candidate.
              </p>
            </ExpandableSection>

            <ExpandableSection title="What if the candidate doesn't work out?">
              <p>
                {` We stand by the quality of our placements. In case a candidate doesn't work out, we offer a replacement guarantee, subject to our terms and conditions. This ensures peace of mind and
                confidence in your hiring decisions.`}
              </p>
            </ExpandableSection>
          </div>
        </Section>
        <Section bgColor="bg-zinc-200">
          <RecruitmentQuery />
        </Section>
        <Section bgColor="bg-gray-50">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Check Out Our Other Services</h2>
          <div className="flex flex-wrap">
            <div className="md:w-1/2 xl:w-1/3 p-6  flex flex-col">
              <h3 className="mt-4 text-xl font-semibold leading-6">On-Site Managed Services Recruitment</h3>
              <p className="mt-4 text-lg leading-6 flex-grow">
                Transform your recruitment process with our On-Site Managed Services. Benefit from dedicated teams that integrate seamlessly with your HR department, offering scalable and
                cost-efficient staffing solutions. We specialize in tailoring recruitment strategies for continuous improvement and operational effectiveness, ensuring your workforce needs are met
                with precision and agility.
              </p>
              <Link
                href="/recruitment/on-site-managed"
                class="mt-6 py-2 px-4 block bg-quackred-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg"
              >
                Learn More
              </Link>
            </div>
            <div className="md:w-1/2 xl:w-1/3 p-6  flex flex-col">
              <h3 className="mt-4 text-xl font-semibold leading-6">Temporary Recruitment Services</h3>
              <p className="mt-4 text-lg leading-6 flex-grow">
                {`Elevate your workforce with Quack Recruitment & Training's Temporary Recruitment Services. Experience unparalleled flexibility with our customized staffing solutions, tailored to meet project demands and adapt to workload fluctuations. Benefit from swift placements, industry-specific expertise, and cost-effective workforce management, ensuring efficiency and quality in every hire.`}
              </p>
              <Link
                href="/recruitment/temporary"
                class="py-2 px-4 block bg-quackred-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg  mt-6"
              >
                Learn More
              </Link>
            </div>
            <div className="md:w-1/2 xl:w-1/3 p-6  flex flex-col">
              <h3 className="mt-4 text-xl font-semibold leading-6">Permanent Recruitment</h3>
              <p className="mt-4 text-lg leading-6 flex-grow">
                {
                  "Quack Recruitment & Training specializes in strategic permanent hiring. Our comprehensive candidate vetting and tailored recruitment strategies align with your company's culture and values, ensuring a perfect fit. Leverage our deep industry knowledge for high-quality, long-term placements, backed by our commitment to excellence and placement guarantees."
                }
              </p>
              <Link
                href="/recruitment/permanent"
                class="py-2 px-4 block bg-quackred-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg mt-6"
              >
                Learn More
              </Link>
            </div>
          </div>
        </Section>
      </main>
    </>
  );
};

export default PermanentRecruitment;
