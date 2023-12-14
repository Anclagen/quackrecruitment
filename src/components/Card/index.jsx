"use client";
import Link from "next/link";
import { useInView } from "react-intersection-observer";

export const CardWithTitleTop = ({ title, imgSrc, imgAlt, text }) => {
  return (
    <div className="rounded-lg shadow-md overflow-hidden bg-white text-black shadow-lg shadow-quackred-300 ">
      <h3 className="text-2xl m-4 text-center font-bold">{title}</h3>
      <img src={imgSrc} alt={imgAlt} className="mb-4 w-full object-cover" />
      <p className="m-4 text-lg">{text}</p>
    </div>
  );
};

export const CardWithImageTop = ({ title, imgSrc, imgAlt, text }) => {
  return (
    <div className="rounded-lg shadow-md overflow-hidden bg-white text-black">
      <img src={imgSrc} alt={imgAlt} className="w-full object-cover h-48" />
      <div className="p-4">
        <h3 className="text-2xl mb-4 font-bold">{title}</h3>
        <p className="text-lg">{text}</p>
      </div>
    </div>
  );
};

export const CardWithLargerImageTop = ({ title, imgSrc, imgAlt, text }) => {
  return (
    <div className="rounded-lg shadow-md overflow-hidden bg-white text-black">
      <img src={imgSrc} alt={imgAlt} className="w-full object-cover h-64" />
      <div className="p-4">
        <h3 className="text-2xl mb-4 font-bold">{title}</h3>
        <p className="text-lg">{text}</p>
      </div>
    </div>
  );
};

export const CardMinimalIconTop = ({ title, icon, color, text, textColor = "text-black" }) => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Trigger the fade in animation once
    rootMargin: "-50px 0px", // Start the animation slightly before the element is in view
  });

  return (
    <div
      ref={ref}
      className={`bg-zinc-50 rounded-lg shadow-quackred-100 shadow-lg overflow-hidden text-center ${textColor} transition-all duration-2000 transform ${inView ? "" : "opacity-0 mt-20"}`}
      style={{ transitionDuration: "2500ms" }}
    >
      <div className="w-100">
        <span className={`material-symbols-outlined ${color}`}>{icon} </span>
      </div>
      <div className="p-4">
        <h3 className="text-2xl mb-4 font-bold">{title}</h3>
        <p className="text-lg">{text}</p>
      </div>
    </div>
  );
};

export const TestimonialCard = ({ userImage, testimonialText, userName, userPosition }) => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Trigger the fade in animation once
    rootMargin: "-50px 0px", // Start the animation slightly before the element is in view
  });
  return (
    <div className={`relative bg-zinc-200 rounded-lg p-5 shadow-lg shadow-quackred-700 text-black mt-20 transition-all duration-2000 transform ${inView ? "" : "opacity-0 mt-20"}`} ref={ref}>
      <img src={userImage} alt="User" className="absolute shadow-md -top-20 left-1/2 transform -translate-x-1/2 w-1/3 rounded-full border-4 border-white w-36" />
      <div className="mt-16 mb-4 text-lg">
        <span className="text-quackred-900  font-extrabold">“</span>
        {testimonialText}
        <span className="text-quackred-900 font-extrabold">”</span>
      </div>
      <p className="text-quackred-900 text-xl font-bold">{userName}</p>
      <p className="text-black text-md">{userPosition}</p>
    </div>
  );
};

