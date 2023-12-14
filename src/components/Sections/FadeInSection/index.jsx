"use client";
import { useInView } from "react-intersection-observer";
import Link from "next/link";

const FadeInSection = ({ title, imageSrc, imageAlt, text = [], linkText, linkHref, reverse = false, dark = false }) => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Trigger the fade in animation once
    rootMargin: "-50px 0px", // Start the animation slightly before the element is in view
  });

  return (
    <div ref={ref} className={`transition-all duration-2000 transform ${inView ? "scale-100" : "opacity-0 mt-20"} ${dark ? "text-white" : "text-black"}`} style={{ transitionDuration: "1750ms" }}>
      <h2 className="mb-12 text-center text-3xl font-extrabold sm:text-4xl">{title}</h2>
      <div className="md:flex md:space-x-6 lg:gap-10 xl:gap-16">
        <div className={`md:w-1/2 mb-5 p-5 ${reverse ? "md:order-2" : "md:order-1"}`}>
          <img src={imageSrc} alt={imageAlt} className="rounded-3xl shadow-lg shadow-gray-500" />
        </div>
        <div className={`md:w-1/2 p-5 md:p-5 flex flex-col text-lg ${dark ? "text-white" : "text-gray-700"} ${reverse ? "md:order-1" : "md:order-2"} my-auto`}>
          <div className="max-w-screen-md mx-auto">
            {text &&
              text.map((paragraph, index) => (
                <p key={index} className="mb-5">
                  {paragraph}
                </p>
              ))}
            <div className="text-center my-10">
              {linkText && linkHref && (
                <Link
                  prefetch={false}
                  href={linkHref}
                  className="py-4 px-6  bg-quackred-900 hover:bg-quackred-600 focus:ring-quackred-500 focus:ring-offset-quackred-200 text-white w-full transition ease-in duration-200  text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                >
                  {linkText}
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FadeInSection;
