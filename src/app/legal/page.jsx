import BannerHome from "../../components/Banner/BannerHome";
import Section from "../../components/Sections/Section";
import CardSection from "../../components/Sections/CardSection/CardSection";
import { ProfileCard } from "../../components/Card/Card";
import FourImageStretch from "../../components/Sections/FourImageFeature/FourImageStretch";
import FadeInFreeTextSection from "@/components/Sections/FadeInFreeFormatSection/FadeInFreeFormateSection";

export const metadata = {
  title: "Legal | Quack Recruitment",
  description: "Learn about Quack Recruitment, who we are and what we can do for you.",
  keywords: ["Quack Group", "Quack Recruitment", "Jobs", "Training", "Recruiters", "Recruitment"],
  authors: [{ name: "Alexander Barrett", url: "https://github.com/Anclagen" }],
};

const Legal = () => {
  return (
    <>
      <BannerHome title="Legal" slogan="A Dedicated & Experienced Team Of Experts" imgSrc="images/banners/pexels-yan-krukau-7691705.jpg" imgAlt="Group opf people looking at a computer" />

      <Section bgColor="bg-zinc-200">
        <FadeInFreeTextSection title="Legal Notice" imageSrc="/images/pexels-yan-krukau-8867482.jpg" imageAlt="Description" reverse={true}>
          <p className="mt-4 text-lg leading-6">Name of Company: Quack Recruitment Ltd</p>
          <p className="mt-4 text-lg leading-6">Registered Office: Business & Technology Centre, Bessemer Drive, Stevenage, Herts, SG1 2DX</p>
          <p className="mt-4 text-lg leading-6">Email: hello@quackrecruitment.co.uk</p>
          <p className="mt-4 text-lg leading-6">Phone Number: 0333 577 0036</p>
          <p className="mt-4 text-lg leading-6">We are a GLAA License holder and our insurance levels are setup to support our clients needs as follows:</p>
          <ul className="mt-1 ms-4 list-disc">
            <li>Public Liability = £10m</li>
            <li>{"Employers' Liability = £10m"}</li>
            <li>Professional Indemnity = £10m </li>
          </ul>
        </FadeInFreeTextSection>
      </Section>
    </>
  );
};

export default Legal;
