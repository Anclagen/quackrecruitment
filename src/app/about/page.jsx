import BannerHome from "../../components/Banner/BannerHome";
import Section from "../../components/Sections/Section";
import FadeInSection from "../../components/Sections/FadeInSection/FadeInSection";
import CardSection from "../../components/Sections/CardSection/CardSection";
import { ProfileCard } from "../../components/Card/Card";
import FourImageStretch from "../../components/Sections/FourImageFeature/FourImageStretch";
import Head from "next/head";

const About = () => {
  return (
    <>
      <Head>
        <title>About</title>
        <meta name="description" content="A Dedicated & Experienced Team Of Experts" key="description" />
        {/* <meta name="keywords" content={keywords} key="keywords" /> */}
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
      </Head>
      <BannerHome title="About" slogan="A Dedicated & Experienced Team Of Experts" imgSrc="/pexels-olga-lioncat-7245326.jpg" imgAlt="Descriptive Image Alt Text" />
      <Section bgColor="bg-zinc-950 text-white">
        <FourImageStretch
          title="Who We Are"
          reverse={false}
          dark={true}
          images={["/pexels-yan-krukau-8867265.jpg", "/pexels-yan-krukau-8866793.jpg", "/pexels-yan-krukau-8867482.jpg", "/pexels-mart-production-7709219.jpg"]}
        >
          <div className="px-6 lg:p-0">
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
          </div>
        </FourImageStretch>
      </Section>
      <Section bgColor="bg-zinc-200">
        <FadeInSection
          title="Meet The Team"
          imageSrc="/pexels-yan-krukau-8867482.jpg"
          imageAlt="Description"
          text={[
            "At Quack Specialists Ltd, the backbone of our operations rests with our Senior Team. These dedicated professionals are often the driving force, working diligently behind the scenes, ensuring the seamless functioning of our business. Their responsibilities don't just end at overseeing daily operations. They're also proactive in addressing any queries, concerns, or challenges that arise, guaranteeing that our partners, clients, and candidates receive top-notch service at all times. ",
            "We believe in transparency and fostering trust, so we invite you to 'virtually meet' and get acquainted with some of the key members of our Senior Team below. Get to know the minds and faces that are committed to your success!",
          ]}
          reverse={true}
        />
        <h3 className="text-2xl font-semibold text-center mt-16 mb-10">Leadership Team</h3>
        <p className="mb-32 text-xl font-normal text-center text-gray-500 max-w-screen-lg px-10 mx-auto">
          We have selected our team not only based on industry knowledge but based on passion for success and wanting to go that extra mile to develop themselves, our clients & candidates.
        </p>
        <CardSection>
          <ProfileCard
            userImage="/lee-inskip.jpg"
            userName="Lee Inskip"
            userPosition="Chief Operations Officer"
            userDescription="Lee trained as a butcher in the '80s and worked in the hospitality trade before moving into recruitment. He has managed sites with up to 1200 workers across multiple locations, specializing in sectors like Industrial, Grounds Maintenance, Engineering, and Construction. Boasting a wealth of sector experience even before the recruitment industry gained its prominence, is deeply involved in the day-to-day operations of the business. With a background in operational roles at top global recruitment agencies, Lee effortlessly liaises with clients. His expertise ensures that our consultants are always aligned with client needs, facilitating successful placements."
            linkedin={"https://www.linkedin.com/in/lee-inskip-4b80bb59/"}
          />
          <ProfileCard
            userImage="/jamie-croall.jpg"
            userName="Jamie Croall"
            userPosition="Chief Financial Officer"
            userDescription="Jamie plays a pivotal role in the meticulous planning and management of our financial affairs, encompassing everything from ledgers and forecasts to projections. He leads a dedicated team focused on the critical aspects of our financial operations. This includes ensuring timely payments from our customers, settling accounts with our suppliers punctually, and most importantly, guaranteeing that our workers receive accurate and timely compensation."
            linkedin={"https://www.linkedin.com/in/jamie-croall-92459987/"}
          />
          {/* <ProfileCard
            userImage={uglyMugImage}
            userName="Carl Underwood"
            userPosition="Recruitment Consultant"
            userDescription="Carl worked in the Finance and Foreign Currency industry for 18 years before transitioning to recruitment. He has been specializing in industrial positions for the past 2 years, leveraging his extensive experience in the finance sector to provide top-notch recruitment services."
            linkedin={"#"}
            facebook={"#"}
          /> */}
        </CardSection>
      </Section>
    </>
  );
};

export default About;
