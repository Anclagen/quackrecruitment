import BannerHome from "@/components/Banner/BannerHome";
import Section from "@/components/Sections/Section";
import GeneralContactForm from "@/components/ContactForms/GeneralContactForm/GeneralContactForm";

export const metadata = {
  title: "Contact | Quack Recruitment & Training",
  description: "Need to get in touch with us?",
  keywords: ["Quack Group", "Quack Recruitment", "Jobs", "Training", "Recruiters", "Recruitment"],
  authors: [{ name: "Alexander Barrett", url: "https://github.com/Anclagen" }],
};

const Contact = () => {
  return (
    <>
      <div className="hidden bg-teal-900 bg-gray-900 bg-sky-900 bg-indigo-900 bg-red-900 bg-blue-900 bg-green-900 bg-sky-400 text-teal-900 text-gray-900 text-sky-900 text-indigo-900 text-red-900 text-blue-900 text-green-900 text-sky-400"></div>
      <main>
        <BannerHome title="Contact Us" slogan="Employer Or Job Seeker Were Here To Help" imgSrc="/images/banners/pexels-yan-krukau-8867434.jpg" imgAlt="Descriptive Image Alt Text" links={[]} />
        <Section bgColor="bg-zinc-950">
          <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0">
            <div className="px-6 rounded-lg text-white flex-none md:w-1/2">
              <h2 className="text-2xl font-bold leading-8 sm:text-3xl sm:leading-9 mb-6">Contact Details</h2>
              <p className="mb-5">
                {
                  "Whether you have a simple question or need detailed assistance, we're here to help. Feel free to call, email, or simply fill out our contact query. We value your communication and aim to respond as quickly as possible during our office hours."
                }
              </p>
              <div className="mb-5">
                <h3 className="text-2xl font-semibold">E-mail</h3>
                <p className="mt-2 text-lg">
                  <a href="mailto:hello@quackrecruitment.co.uk" className="text-quackred-400 hover:underline">
                    hello@quackrecruitment.co.uk
                  </a>
                </p>
              </div>
              <div className="mb-5">
                <h3 className="text-2xl font-semibold">Phone</h3>
                <p className="mt-2 text-lg">+44 0333 577 0036</p>
              </div>
              <div className="mb-5">
                <h3 className="text-2xl font-semibold">Office Hours</h3>
                <p className="mt-2 text-lg">Monday to Friday: 8am - 5.30pm</p>
                <p className="mt-2 text-lg">Saturday to Sunday: 9:00am - 3.00pm</p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold">Legal / Head office</h3>
                <address className="mt-2 text-lg leading-relaxed">
                  Quack Recruitment,
                  <br />
                  Eastway Enterprises Centre,
                  <br />
                  Bessemer Drive,
                  <br />
                  Stevenage,
                  <br />
                  England,
                  <br />
                  SG1 2DX
                </address>
              </div>
            </div>
            <div className="flex-1 md:w-1/2">
              <h2 className="text-2xl font-bold leading-8 sm:text-3xl sm:leading-9 mb-6 text-white text-center">Get In Touch</h2>
              <GeneralContactForm />
            </div>
          </div>
        </Section>
        {/* <Section bgColor="bg-gray bg-opacity-10 text-center">
          <h2 className="text-2xl font-bold leading-8 text-black sm:text-3xl sm:leading-9 text-center mb-10">Our Locations</h2>
          <div></div>
        </Section> */}
        <Section bgColor="bg-zinc-950 text-center">
          <h2 className="text-2xl font-bold leading-8 text-black sm:text-3xl sm:leading-9 text-center mb-10">Serviced Locations & Offices</h2>
          <div
            className="relative max-w-screen-lg mx-auto"
            style={{
              height: "70vh",
            }}
          >
            <iframe
              src="https://www.google.com/maps/d/u/0/embed?mid=1Jt4IhkKUr8cE6T5kf97Rs3f8TqFwoMA&ehbc=2E312F&noprof=1"
              title="Offices & Serviced Locations"
              style={{
                position: "absolute",
                top: "0",
                left: "0",
                height: "100%",
                width: "100%",
                border: "none",
              }}
            ></iframe>
          </div>
        </Section>
      </main>
    </>
  );
};

export default Contact;
