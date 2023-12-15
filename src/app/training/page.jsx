import BannerHalf from "@/components/Banner/BannerHalf";
import Section from "@/components/Sections/Section";
import DetailsSection from "@/components/Sections/DetailsSection";
import { CourseCard } from "@/components/Card";
import { courses } from "@/components/data/training/courses";

export const metadata = {
  title: "Training | Quack Recruitment & Training",
  description: "Get the skills you need to succeed with Quack!",
  keywords: ["Quack Group", "Quack Recruitment", "Jobs", "Training", "Recruiters", "Recruitment"],
  authors: [{ name: "Alexander Barrett", url: "https://github.com/Anclagen" }],
};

function Training() {
  return (
    <>
      <BannerHalf title="Training" slogan="Skill Up, Stand Out!" imgSrc="/images/banners/training-banner.jpg" imgAlt="Descriptive Image Alt Text" position="center" />
      <Section bgColor="bg-white">
        <DetailsSection
          title={"We empower adults with essential skills through comprehensive training courses."}
          content={[
            "Our expert-led programs covers a vast array of courses, including, but not limited to: administration, customer service, CSCS, SIA, and food and hygiene.",
            "Given we are part of a group of companies, which includes a nationally recognised recruitment agency, we will also work with each individual learner to enable them to be able to bring their skills and expertise into the real world and apply their new found skills and qualifications to their own specific area.",
            "Explore our courses below and invest in your professional growth today!",
          ]}
          detailsTitle={"Here's why choosing our training services sets you on the path to success:"}
          details={[
            { title: "Expert Instructors", detail: "Learn from industry professionals with years of experience in their respective fields." },
            { title: "Customized Training", detail: "Tailored courses to meet your specific needs, ensuring you gain practical, applicable skills." },
            { title: "Industry-Recognized Certifications", detail: "Our courses provide certifications that are widely recognized, enhancing your employability." },
            { title: "Flexible Learning", detail: "Convenient schedules and a variety of learning formats to accommodate your busy lifestyle." },
          ]}
        />
      </Section>
      <Section bgColor="bg-gray-50">
        <h2 className="text-3xl text-center mb-10 font-semibold">Our Courses</h2>
        <div className="flex flex-wrap justify-center">
          {courses &&
            courses.map((course, index) => (
              <CourseCard
                key={index}
                title={course.title}
                description={course.description}
                points={course.whatYouLearn}
                enrollmentMessage={course.enrolmentMessage}
                price={course.price}
                locations={course.locations}
                link={course.link}
              />
            ))}
        </div>
      </Section>
    </>
  );
}

export default Training;
