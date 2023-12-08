"use client";
import PageLink from "../PageLink";

const BannerHome = ({ title, slogan, imgSrc, imgAlt, links = [] }) => {
  return (
    <div className="relative h-screen banner overflow-hidden">
      {/* Image */}
      <img src={imgSrc} alt={imgAlt} className="absolute top-0 left-0 w-full h-full object-cover" />

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full px-5 md:px-12 banner-gradient">
        <div className="relative max-w-screen-2xl mx-auto top-0 left-0 h-full flex items-center ">
          <div className="text-center pt-20 mx-auto md:mx-0">
            <h1 className="text-black text-5xl md:text-6xl mb-4 max-w-sm mx-auto">{title}</h1>
            <p className="text-quackred text-2xl md:text-3xl mb-8 max-w-md mx-auto">{slogan}</p>
            <div className="flex justify-center gap-5 flex-col sm:flex-row">
              {/* Render links if provided */}
              {links && links.map((link, index) => <PageLink key={index} href={link.path} label={link.label} arrow={true} />)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerHome;
