import BannerHalf from "@/components/Banner/BannerHalf";
import Section from "../../components/Sections/Section";
import CardSection from "../../components/Sections/CardSection";
import { ProfileCard } from "../../components/Card";
import FourImageStretch from "../../components/Sections/FourImageFeature/FourImageStretch";
import FadeInFreeTextSection from "@/components/Sections/FadeInFreeFormatSection";

export const metadata = {
  title: "About | Quack Recruitment & Training",
  description: "Learn about Quack Recruitment, who we are and what we can do for you.",
  keywords: ["Quack Group", "Quack Recruitment", "Jobs", "Training", "Recruiters", "Recruitment"],
  authors: [{ name: "Alexander Barrett", url: "https://github.com/Anclagen" }],
};

const About = () => {
  return (
    <>
      <BannerHalf
        title="About"
        slogan="A Dedicated & Experienced Team Of Experts"
        imgSrc="/images/banners/pexels-yan-krukau-7691705.jpg"
        imgAlt="Group opf people looking at a computer"
        position="top"
      />
      <Section bgColor="bg-zinc-200">
        <FourImageStretch
          title="Who We Are"
          reverse={false}
          dark={false}
          images={[
            { src: "/images/pexels-yan-krukau-8867265.jpg", alt: "Office workers at their desks" },
            { src: "/images/pexels-yan-krukau-8866793.jpg", alt: "Team photo in the office" },
            { src: "/images/pexels-mart-production-7709219.jpg", alt: "Office workers at their desks" },
            { src: "/images/pexels-yan-krukau-8867482.jpg", alt: "another team photo in the office" },
          ]}
        >
          <div className="px-6 lg:p-0">
            <p className="mt-4 text-lg leading-6">
              Welcome to Quack Recruitment & Training, where our mission is to redefine excellence in talent acquisition and professional development. As a national recruitment agency, we specialise
              in catering to the diverse needs of the temporary, permanent, and managed services sectors. Our commitment to precision and understanding the unique requirements of each industry sets us
              apart.
            </p>
            <h3 className="mt-4 text-lg leading-6 font-semibold"> Recruitment Division</h3>
            <p className="mt-4 text-lg leading-6">
              {`Navigating the dynamic and ever changing landscapes of recruitment, we pride ourselves on sourcing the best candidates to meet your organisation's demands. Whether you're seeking
              temporary staff for project peaks, permanent team members, or comprehensive managed services, we tailor our approach to ensure a seamless fit with your company culture and objectives.`}
            </p>
            <h3 className="mt-4 text-lg leading-6 font-semibold"> Training Division</h3>
            <p className="mt-4 text-lg leading-6">
              {`At the core of our business, we have a dedicated Training Division committed to shaping the future workforce. Our comprehensive Level 3 courses cover key areas such as Administration &
              Customer Service, CSCS, SIA and many more. We believe in equipping individuals with the skills and knowledge needed to excel in their roles, fostering professional growth and
              contributing to the success of businesses.`}
            </p>
          </div>

          {/* <div className="px-6 lg:p-0">
            <p className="mt-4 text-lg leading-6">
              Quack Recruitment is an independently owned Recruitment Agency operating throughout the country and supporting candidates and clients throughout Hertfordshire, Bedfordshire,
              Buckinghamshire, Northamptonshire, Staffordshire, Derbyshire, Leicestershire, Nottinghamshire, Devon, and Lancashire.
            </p>
            <p className="mt-4 text-lg leading-6">
              At Quack Recruitment, we aim to standout above the competition. We do this through hard work, providing honest feedback, delivering on our promises, and tailoring our solution having
              analysed the requirements set out in front of us.
            </p>
            <p className="mt-4 text-lg leading-6">As an agency we cover a number of sectors, and we have consultants who are skilled in placing:</p>
            <ul className="mt-1 ms-4 list-disc">
              <li className="">Administration </li>
              <li className="">Customer Services </li>
              <li className="">Engineering </li>
              <li className="">Food Processing & Packaging </li>
              <li className="">IT</li>
              <li className="">Logistics </li>
              <li className="">Sales </li>
            </ul>
          </div> */}
        </FourImageStretch>
      </Section>
      <Section bgColor="bg-gray-50">
        <FadeInFreeTextSection title="Why Choose Quack Recruitment & Training?" imageSrc="/images/pexels-yan-krukau-8867482.jpg" imageAlt="Description" reverse={true}>
          <p className="mt-4 text-lg leading-6">
            <b>Holistic Solutions:</b> We go beyond recruitment, offering a holistic approach that includes talent acquisition and comprehensive training programs.
          </p>
          <p className="mt-4 text-lg leading-6">
            <b>Industry Insight:</b> Our experienced team understands the nuances of various industries, ensuring we match candidates with the right skills and cultural fit.
          </p>
          <p className="mt-4 text-lg leading-6">
            <b>Professional Development:</b> The success of our Training Division lies in empowering individuals to excel in their roles, contributing to the growth of both individuals and businesses.
          </p>
          <p className="mt-4 text-lg leading-6">
            <b>Tailored Services:</b>
            {` Whether you're a startup, a growing business, or an established enterprise, our services are customised to meet your specific needs.`}
          </p>
          <p className="mt-4 text-lg leading-6">
            Partner with Quack Recruitment & Training, for a strategic alliance that goes beyond conventional recruitment. Experience a journey where every placement is not just a transaction but a
            step towards a thriving and skilled workforce.
          </p>

          {/* <p className="mt-4 text-lg leading-6">
            Our client list makes for eclectic reading, from major high street names, well managed local operations, to recruitment agencies who are among the top 4 largest in Europe, supporting them
            on second tiered projects on a national basis.
          </p>
          <p className="mt-4 text-lg leading-6">
            Each client has a dedicated Account Manager who looks after the field their clients operate within, and allows a rapport to be developed, as well as a consistent experience!
          </p>
          <p className="mt-4 text-lg leading-6">We are a GLAA License holder and our insurance levels are setup to support our clients needs as follows:</p>
          <ul className="mt-1 ms-4 list-disc">
            <li>Public Liability = £10m</li>
            <li>{"Employers' Liability = £10m"}</li>
            <li>Professional Indemnity = £10m </li>
          </ul>
          <p className="mt-4 text-lg leading-6">To find out if we can help, get in touch with your Regional Business Development Manager who will be excited to hear about what you do!</p>
          <a href="mailto:sales@quackrecruitment.co.uk" className="mt-1 text-quackred-900 hover:underline">
            sales@quackrecruitment.co.uk
          </a> */}
        </FadeInFreeTextSection>
      </Section>
      {/* <Section bgColor="bg-zinc-950">
        <h3 className="text-2xl text-white font-semibold text-center mt-16 mb-10">Leadership Team</h3>
        <p className="mb-32 text-xl font-normal text-center text-gray-200 max-w-screen-lg px-10 mx-auto">
          We have selected our team not only based on industry knowledge but based on passion for success and wanting to go that extra mile to develop themselves, our clients & candidates.
        </p>
        <CardSection>
          <ProfileCard
            userImage="images/jamie-croall.jpg"
            userName="Jamie Croall"
            userPosition="Chief Financial Officer"
            userDescription="Jamie plays a pivotal role in the meticulous planning and management of our financial affairs, encompassing everything from ledgers and forecasts to projections. He leads a dedicated team focused on the critical aspects of our financial operations. This includes ensuring timely payments from our customers, settling accounts with our suppliers punctually, and most importantly, guaranteeing that our workers receive accurate and timely compensation."
            linkedin={"https://www.linkedin.com/in/jamie-croall-92459987/"}
          />
        </CardSection>
      </Section> */}
    </>
  );
};

export default About;
