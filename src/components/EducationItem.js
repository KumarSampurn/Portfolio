import React from "react";

const EducationItem = ({ heading, subheading1, subheading2 }) => {
  return (
    <div className="inline-block items-center justify-start text-center mb-5 -mt-16">
      <span className="text-xl font-light italic text-gray-400">{heading}</span>
      <div className="flex flex-col items-center">
        <span className="text-md font-medium italic text-gray-500">{subheading1}</span>
        <span className="text-md font-medium italic text-gray-500">{subheading2}</span>
      </div>
    </div>
  );
};

export default EducationItem;
