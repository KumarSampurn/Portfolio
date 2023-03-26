import React from "react";
import EducationItem from "./EducationItem";

const Education = () => {
    return (
        <>
            <div className="mx-60 mt-20">
                <div className="flex items-center justify-center mb-32 -mt-16">
                    <span className="text-2xl font-semibold">Education</span>
                </div>

                <div class="inline-block ml-44">
                    <EducationItem
                        heading="P.E.S University"
                        subheading1="B.TECH CSE"
                        subheading2="(2021-2025)"
                    />
                </div>

                <div class="inline-block ml-24">
                    <EducationItem
                        heading="Rajendra Vidyalaya"
                        subheading1="ISC"
                        subheading2="(2020-2021)"
                    />
                </div>

                <div class="inline-block ml-20">
                    <EducationItem
                        heading="Rajendra Vidyalaya"
                        subheading1="ICSE"
                        subheading2="(2018-2019)"
                    />
                </div>


                <div className="flex items-end ">
                    <div className="h-0.5 w-2/6 bg-gray-500"></div>
                    <div className="h-12 border-2 border-gray-500 z-10 "></div>
                    <div className="h-0.5 w-2/6 bg-gray-500"></div>
                    <div className="h-12 border-2 border-gray-500 z-10"></div>
                    <div className="h-0.5 w-2/6 bg-gray-500"></div>
                    <div className="h-12 border-2 border-gray-500 z-10"></div>
                    <div className="h-0.5 w-2/6 bg-gray-500"></div>
                </div>
            </div>
        </>
    );
};

export default Education;
