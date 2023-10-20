const BannerHalf = ({ title, slogan, imgSrc, imgAlt }) => {
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerHalf;
