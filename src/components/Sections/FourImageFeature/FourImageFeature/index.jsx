"use client";
import PropTypes from "prop-types";
import { sectors } from "../../../data/sectors.js";
import { useInView } from "react-intersection-observer";
import Link from "next/link.js";
const FourImageFeature = ({ title, details, linkDetails, images }) => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Trigger the fade in animation once
    rootMargin: "-50px 0px", // Start the animation slightly before the element is in view
  });
  images = [sectors[2].imageSrc, sectors[1].imageSrc, sectors[0].imageSrc, sectors[3].imageSrc];
  return (
    <div ref={ref} className={`relative max-w-screen-2xl p-4 px-4  mx-auto sm:px-6 lg:px-8 py-26 transition-all duration-2000 transform ${inView ? "" : "opacity-0 mt-20"}`}>
      <div className="relative">
        <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div className="ml-auto lg:col-start-2 lg:max-w-2xl lg:ps-4">
            <h2 className="mt-2 text-2xl font-bold leading-8 text-black sm:text-3xl sm:leading-9">{title}</h2>
            <p className="mt-4 text-lg leading-6 text-gray-700">{details}</p>
            <ul className="gap-6 mt-8">
              {linkDetails.map((linkDetail, i) => (
                <li key={i} className={`mt-6 lg:mt-0 text-lg ${linkDetail.color}`}>
                  <Link prefetch={false} href={`sector/${linkDetail.slug}`} className="flex mb-3">
                    <span className="ml-4 font-medium leading-6 font-semibold hover:underline">{linkDetail.name}</span>
                    <span className="flex items-center justify-center flex-shrink-0 w-6 h-6 rounded-full ps-3 !no-underline">
                      <span className="material-symbols-outlined">arrow_circle_right</span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative mt-10 lg:-mx-4 relative-20 lg:mt-0 lg:col-start-1">
            <div className="relative space-y-4">
              <div className="flex items-end justify-center space-x-4 lg:justify-start">
                <img className="w-32 rounded-lg shadow-lg shadow-gray-500 md:w-56 xl:w-64 2xl:w-72" width="200" src={images[0]} />
                <img className="w-40 rounded-lg shadow-lg shadow-gray-500 md:w-64 xl:w-80 2xl:w-96" width="260" src={images[1]} alt="2" />
              </div>
              <div className="flex items-start justify-center ml-12 space-x-4 lg:justify-start">
                <img className="w-24 rounded-lg shadow-lg shadow-gray-500 md:w-40 xl:w-48 2xl:w-56" width="170" src={images[2]} alt="3" />
                <img className="w-32 rounded-lg shadow-lg shadow-gray-500 md:w-60 xl:w-64 2xl:w-72" width="200" src={images[3]} alt="4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

FourImageFeature.propTypes = {
  title: PropTypes.string,
  details: PropTypes.string,
  linkDetails: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      slug: PropTypes.string,
      color: PropTypes.string,
    })
  ),
  images: PropTypes.arrayOf(PropTypes.string),
};

export default FourImageFeature;
