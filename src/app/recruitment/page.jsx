import BannerHome from "@/components/Banner/BannerHome";
import BannerHalf from "@/components/Banner/BannerHalf";
import Section from "@/components/Sections/Section";
import FAQSection from "@/components/Sections/FAQSection";
import FadeInFreeTextSection from "@/components/Sections/FadeInFreeFormatSection";
import Link from "next/link";
import Flipper from "@/components/Sections/Flipper";
import PageLink from "@/components/PageLink";

export const metadata = {
  title: "Recruitment | Quack Recruitment & Training",
  description: "Check out our latest opportunities and find that dream job for you today!",
  keywords: ["Quack Group", "Quack Recruitment", "Jobs", "Training", "Recruiters", "Recruitment"],
  authors: [{ name: "Alexander Barrett", url: "https://github.com/Anclagen" }],
};

const Recruitment = () => {
  return (
    <>
      <div className="hidden bg-teal-900 bg-gray-900 bg-sky-900 bg-indigo-900 bg-red-900 bg-blue-900 bg-green-900 bg-sky-400 text-teal-900 text-gray-900 text-sky-900 text-indigo-900 text-red-900 text-blue-900 text-green-900 text-sky-400"></div>
      <main>
        <BannerHalf title="Recruitment" slogan="Turn Passion into Profession." imgSrc="images/banners/pexels-pixabay-162553.jpg" imgAlt="Descriptive Image Alt Text" links={[]} />
        <Section bgColor="bg-zinc-200">
          <FadeInFreeTextSection title="Our Comprehensive Recruitment Solutions" imageSrc="/images/interview-1.jpg" imageAlt="Description">
            <p className="mt-4 text-lg leading-6 max-w-screen-sm mx-auto">
              {`Welcome to Quack Recruitment & Training, your partner in redefining recruitment solutions for the modern business landscape. Whether you're seeking flexibility through our tailor-made
              Temporary Recruitment Services, strategic talent acquisition with our Permanent Recruitment offerings, or comprehensive workforce management via our On-Site Managed Services, we are
              committed to delivering excellence. Our approach combines swift, adaptable staffing solutions, industry-specific expertise, and cost-effective strategies to meet your unique workforce
              needs. With Quack Recruitment & Training, embark on a journey to optimize your recruitment process, ensuring you have the right talent in the right place at the right time.`}
            </p>
          </FadeInFreeTextSection>
          <div className="flex flex-wrap">
            <div className="md:w-1/2 xl:w-1/3 p-6  flex flex-col">
              <h3 className="mt-4 text-xl font-semibold leading-6">On-Site Managed Services Recruitment</h3>
              <p className="mt-4 text-lg leading-6 flex-grow">
                Transform your recruitment process with our On-Site Managed Services. Benefit from dedicated teams that integrate seamlessly with your HR department, offering scalable and
                cost-efficient staffing solutions. We specialize in tailoring recruitment strategies for continuous improvement and operational effectiveness, ensuring your workforce needs are met
                with precision and agility.
              </p>
              <Link
                prefetch={false}
                href="/recruitment/on-site-managed"
                className="mt-6 py-2 px-4 block bg-quackred-800 hover:bg-quackred-600 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg"
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
                prefetch={false}
                href="/recruitment/temporary"
                className="py-2 px-4 block bg-quackred-800 hover:bg-quackred-600 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg  mt-6"
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
                prefetch={false}
                href="/recruitment/permanent"
                className="py-2 px-4 block bg-quackred-800 hover:bg-quackred-600 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg mt-6"
              >
                Learn More
              </Link>
            </div>
          </div>
        </Section>
        <Section bgColor="bg-gray-50">
          <h2 className="text-4xl text-center mb-8">Our Sectors</h2>
          <div className="flex flex-wrap justify-center">
            <Flipper text="Administration" bgColor={"quackred"} textColor="white" imageSRC="/images/pexels-christina-morillo-1181524.jpg" imageAlt="Woman working at desk" />
            <Flipper text={"Customer Services"} textColor={"white"} bgColor={"quackred"} imageSRC={"/images/pexels-yan-krukau-8867482.jpg"} />
            <Flipper text={"Engineering"} textColor={"white"} bgColor={"quackred"} imageSRC={"/images/pexels-pixabay-159358.jpg"} />
            <Flipper text={"Food Processing & Packaging"} textColor={"white"} bgColor={"quackred"} imageSRC={"/images/pexels-mark-stebnicki-7163991.jpg"} />
            <Flipper text={"IT"} textColor={"white"} bgColor={"quackred"} imageSRC={"/images/pexels-andrea-piacquadio-840996.jpg"} />
            <Flipper text={"Logistics"} textColor={"white"} bgColor={"quackred"} imageSRC={"/images/pexels-tiger-lily-4487365.jpg"} />
            <Flipper text={"Sales"} textColor={"white"} bgColor={"quackred"} imageSRC={"/images/pexels-edmond-dantès-4343030.jpg"} />
          </div>
        </Section>
        <Section bgColor="bg-zinc-200">
          <FAQSection title="Recruitment FAQ" faqs={faqData} />
        </Section>
      </main>
    </>
  );
};

export default Recruitment;

const faqData = [
  {
    question: "What types of recruitment services do you offer?",
    answer:
      "We offer a comprehensive range of recruitment services including Temporary Staffing, Permanent Placement, and On-Site Managed Services. Each service is tailored to meet the unique needs of your business and industry.",
  },
  {
    question: "How do you ensure the quality of candidates?",
    answer:
      "Our rigorous candidate vetting process includes skill assessments, interviews, and reference checks to ensure that each candidate is not only skilled but also a good fit for your company's culture.",
  },
  {
    question: "Can you handle recruitment for specialized roles?",
    answer: "Absolutely. Our team has expertise in sourcing candidates for a wide range of specialized roles across various industries, ensuring we can meet your specific requirements.",
  },
  {
    question: "What is your approach to diversity and inclusion in recruitment?",
    answer:
      "We are committed to promoting diversity and inclusion in the workplace. Our recruitment strategies are designed to attract a diverse pool of candidates, ensuring equal opportunities for all.",
  },
  {
    question: "How do you adapt to the changing recruitment needs of a company?",
    answer:
      "Our services are highly adaptable, and we work closely with our clients to understand and rapidly respond to changing recruitment needs, whether it's scaling up quickly or finding niche skill sets.",
  },
];
