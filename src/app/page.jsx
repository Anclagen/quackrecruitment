import BannerHome from "../components/Banner/BannerHome";
import Section from "../components/Sections/Section";
import FadeInFreeTextSection from "@/components/Sections/FadeInFreeFormatSection";
import { CardMinimalIconTop, TestimonialCard } from "../components/Card";
import CardSection from "../components/Sections/CardSection";
import Link from "next/link";
import { keywords } from "../components/data/keywords";
import FourImageStretch from "@/components/Sections/FourImageFeature/FourImageStretch";
import CTASection from "../components/Sections/CTASection";
import Head from "next/head";
import PageLink from "@/components/PageLink";

export const metadata = {
  title: "Quack Recruitment",
  description: "Quack Recruitment, your local recruitment specialist.",
  keywords: ["Quack Group", "Quack Recruitment", "Jobs", "Training", "Recruiters", "Recruitment"],
  authors: [{ name: "Alexander Barrett", url: "https://github.com/Anclagen" }],
};

const Home = () => {
  return (
    <>
      <div className="hidden quackred bg-quackred-200 bg-quackred-800 bg-quackred-700 bg-quackred-950 bg-quackred-900 bg-quackred-500 bg-quackred-600 bg-teal-900 bg-gray-900 bg-sky-900 bg-indigo-900 bg-red-900 bg-blue-900 bg-green-900 bg-sky-400 text-teal-900 text-gray-900 text-sky-900 text-indigo-900 text-red-900 text-blue-900 text-green-900 text-sky-400"></div>
      {/* <Head title="Home" description="Welcome to Quack Specialists, your local recruitment specialist." keywords={keywords} /> */}
      <Head>
        <title>Home</title>
        <meta name="description" content="Welcome to Quack Specialists, your local recruitment specialist" key="description" />
        <meta name="keywords" content={keywords} key="keywords" />
      </Head>
      <main>
        <BannerHome
          title={`Quack \nRecruitment & Training`}
          slogan="Whether your looking to recruit, or train the best talent... we've got you covered!"
          imgSrc="images/banners/pexels-sevenstorm-juhaszimrus-443383.jpg"
          imgAlt="Descriptive Image Alt Text"
          links={[
            { label: "Recruitment", path: "/recruitment", color: "quackred" },
            { label: "Training", path: "/training", color: "quackred" },
          ]}
        />
        <Section bgColor="bg-zinc-50">
          <FourImageStretch
            title="Who Are We?"
            images={[
              { src: "/images/pexels-edmond-dantès-4343030.jpg", alt: "Office workers relaxing in lobby" },
              { src: "/images/pexels-kampus-production-8171221.jpg", alt: "Office workers in meeting room" },
              { src: "/images/pexels-yan-krukau-8867482.jpg", alt: "Call center workers posing for photo" },
              { src: "/images/pexels-mart-production-7709219.jpg", alt: "Office with works at desks." },
            ]}
          >
            <p className="mt-4 text-lg leading-6">
              {
                "Quack Recruitment: A force in the recruitment landscape. We've soared, partnering with both household giants and cherished local businesses. In our recent highlight, we managed over 400 temps for one major client, showcasing our range and capability. Whether you're a small business with 5 staff or a large-scale operation needing 400+ temps, we tailor to your needs. Our affiliations span top industry bodies, from warehouse & logistics to food and production. Our promise? Delivering with integrity, every step of the way."
              }
            </p>
            <p className="mt-4 text-lg leading-6 italic">Discover the Quack difference.</p>
            <div className="text-center my-10">
              <Link
                prefetch={false}
                className="py-4 px-6  bg-quackred-900 hover:bg-quackred-600 focus:ring-quackred-500 focus:ring-offset-quackred-200 text-white w-full transition ease-in duration-200  text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                href="/about"
              >
                Learn More
              </Link>
            </div>
          </FourImageStretch>
        </Section>
        <Section bgColor="bg-zinc-200">
          <CTASection
            titleBlack="Looking for a job?"
            titlePurple="Check out whats on offer."
            text="At Quack Recruitment & Training, we've curated job listings from across the UK to align with your passions and skills. Dive in and find that perfect role to elevate your career."
            linkText="Jobs"
            linkHref="/recruitment/listings"
            image="/images/hardhat.png"
          />
        </Section>
        <Section bgColor="bg-gray-50">
          <FadeInFreeTextSection title="Our Comprehensive Recruitment Solutions" imageSrc="/images/interview-1.jpg" imageAlt="Description">
            <p className="mt-4 text-lg leading-6">
              <b>On-Site Managed Services:</b> Benefit from dedicated teams that integrate seamlessly with your HR department, offering scalable and cost-efficient staffing solutions.
            </p>
            <p className="mt-4 text-lg leading-6">
              <b>Temporary Recruitment:</b>
              {" Got staffing emergencies? Quack's got you. Quick solutions for sudden needs, always the right talent."}
            </p>

            <p className="mt-4 text-lg leading-6">
              <b>Permanent Recruitment:</b> Simplify your long-term hires. Whether new roles or replacements, share your needs and let Quack do the rest.
            </p>

            <p className="mt-8 text-lg leading-6 italic">Discover more about how Quack can empower your hiring process.</p>
            <div className="text-center my-10">
              <PageLink href={"/recruitment"} label={"Recruitment"} />
            </div>
          </FadeInFreeTextSection>
        </Section>
        <Section bgColor="bg-zinc-200">
          <CTASection
            titleBlack="Searching for the perfect job?"
            titlePurple="Discover roles that resonate with your expertise."
            text="Let us guide you towards a career that aligns with your skills and passions."
            linkText="Register Today"
            linkHref="/contact/register"
            image="/images/tools.png"
            reverse={true}
          />
        </Section>
        <Section bgColor="bg-gray-50">
          <h2 className="text-3xl text-center mb-10 font-semibold">Why Choose Quack Recruitment?</h2>
          <CardSection>
            <CardMinimalIconTop
              title="Compliant Provider"
              icon="lock"
              color={`text-blue-600 text-8xl`}
              textColor="text-black"
              text="Licensed by GLAA, we prioritize regulatory adherence in every operation, ensuring ethical recruitment practices."
            />
            <CardMinimalIconTop
              title="Expert Team"
              icon="school"
              color={`text-indigo-600 text-8xl`}
              textColor="text-black"
              text="Our Senior Consultants aren’t just seasoned—they're specialists in niche fields, bringing top-tier expertise to every hire."
            />
            <CardMinimalIconTop
              title="Quality Guaranteed"
              icon="award_star"
              color={`text-yellow-600 text-8xl`}
              textColor="text-black"
              text="Dedicated to a seamless experience, our team is always on standby, ensuring support whenever you need."
            />
            <CardMinimalIconTop
              title="Tailored Solutions"
              icon="cut"
              color={`text-teal-600 text-8xl`}
              textColor="text-black"
              text="Every organization is unique. We offer customized recruitment models, catering to both small businesses and major corporations."
            />
            <CardMinimalIconTop
              title="Diverse Hiring Capabilities"
              icon="diversity_2"
              color={`text-green-600 text-8xl`}
              textColor="text-black"
              text="From role advertising to sudden staffing shifts or finding the ideal permanent hire, we turn your challenges into opportunities."
            />
            <CardMinimalIconTop
              title="Industry Affiliation"
              icon="share"
              color={`text-red-600 text-8xl`}
              textColor="text-black"
              text="Registered with leading industry affiliates, our credentials highlight our commitment to recruitment excellence."
            />
          </CardSection>
        </Section>
        <Section bgColor="bg-zinc-200">
          <FourImageStretch
            title="Unleash Your Potential with Our Training Programs"
            images={[
              { src: "images/pexels-christina-morillo-1181524.jpg", alt: "Woman sitting at desk" },
              { src: "images/pexels-movidagrafica-barcelona-1474993.jpg", alt: "Welder at work" },
              { src: "images/pexels-cottonbro-studio-3205737.jpg", alt: "Security camera on wall" },
              { src: "images/pexels-elevate-1267338.jpg", alt: "Forklift moving pallet in warehouse" },
            ]}
          >
            <p className="mt-4 text-lg leading-6">
              {
                "Embarking on a new career journey or looking to advance in your current role? Dive deep into our specialized training courses tailored for real-world challenges. From the dynamic environment of warehouse & logistics, the intricate tasks in admin & customer service, to the rigorous demands of CSCS and SIA security courses, we've got you covered."
              }
            </p>
            <p className="mt-4 text-lg leading-6">
              <b>Multiple Training Locations:</b>{" "}
              {"Our training centers are strategically located to cater to a diverse group of trainees. Whether you're from Walsall, Northampton, or Stevenage, there's a venue near you."}
            </p>
            <p className="mt-4 text-lg leading-6">
              <b>Certifications & Accreditations:</b>
              {" Our courses aren't just about learning; they're about achieving recognized certifications that boost your employability. Stay tuned for detailed insights on our accreditations!"}
            </p>
            <p className="mt-4 text-lg leading-6">
              <b>More Details Coming Soon:</b>
              {" We're in the process of fine-tuning our offerings. Check back soon for comprehensive course details, schedules, and more."}
            </p>
            <div className="text-center my-10">
              <PageLink href={"/training"} label={"Learn More"} />
            </div>
          </FourImageStretch>
        </Section>
        {/* <Section bgColor="bg-zinc-200">
          <CTASection
            titleBlack="Got a position to fill ?"
            titlePurple="Get the skilled staff you need."
            text="QS Recruitment ensures you get the talent you require. We manage all aspects, granting you peace of mind that your roles are expertly filled."
            linkText="Enquire Today"
            linkHref="/register-employer"
            image="/images/hardhat.png"
          />
        </Section> */}

        {/* Testimonials to be added  */}
        {/* <Section bgColor="bg-zinc-950 text-white">
          <h2 className="text-3xl text-center mb-10 font-semibold">What Our Clients Say</h2>
          <CardSection>
            <TestimonialCard
              userImage="/pexels-andrea-piacquadio-3778603.jpg"
              testimonialText="Working with Quack Specialists was an enlightening experience. They took the time to understand our company culture and delivered candidates that were not only skilled but also aligned with our values. Their thorough approach ensured we found the right fit every time."
              userName="Sarah Mitchell"
              userPosition="HR Manager, TechSolutions Inc."
            />
            <TestimonialCard
              userImage="/pexels-andrea-piacquadio-3778603.jpg"
              testimonialText="I've partnered with many recruitment agencies over the years, but the professionalism and precision of Quack Specialists stand out. They consistently matched us with top-tier talent, saving us countless hours in the hiring process."
              userName="David Alvarez"
              userPosition="COO, Innovate Enterprises"
            />
            <TestimonialCard
              userImage="/pexels-andrea-piacquadio-3778603.jpg"
              testimonialText="The team at Quack Specialists are truly recruitment experts. Their insights into the job market and understanding of our industry ensured that we got candidates who were ready to hit the ground running. A truly commendable service!"
              userName="Maya Lindstrom"
              userPosition="Director of Talent Acquisition, Nexus Group"
            />
          </CardSection>
        </Section> */}
      </main>
    </>
  );
};

export default Home;
