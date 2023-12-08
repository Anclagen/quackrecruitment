"use client";
import React from "react";
import { useInView } from "react-intersection-observer";
import Link from "next/link";

const DetailsSection = ({ title, content = [], linkText = "", linkURL = "", detailsTitle = "", details = [], dark = false }) => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Trigger the fade in animation once
    rootMargin: "-50px 0px", // Start the animation slightly before the element is in view
  });

  return (
    <div ref={ref} className={`transition-all duration-2000 transform ${inView ? "scale-100" : "opacity-0 mt-20"} ${dark ? "text-white" : "text-black"}`} style={{ transitionDuration: "1750ms" }}>
      <div class="container p-4 mx-auto bg-white max-w-7xl sm:p-6 lg:p-8">
        <div class="flex flex-wrap -mx-8">
          <div class="w-full px-8 lg:w-1/2">
            <div class="pb-12 mb-12 border-b lg:mb-0 lg:pb-0 lg:border-b-0">
              <h2 class="mb-8 text-3xl font-bold lg:text-4xl font-heading">{title}</h2>
              {content.map((paragraph, index) => (
                <p class="mb-6 leading-loose text-gray-500" key={index}>
                  {paragraph}
                </p>
              ))}
              {linkText && linkURL && (
                <div class="w-full md:w-1/3">
                  <Link
                    href={linkURL}
                    className="py-4 px-6  bg-quackred-900 hover:bg-quackred-600 focus:ring-quackred-500 focus:ring-offset-quackred-200 text-white w-full transition ease-in duration-200  text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                  >
                    {linkText}
                  </Link>
                </div>
              )}
            </div>
          </div>
          <div class="w-full px-8 lg:w-1/2">
            <h3 class="mb-4 text-xl font-bold lg:text-2xl font-heading">{detailsTitle}</h3>
            <ul class="space-y-6">
              {details.map(({ title, detail }, index) => (
                <li class="flex mx-1" key={index}>
                  <div class="px-4 my-auto">
                    <span class="flex items-center justify-center w-12 h-12 mx-auto text-xl font-bold text-quackred-600 rounded-full font-heading bg-quackred-50">{index + 1}</span>
                  </div>
                  <div class="px-4">
                    <h3 class="mt-4 text-xl font-semibold">{title}</h3>
                    <p class="leading-loose">{detail}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsSection;
