"use client";
import PageLink from "@/components/PageLink";
import { useInView } from "react-intersection-observer";

const CTASection = ({ titleBlack, titlePurple, text, linkText, linkHref, image, reverse = false }) => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Trigger the fade in animation once
    rootMargin: "-50px 0px", // Start the animation slightly before the element is in view
  });

  return (
    <div className={`flex relative transition-all duration-2000 transform ${inView ? "" : "opacity-0 mt-20"}`} ref={ref}>
      <div className={`text-start lg:w-1/2 text-center py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20 ${reverse ? "md:order-2" : "md:order-1"}`}>
        <h2 className="text-3xl font-extrabold text-black sm:text-4xl">
          <span className="block">{titleBlack}</span>
          <span className="block text-quackred-900">{titlePurple}</span>
        </h2>
        <p className="mt-4 text-gray-700 text-2xl">{text}</p>
        <div className="lg:mt-0 lg:flex-shrink-0 text-center">
          <div className="mt-12 inline-flex rounded-md shadow">
            <PageLink href={linkHref} label={linkText} />
          </div>
        </div>
      </div>
      <div className={`lg:w-1/2 ${reverse ? "md:order-1" : "md:order-2"}`}>
        <img src={image} className="top-0 right-0 hidden h-full max-w-1/2 lg:block p-5 mx-auto" />
      </div>
    </div>
  );
};

export default CTASection;
