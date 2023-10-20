import BannerHalf from "@/components/Banner/BannerHalf";
import Section from "@/components/Sections/Section";

export const metadata = {
  title: "Listings | Quack Recruitment",
  description: "Check out our latest opportunities and find that dream job for you today!",
  keywords: ["Quack Group", "Quack Recruitment", "Jobs", "Training", "Recruiters", "Recruitment"],
  authors: [{ name: "Alexander Barrett", url: "https://github.com/Anclagen" }],
};

const Listings = () => {
  return (
    <>
      <div className="hidden bg-teal-900 bg-gray-900 bg-sky-900 bg-indigo-900 bg-red-900 bg-blue-900 bg-green-900 bg-sky-400 text-teal-900 text-gray-900 text-sky-900 text-indigo-900 text-red-900 text-blue-900 text-green-900 text-sky-400"></div>
      <main>
        <BannerHalf title="Listings" slogan="Find that perfect fit." imgSrc="/images/banners/pexels-pixabay-162553.jpg" imgAlt="Descriptive Image Alt Text" />

        <Section bgColor="bg-zinc-200">
          <h2 className="text-3xl text-center mb-10 font-semibold">Our Listings</h2>

          <p className="mx-auto max-w-screen-md text-lg my-5 flex">
            <span className="inline-block">Check out are current listings on</span>
            <a
              href="https://www.cv-library.co.uk/list-jobs/309161/Quack-Recruitment#profile-list-jobs"
              target="_blank"
              rel="noreferrer"
              className="flex text-violet-900 hover:text-violet-600 inline-block w-fit ps-1"
            >
              <span className=" hover:underline inline-block">CV Library </span>
              <span className="flex items-center justify-center flex-shrink-0 w-6 h-6 rounded-full ps-3 !no-underline">
                <span className="material-symbols-outlined">arrow_circle_right</span>
              </span>
            </a>
          </p>
          <div className="relative h-screen max-w-3xl mx-auto">
            <iframe
              src="https://www.cv-library.co.uk/cgi-bin/yourjobs.cgi?agency=309161"
              style={{
                position: "absolute",
                top: "0",
                left: "0",
                height: "100%",
                width: "100%",
                border: "none",
              }}
              title="Full Page Iframe"
            ></iframe>
          </div>
        </Section>
      </main>
    </>
  );
};

export default Listings;
