"use client";
import { useInView } from "react-intersection-observer";
import React from "react";

const FourImageStretch = ({ title, text, images, reverse = false, dark = false, children }) => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Trigger the fade in animation once
    rootMargin: "-50px 0px", // Start the animation slightly before the element is in view
  });

  return (
    <div ref={ref} className={`relative max-w-screen-2xl p-4 px-4  mx-auto sm:px-6 lg:px-8 py-26 transition-all duration-2000 transform ${inView ? "" : "opacity-0 mt-20"}`}>
      <div className="relative">
        <h2 className="text-3xl mb-12 text-center font-bold">{title}</h2>
        <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div className="relative mt-10 lg:-mx-4 relative-20 lg:mt-0 lg:col-start-1">
            <div className="relative space-y-4">
              <div className="flex items-end justify-center space-x-4 lg:justify-start px-6 mb-6">
                <img className="hidden lg:block rounded-lg shadow-lg shadow-gray-500 md:w-52 xl:w-64 2xl:w-72" src={images[0].src} alt={images[0].alt} />
                <img className=" rounded-lg shadow-lg shadow-gray-500 lg:w-60 xl:w-80 2xl:w-96" src={images[1].src} alt={images[1].alt} />
              </div>
              <div className="flex items-start justify-center ml-12 space-x-4 lg:justify-start ">
                <img className="hidden lg:block rounded-lg shadow-lg shadow-gray-500 md:w-36 xl:w-48 2xl:w-56" src={images[2].src} alt={images[2].alt} />
                <img className="hidden lg:block rounded-lg shadow-lg shadow-gray-500 md:w-60 xl:w-64 2xl:w-72" src={images[3].src} alt={images[3].alt} />
              </div>
            </div>
          </div>
          <div className="lg:col-start-2 lg:max-w-2xl lg:ps-4 max-w-screen-md mx-auto">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default FourImageStretch;
