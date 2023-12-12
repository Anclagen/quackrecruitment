import BannerHalf from "@/components/Banner/BannerHalf";
import Section from "@/components/Sections/Section";
import DetailsSection from "@/components/Sections/DetailsSection";
import { CourseCard } from "@/components/Card";

export const metadata = {
  title: "Training | Quack Recruitment & Training",
  description: "Get the skills you need to succeed with Quack!",
  keywords: ["Quack Group", "Quack Recruitment", "Jobs", "Training", "Recruiters", "Recruitment"],
  authors: [{ name: "Alexander Barrett", url: "https://github.com/Anclagen" }],
};

function Training() {
  return (
    <>
      <BannerHalf title="Training" slogan="Turn Passion into Profession." imgSrc="images/banners/pexels-sevenstorm-juhaszimrus-443383.jpg" imgAlt="Descriptive Image Alt Text" />
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
          {courses.map((course, index) => (
            <CourseCard
              key={index}
              title={course.title}
              description={course.description}
              points={course.points}
              enrollmentMessage={course.enrollmentMessage}
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

const courses = [
  {
    title: "Level 3 Customer Service & Administration",
    description: "Unlock the skills needed to excel in administrative roles. Our comprehensive administration training covers:",
    points: [
      { title: "Office Management", description: "Master the art of efficient office operations." },
      { title: "Communication Skills", description: "Hone your written and verbal communication abilities." },
      { title: "Time Management", description: "Learn to prioritize tasks and manage time effectively." },
      { title: "Software Proficiency", description: "Gain expertise in essential office software." },
    ],
    enrollmentMessage: "Enroll now to enhance your Customer Service & Administration skills and stand out in today's competitive market.",
    price: "TBD",
    locations: ["TBD", "TBD"],
    link: "/training/customer-service-administration ",
  },

  {
    title: "CSCS (Construction Skills Certification Scheme)",
    description: "Prepare for success in the construction industry through our CSCS training:",
    points: [
      { title: "Health and Safety", description: "Prioritize safety with in-depth knowledge of construction site hazards." },
      { title: "Technical Skills", description: "Acquire hands-on skills crucial for the construction sector." },
      { title: "Certification", description: "Obtain the CSCS card, a recognized industry qualification." },
      { title: "Regulatory Compliance", description: "Stay informed about construction industry regulations." },
    ],
    enrollmentMessage: "Embark on your CSCS training journey with us and build a solid foundation for a thriving career in construction.",
    price: "TBD",
    locations: ["TBD", "TBD"],
    link: "/training/cscs",
  },
  {
    title: "SIA (Security Industry Authority) Training",
    description: "Become a proficient security professional with our SIA training:",
    points: [
      { title: "Security Protocols", description: "Learn the latest security measures and protocols." },
      { title: "Conflict Resolution", description: "Acquire skills to handle challenging situations peacefully." },
      { title: "Legal Compliance", description: "Understand the legal aspects of security operations." },
      { title: "Practical Training", description: "Gain hands-on experience in real-world security scenarios." },
    ],
    enrollmentMessage: "Enroll in our SIA training to step confidently into the security industry with the knowledge and skills you need.",
    price: "TBD",
    locations: ["TBD", "TBD"],
    link: "/training/sia",
  },
  {
    title: "Food and Hygiene Courses",
    description: "Ensure food safety and hygiene with our specialized courses:",
    points: [
      { title: "Food Safety Standards", description: "Comply with regulations for safe food handling." },
      { title: "Hygiene Practices", description: "Implement effective hygiene measures in food preparation." },
      { title: "HACCP Principles", description: "Understand and apply Hazard Analysis and Critical Control Points." },
      { title: "Certification", description: "Obtain recognized certifications in food safety." },
    ],
    enrollmentMessage: "Join our food and hygiene courses to guarantee the highest standards of safety and cleanliness in the food industry.",
    price: "TBD",
    locations: ["TBD", "TBD"],
    link: "/training/food-and-hygiene",
  },
];
