"use client";
import React from "react";
import { useInView } from "react-intersection-observer";

const FadeInFreeTextSection = ({ title, imageSrc, imageAlt, reverse = false, dark = false, children }) => {
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
        <div className={`md:w-1/2 p-5 md:p-5 flex flex-col text-lg ${dark ? "text-white" : "text-gray-700"} ${reverse ? "md:order-1" : "md:order-2"} my-auto`}>{children}</div>
      </div>
    </div>
  );
};

export default FadeInFreeTextSection;
