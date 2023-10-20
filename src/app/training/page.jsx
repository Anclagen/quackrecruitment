import BannerHome from "@/components/Banner/BannerHome";

function Training() {
  return (
    <>
      <main className="flex flex-grow flex-col items-center justify-between">
        <BannerHome
          title="Training"
          slogan="Turn Passion into Profession."
          imgSrc="images/pexels-olga-lioncat-7245326.jpg"
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

export default Training;
