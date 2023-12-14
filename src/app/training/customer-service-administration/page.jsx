import BannerHalf from "@/components/Banner/BannerHalf";
import Section from "@/components/Sections/Section";
import { courses } from "@/components/data/training/courses";
import PageLink from "@/components/PageLink";
import TrainingCourse from "@/components/templates/TrainingCourse";

export const metadata = {
  title: `${courses[0].title} | Quack Recruitment & Training`,
  description: `${courses[0].description}`,
  keywords: ["Quack Recruitment & Training", "Training", "CSCS", "Construction Skills Certification Scheme"],
  authors: [{ name: "Alexander Barrett", url: "https://github.com/Anclagen" }],
};

const CustomerServiceAdministrationPage = () => {
  const course = courses[0];

  return (
    <>
      <BannerHalf title={course.banner} slogan={course.description} imgSrc={course.bannerImage} imgAlt={course.bannerImageAlt} position={course.bannerPosition} />
      <Section bgColor="bg-gray-50">
        <TrainingCourse course={course} />
      </Section>
    </>
  );
};

export default CustomerServiceAdministrationPage;
