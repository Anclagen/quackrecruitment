"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Footer = () => {
  const location = usePathname();

  return (
    <footer className="bg-black text-white p-10 mt-auto">
      <div className="container mx-auto max-w-screen-2xl">
        <div>
          <div className="flex flex-wrap justify-center gap-10 mb-10">
            <img src="/footer/disability-confident-committed.jpg" alt="Disability Committed Logo" className="h-24" />
            <img src="/footer/ALP.jpg" alt="ALP member logo || https://www.labourproviders.org.uk/" className="h-24" />
            <img src="/footer/Sedex-Logo.png" alt="Sedex logo || https://www.sedex.com/" className="h-24" />
            <img src="/footer/ETF_Cyan_Digital_Logo.jpg" alt="Education & Training Foundation logo || https://www.et-foundation.co.uk/" className="h-24" />
          </div>
          {/* <p className="text-center mb-6">(Logos: Stronger Together / Crown Commercial Supplier)</p> */}
        </div>
        {/* Top Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-10 border-t border-quackred-300 pt-6">
          {/* Logo and Description */}
          <div className="px-2 md:ps-6">
            <h3 className="mb-3 text-xl font-bold">General</h3>
            <ul>
              {[
                { path: "/", label: "Home" },
                { path: "/recruitment/listings", label: "Jobs" },
                { path: "/about", label: "About" },
                { path: "/contact", label: "Contact" },
                { path: "/legal", label: "Legal" },
                { path: "/legal/privacy-policy", label: "Privacy Policy" },
              ].map((route) => (
                <li key={route.path}>
                  <Link prefetch={false} href={`${route.path}`} className={`${location === route.path ? "underline" : ""} hover:underline hover:text-white text-white text-lg`}>
                    {route.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="px-2">
            <h3 className="mb-3 text-xl font-bold max-w-fit">Job Seekers</h3>
            <ul>
              {[
                { path: "/recruitment/listings", label: "Listings" },
                { path: "/recruitment", label: "Recruitment" },
                { path: "/recruitment/permanent", label: "Permanent Recruitment" },
                { path: "/recruitment/temporary", label: "Temporary Recruitment" },
                { path: "/recruitment/on-site-managed", label: "On-Site Managed Services" },
              ].map((route) => (
                <li key={route.path}>
                  <Link prefetch={false} href={route.path} className={`${location === route.path ? "underline" : ""} hover:underline hover:text-white text-white text-lg`}>
                    {route.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="px-2">
            <h3 className="mb-3 text-xl font-bold max-w-fit">Training & Courses</h3>
            <ul>
              {[
                { path: "/training", label: "Training" },
                { path: "/training/food-and-hygiene", label: "Food & Hygiene" },
                { path: "/training/sia", label: "Security Industry Authority (SIA)" },
                { path: "/training/customer-service-administration", label: "Admin & Customer Service" },
                { path: "/training/cscs", label: "Construction Skills (CSCS)" },
              ].map((route) => (
                <li key={route.path}>
                  <Link prefetch={false} href={`${route.path}`} className={`${location === route.path ? "underline" : ""} hover:underline hover:text-white text-white text-lg`}>
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
        {/* Quack group and affiliated */}
        <div className="border-t border-quackred-300 pt-6">
          {/* Copyright */}
          <div className="flex flex-col mb-8">
            <img src="/logos/quack-group-horizonal-full-logo-white.png" alt="Quack Group Full Logo" className="my-3 w-full sm:w-80 md:w-96 mx-auto" />
            <div className="flex flex-row justify-center max-w-screen-lg mx-auto gap-12 mt-8">
              <Link prefetch={false} href="/" className="flex flex-row">
                <img src="/logos/temp-logo-rt.png" alt="Logo" className="h-16" />
                <div className="flex flex-col ml-3 text-white text-xl font-medium">
                  <span>Quack</span>
                  <span>Recruitment & Training</span>
                </div>
              </Link>
              <a target="_blank" href="https://www.quackspecialists.co.uk" className="flex flex-row">
                <img src="/logos/qs-logo-transparent.png" alt="QS Logo" className="h-16 sm:ps-10" />
              </a>
            </div>
          </div>
        </div>
        {/* Bottom Section */}
        <div className="border-t border-quackred-300 pt-6">
          {/* Copyright */}
          <div className="text-lg font-semibold text-center">
            <p>Quack Recruitment Ltd. © 2023</p>
            <p>Quack Recruitment, Business & Technology Centre, Bessemer Drive, Stevenage, SG1 2DX </p>
            <p>
              Company number:{" "}
              <a target="_blank" href="https://find-and-update.company-information.service.gov.uk/company/11066952" className="text-quackred-300">
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
