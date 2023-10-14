"use client";
import React from "react";

const CardSection = ({ children }) => {
  return (
    <div className="flex flex-wrap justify-center">
      {React.Children.map(children, (child) => (
        <div className="w-full md:w-1/2 xl:w-1/3">
          <div className="p-5 xl:p-10">{child}</div>
        </div>
      ))}
    </div>
  );
};

export default CardSection;
