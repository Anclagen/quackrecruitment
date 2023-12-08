"use client";
import { useState } from "react";
import { useSpring, a } from "react-spring";

const Flipper = ({ imageSRC, imageAlt, text, bgColor, textColor }) => {
  const [isHovered, setIsHovered] = useState(false);

  const { transform, opacity } = useSpring({
    opacity: isHovered ? 1 : 0,
    transform: `perspective(600px) rotateX(${isHovered ? 180 : 0}deg) rotateY(${isHovered ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  });

  return (
    <div className="flex items-center justify-center relative h-44 w-64  md:h-52 md:w-96 m-6" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <a.div className={`bg-${bgColor} c flex items-center justify-center h-44 w-64 md:h-52 md:w-96 absolute`} style={{ opacity: opacity.to((o) => 1 - o), transform }}>
        <p className={`text-${textColor} text-2xl font-medium text-center px-1`}>{text}</p>
      </a.div>
      <a.div
        className={`c  h-44 w-64 md:h-52 md:w-96 absolute`}
        style={{
          opacity,
          transform,
          rotateX: "180deg",
        }}
      >
        <img src={imageSRC} alt={imageAlt} className="object-cover h-full w-full object-center" />
      </a.div>
    </div>
  );
};

export default Flipper;

// "use client";
// import { useState } from "react";
// import { useSpring, a } from "react-spring";

// const Flipper = ({ imageSRC, imageAlt, text, bgColor, textColor }) => {
//   const [flipped, set] = useState(false);
//   const { transform, opacity } = useSpring({
//     opacity: flipped ? 1 : 0,
//     transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg) rotateY(${flipped ? 180 : 0}deg)`,
//     config: { mass: 5, tension: 500, friction: 80 },
//   });
//   return (
//     <div className="flex items-center justify-center relative h-52 w-86 m-2" onClick={() => set((state) => !state)}>
//       <a.div className={`bg-${bgColor} c flex items-center justify-center`} style={{ opacity: opacity.to((o) => 1 - o), transform }}>
//         <p className={`text-${textColor} text-2xl font-medium`}>{text}</p>
//       </a.div>
//       <a.div
//         className={`c`}
//         style={{
//           opacity,
//           transform,
//           rotateX: "180deg",
//         }}
//       >
//         <img src={imageSRC} alt={imageAlt} className="object-cover h-full w-full object-center" />
//       </a.div>
//     </div>
//   );
// };

// export default Flipper;
