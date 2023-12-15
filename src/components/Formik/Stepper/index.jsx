import React from "react";

const Stepper = ({ activeSection, steps }) => {
  return (
    <div className="flex flex-row mb-4 h-12 items-center">
      {Array.from({ length: steps }).map((_, index) => (
        <React.Fragment key={index}>
          <div
            className={`flex items-center justify-center w-8 h-8 border-2 rounded-full font-bold ${
              activeSection === index ? "border-quackred-900 text-quackred-900" : activeSection > index ? "border-quackred-900 bg-quackred-900 text-white" : "border-white text-transparent"
            }`}
          >
            {index + 1}
          </div>
          {index !== steps - 1 && <div className={`${activeSection > index ? "bg-quackred-900" : "bg-white"} grow h-1 my-auto w-4`}></div>}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Stepper;
