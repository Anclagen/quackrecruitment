"use client";
import BannerHome from "../components/Banner/BannerHome";
import Section from "../components/Sections/Section";
import FadeInSection from "../components/Sections/FadeInSection/FadeInSection";
import { CardMinimalIconTop, TestimonialCard } from "../components/Card/Card";
import CardSection from "../components/Sections/CardSection/CardSection";
import Link from "next/link";
import { keywords } from "../components/data/keywords";
import { whyChooseUs } from "../components/data/home-data";
import { sectors } from "../components/data/sectors";
import FourImageFeature from "../components/Sections/FourImageFeature/FourImageFeature";
import CTASection from "../components/Sections/CTASection/CTASection";
import Head from "next/head";

const Home = () => {
  return (
    <>
      <div className="hidden bg-teal-900 bg-gray-900 bg-sky-900 bg-indigo-900 bg-red-900 bg-blue-900 bg-green-900 bg-sky-400 text-teal-900 text-gray-900 text-sky-900 text-indigo-900 text-red-900 text-blue-900 text-green-900 text-sky-400"></div>
      {/* <Head title="Home" description="Welcome to Quack Specialists, your local recruitment specialist." keywords={keywords} /> */}
      <Head>
        <title>Home</title>
        <meta name="description" content="Welcome to Quack Specialists, your local recruitment specialist" key="description" />
        <meta name="keywords" content={keywords} key="keywords" />
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
      </Head>
      <main>
        <BannerHome
          title="Quack Recruitment"
          slogan="Turn Passion into Profession."
          imgSrc="/pexels-olga-lioncat-7245326.jpg"
          imgAlt="Descriptive Image Alt Text"
          links={[
            { label: "Vacancies", path: "/vacancies", color: "violet" },
            { label: "Register", path: "/register", color: "violet" },
            { label: "Training", path: "/training", color: "violet" },
          ]}
        />
        <Section bgColor="bg-zinc-200">
          <FourImageFeature
            title="Our Services"
            details="QS Recruiters specializes in staffing solutions for Meat & Food Processing, Engineering & Construction, and Warehousing & Logistics sectors. With our rich experience, we expertly match candidates from entry to management levels across various specialized fields. Having originated in the Warehousing & Logistics sector, we've established a stellar reputation, recruiting for prestigious brands and ensuring rewarding partnerships between clients and candidates through our specialized recruitment approach."
            linkDetails={sectors}
          />
        </Section>
        <Section bgColor="bg-zinc-950 text-white">
          <FadeInSection
            title="Who We Are"
            imageSrc="/pexels-yan-krukau-8867482.jpg"
            imageAlt="Description"
            text={[
              "Quack Specialists are a dedicated team of expert consultants with specialisms in your sector, as opposed to a typical generic high street generalist recruiter.",
              "We focus on three very specific industries as this has become our niche, these industries are; Meat, Engineering & Construction and Warehouse & Logistics. Our team work collectively in making sure that every step of the process is seamless from on boarding to candidate attrition management.",
            ]}
            linkText="Learn More"
            linkHref="/about"
            dark={true}
          />
        </Section>
        <Section bgColor="bg-zinc-200">
          <CTASection
            titleBlack="Searching for the perfect job?"
            titlePurple="Discover roles that resonate with your expertise."
            text="Let us guide you towards a career that aligns with your skills and passions."
            linkText="Register Today"
            linkHref="/register-candidate"
            image="/tools.png"
            reverse={true}
          />
        </Section>
        <Section bgColor="bg-zinc-950 text-white">
          <h2 className="text-3xl text-center mb-10 font-semibold">Why Choose QS Recruitment?</h2>
          <CardSection>
            <CardMinimalIconTop title={whyChooseUs[0].title} icon={whyChooseUs[0].icon.name} color={`text-${whyChooseUs[0].icon.color} text-8xl`} textColor="text-white" text={whyChooseUs[0].text} />
            <CardMinimalIconTop title={whyChooseUs[1].title} icon={whyChooseUs[1].icon.name} color={`text-${whyChooseUs[1].icon.color} text-8xl`} textColor="text-white" text={whyChooseUs[1].text} />
            <CardMinimalIconTop title={whyChooseUs[2].title} icon={whyChooseUs[2].icon.name} color={`text-${whyChooseUs[2].icon.color} text-8xl`} textColor="text-white" text={whyChooseUs[2].text} />
            <CardMinimalIconTop title={whyChooseUs[3].title} icon={whyChooseUs[3].icon.name} color={`text-${whyChooseUs[3].icon.color} text-8xl`} textColor="text-white" text={whyChooseUs[3].text} />
            <CardMinimalIconTop title={whyChooseUs[4].title} icon={whyChooseUs[4].icon.name} color={`text-${whyChooseUs[4].icon.color} text-8xl`} textColor="text-white" text={whyChooseUs[4].text} />
          </CardSection>
          <div className="text-center mt-10">
            <Link
              href="/employers"
              className="py-4 px-6  bg-violet-900 hover:bg-violet-600 focus:ring-violet-500 focus:ring-offset-violet-200 text-white w-full transition ease-in duration-200  text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg  mx-5 mt-auto"
            >
              Our Services
            </Link>
          </div>
        </Section>
        {/* <Section bgColor="bg-zinc-200">
          <CTASection
            titleBlack="Got a position to fill ?"
            titlePurple="Get the skilled staff you need."
            text="QS Recruitment ensures you get the talent you require. We manage all aspects, granting you peace of mind that your roles are expertly filled."
            linkText="Enquire Today"
            linkHref="/register-employer"
            image="/hardhat.png"
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
