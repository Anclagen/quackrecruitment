import BannerHome from "@/components/Banner/BannerHome";
import BannerHalf from "@/components/Banner/BannerHalf";
import Section from "@/components/Sections/Section";
import CTASection from "@/components/Sections/CTASection/CTASection";
import FadeInFreeTextSection from "@/components/Sections/FadeInFreeFormatSection/FadeInFreeFormateSection";
import Link from "next/link";

export const metadata = {
  title: "Recruitment | Quack Recruitment",
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
        <Section bgColor="bg-zinc-200 text-white">
          <FadeInFreeTextSection title="Our Comprehensive Recruitment Solutions" imageSrc="/images/interview-1.jpg" imageAlt="Description">
            <h3 className="mt-4 text-xl font-semibold leading-6">Assisted Advertising</h3>
            <p className="mt-4 text-lg leading-6">
              Quack Recruitment streamlines your job advertising across our platforms, widening your candidate reach. Tailor our services to either pre-screen candidates or receive a full candidate
              list for your internal hiring process. Never overlook top talent again.
            </p>
            <h3 className="mt-4 text-xl font-semibold leading-6">Temporary Recruitment</h3>
            <p className="mt-4 text-lg leading-6">
              Facing unexpected staffing needs? Quack Recruitment has you covered. From sudden departures to short-term projects, we alleviate the challenges of hiring temporary staff, ensuring you
              have the right talent when needed.
            </p>
            <h3 className="mt-4 text-xl font-semibold leading-6">Permanent Recruitment</h3>
            <p className="mt-4 text-lg leading-6">
              {
                "Quack Recruitment simplifies your permanent hiring. For new roles or replacing crucial staff, we offer tailored solutions to find the perfect addition to your team. Share your requirements; we'll handle the rest."
              }
            </p>
          </FadeInFreeTextSection>
        </Section>
      </main>
    </>
  );
};

export default Recruitment;
