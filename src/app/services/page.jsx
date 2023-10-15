import Banner from "@/components/Banner/Banner";
export default function Services() {
  return (
    <main className="flex flex-grow flex-col items-center justify-between">
      <Banner
        title="Quack Specialists Ltd"
        slogan="Your Local Recruitment Specialists"
        imgSrc="/pexels-olga-lioncat-7245326.jpg"
        imgAlt="Descriptive Image Alt Text"
        links={[
          { label: "Jobs", path: "/jobs" },
          { label: "Employers", path: "/employers" },
        ]}
      />
    </main>
  );
}
