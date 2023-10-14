"use client";
import { Link } from "react-router-dom";

const BannerHalf = ({ title, slogan, imgSrc, imgAlt, links = [] }) => {
  return (
    <div className="relative banner overflow-hidden" style={{ height: "50vh" }}>
      {/* Image */}
      <img src={imgSrc} alt={imgAlt} className="absolute top-0 left-0 w-full h-full object-cover" />

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full px-5 md:px-12 banner-gradient">
        <div className="relative max-w-screen-2xl mx-auto top-0 left-0 h-full flex items-center ">
          <div className="text-center pt-20 mx-auto md:mx-0">
            <h1 className="text-black text-5xl md:text-6xl mb-4 max-w-sm mx-auto">{title}</h1>
            <p className="text-black text-2xl md:text-3xl mb-8 max-w-md mx-auto">{slogan}</p>
            <div className="flex justify-center gap-5 flex-col place-content-center item-center justify-center">
              {/* Render links if provided */}
              {links &&
                links.map((link, index) => (
                  <Link key={index} to={link.path} className={`mx-auto bg-${link.color}-900 hover:bg-${link.color}-600 hover:text-white text-white py-2 px-5 font-semibold rounded w-fit flex`}>
                    {link.label}
                    <span className="w-6 h-6 rounded-full ps-3">
                      <span className="material-symbols-outlined">arrow_circle_right</span>
                    </span>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerHalf;
