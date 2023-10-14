"use client";
import Link from "next/link";

const Banner = ({ title, slogan, imgSrc, imgAlt, links = [] }) => {
  return (
    <div className="relative h-screen banner overflow-hidden">
      {/* Image */}
      <img src={imgSrc} alt={imgAlt} className="absolute top-0 left-0 w-full h-full object-cover" />

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.7)] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-white text-6xl mb-4">{title}</h1>
          <p className="text-white text-3xl mb-8">{slogan}</p>

          {/* Render links if provided */}
          {links &&
            links.map((link, index) => (
              <Link key={index} href={link.path} className="bg-violet-900 hover:bg-violet-600 hover:text-white text-white py-2 px-4 rounded mx-3 ">
                {link.label}
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Banner;