export const ProfileCard = ({ userImage, userName, userPosition, userDescription, linkedin, facebook }) => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Trigger the fade in animation once
    rootMargin: "-80px 0px", // Start the animation slightly before the element is in view
  });
  return (
    <div className={`flex flex-col items-center mb-20 md:space-y-0 md:flex-row justify evenly transition-all duration-2000 transform ${inView ? "" : "opacity-0 mt-20"}`} ref={ref}>
      <div className="relative w-full">
        <div className="absolute mb-4 text-center transform translate-x-1/2 -top-20 right-1/2">
          <img alt="profile" src={userImage} className="mx-auto object-cover rounded-lg h-40 w-40 border-2 border-white shadow-xl" />
        </div>
        <div className="px-8 py-4 pt-24 bg-white rounded-lg shadow">
          <div className="text-center">
            <p className="text-2xl text-black font-semibold">{userName}</p>
            <p className="text-xl font-light text-gray-700 ">{userPosition}</p>
            <p className="py-4 mx-auto font-light text-gray-700 text-md">{userDescription}</p>
          </div>
          <div className="flex flex-col pt-8 mx-auto text-gray-500 border-t border-gray-200">
            {linkedin && (
              <a href={linkedin} className="flex items-center text-quackred-950 hover:text-quackred-500 no-underline my-3">
                <svg width="26" height="26" fill="currentColor" className="text-xl transition-colors duration-200 hover:text-gray-800" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                  <path d="M477 625v991h-330v-991h330zm21-306q1 73-50.5 122t-135.5 49h-2q-82 0-132-49t-50-122q0-74 51.5-122.5t134.5-48.5 133 48.5 51 122.5zm1166 729v568h-329v-530q0-105-40.5-164.5t-126.5-59.5q-63 0-105.5 34.5t-63.5 85.5q-11 30-11 81v553h-329q2-399 2-647t-1-296l-1-48h329v144h-2q20-32 41-56t56.5-52 87-43.5 114.5-15.5q171 0 275 113.5t104 332.5z"></path>
                </svg>
                <span className="ml-2">Check Me Out On LinkedIn</span>
              </a>
            )}
            {facebook && (
              <a href={facebook} className="flex items-center text-quackred-950 hover:text-quackred-500 no-underline my-3">
                <svg width="26" height="26" fill="currentColor" className="text-xl transition-colors duration-200 hover:text-gray-800" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1343 12v264h-157q-86 0-116 36t-30 108v189h293l-39 296h-254v759h-306v-759h-255v-296h255v-218q0-186 104-288.5t277-102.5q147 0 228 12z"></path>
                </svg>
                <span className="ml-2">Check Me Out On Facebook</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export const CourseCard = ({ title, description, points = [], price, locations = [], enrollmentMessage, image, link = "" }) => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Trigger the fade in animation once
    rootMargin: "-80px 0px", // Start the animation slightly before the element is in view
  });
  return (
    <div className={`relative max-w-lg px-4 mx-auto sm:px-6 lg:px-8 ${inView ? "" : "opacity-0 mt-20"}`} ref={ref}>
      <div className="max-w-lg mx-auto overflow-hidden rounded-lg shadow-lg pricing-box lg:max-w-none mb-10">
        <div className="px-6 py-8 bg-quackred-50 lg:p-12">
          <h3 className="text-2xl font-extrabold leading-8 text-gray-900 sm:text-3xl sm:leading-9">{title}</h3>
          <p className="mt-6 text-base leading-6 text-gray-700 ">{description}</p>
          <div className="mt-8">
            <div className="flex items-center">
              <h4 className="flex-shrink-0 pr-4 text-sm font-semibold leading-5 tracking-wider text-quackred-800 uppercase">What&#x27;s covered</h4>
              <div className="flex-1 border-t-2 border-gray-200"></div>
            </div>
            <ul className="mt-6 ms-6">
              {points.map(({ title, description }, index) => (
                <li className="text-quackred-800 font-bold list-disc" key={index}>
                  {title}: <span className="text-black font-normal">{description}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-8">
            <div className="flex items-center">
              <h4 className="flex-shrink-0 pr-4 text-sm font-semibold leading-5 tracking-wider text-quackred-800 uppercase">Locations</h4>
              <div className="flex-1 border-t-2 border-gray-200"></div>
            </div>
            <ul className="mt-6 ms-6">
              {locations.map((location, index) => (
                <li className="text-quackred-800 font-bold list-disc" key={index}>
                  {location}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="px-6 py-8 text-center bg-gray-50 lg:p-12 bg-quackred-200">
          <p className=" mb-6">
            <span className="text-base font-medium leading-6 text-gray-700">Starting from </span>
            <span className="text-lg font-semibold leading-none text-gray-900">{price}</span>
          </p>
          <p className="text-md font-semibold leading-6 text-gray-900">{enrollmentMessage}</p>
          <div className="mt-6">
            <div className="rounded-md shadow">
              <Link
                prefetch={false}
                href={link}
                className="py-2 px-4 block bg-quackred-800 hover:bg-quackred-600 focus:ring-quackred-400 focus:ring-offset-quackred-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
