import BannerHome from "@/components/Banner/BannerHome";
import Head from "next/head";
export default function Services() {
  return (
    <>
      <Head>
        <title>Training</title>
      </Head>
      <main className="flex flex-grow flex-col items-center justify-between">
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
      </main>
    </>
  );
}
