"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Footer = () => {
  const location = usePathname();

  return (
    <footer className="bg-black text-white p-10 mt-auto">
      <div className="container mx-auto max-w-screen-2xl">
        <div>
          <div className="flex flex-wrap justify-center gap-10 mb-5">
            <img src="/footer/ICO_Logo_WhiteOnBlue.jpg" alt="Information Commissioner's Office || https://ico.org.uk/" className="h-24" />
            <img src="/footer/disability-confident-committed.jpg" alt="Disability Committed Logo" className="h-24" />
            <img src="/footer/ALP.jpg" alt="ALP member logo || https://www.labourproviders.org.uk/" className="h-24" />
            <img src="/footer/Sedex-Logo.png" alt="Sedex logo || https://www.sedex.com/" className="h-24" />
            <img src="footer/fsb-member-logo.jpg" alt="FSB member logo || https://www.fsb.org.uk/" className="h-24" />
          </div>
          {/* <p className="text-center mb-6">(Logos: Stronger Together / Crown Commercial Supplier)</p> */}
        </div>
        {/* Top Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-10 border-t border-violet-300 pt-6">
          {/* Logo and Description */}
          <div className="text-center col-span-full lg:col-span-1">
            <img src="/interface/qs-logo-transparent.png" alt="Company Logo" className="mb-2 w-full max-w-lg mx-auto" />
          </div>

          {/* Useful Links */}
          <div className="px-2">
            <h3 className="mb-3 text-xl font-bold max-w-fit">Useful Links</h3>
            <ul>
              {[
                { path: "/", label: "Home" },
                { path: "/vacancies", label: "Vacancies" },
                { path: "/register", label: "Register" },
                { path: "/training", label: "Training" },
                { path: "/legal", label: "Legal" },
                { path: "/about", label: "About" },
                { path: "/contact", label: "Contact" },
              ].map((route) => (
                <li key={route.path}>
                  <Link href={route.path} className={`${location === route.path ? "underline" : ""} hover:underline hover:text-white text-white text-lg`}>
                    {route.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="px-2">
            <h3 className="mb-3 text-xl font-bold">Courses</h3>
            <ul>
              {[
                { path: "/#", label: "Warehouse & Logistics" },
                { path: "/#", label: "Admin & Customer Service" },
                { path: "/#", label: "CSCS and SIA Security" },
              ].map((route) => (
                <li key={route.path}>
                  <Link href={`sector${route.path}`} className={`${location === route.path ? "underline" : ""} hover:underline hover:text-white text-white text-lg`}>
                    {route.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Business Hours */}
          <div className="px-2">
            <h3 className="mb-3 text-xl font-bold">Office Hours</h3>
            <p className="my-2">Monday to Friday: 8:00am - 5.30pm</p>
            <p className="my-2">Saturday to Sunday: 9:00am - 3.00pm</p>
            <p className="my-2">24/7 Availability</p>
            <h3 className="mb-3 text-xl font-bold">Socials</h3>
            <div className="flex justify-start my-2">
              <a href="#" className=" w-10">
                <img src="/interface/Facebook_Logo_Primary.png" alt="Facebook" />
              </a>
              <a href="#" className="mx-6 w-12">
                <img src="/interface/LI-In-Bug.png" alt="Linkedin" />
              </a>
              {/* Add more social icons as needed */}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-violet-300 pt-6">
          {/* Copyright */}
          <div className="text-lg font-semibold text-center">
            <p>Quack Recruitment Ltd. © 2023</p>
            <p>Quack Recruitment, Business & Technology Centre, Bessemer Drive, Stevenage, SG1 2DX </p>
            <p>
              Company number:{" "}
              <a href="https://find-and-update.company-information.service.gov.uk/company/11066952" className="text-violet-300">
                11066952
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
