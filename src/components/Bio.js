import Fade from "react-reveal/Fade";
import "./about.css";
import myPic from "../assests/ProfilePic.JPG";
import React from 'react'

const Bio= () => {
    return (
        <>
            <div className="parent justify-center items-center text-center p-20 ">
          <div className="md:w-6/12 px-4 justify-center items-center profilePic mx-10">
            <Fade left duration={1500}>
              <img
                src={myPic}
                alt="Your name"
                style={{
                  borderRadius: "50%",
                  width: "250px",
                  height: "250px",
                  objectFit: "cover",
                }}
              />
            </Fade>
          </div>
          <div className="w-full md:w-6/12 px-4 bio ">
            <div className="flex justify-center items-center ">
              <div className="border-r-2 text-gray-600 h-36 mx-6"></div>
              <Fade right duration={1200}>
                <p className="text-lg leading-relaxed mt-4 mb-4 text-left">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut
                  tellus odio. Integer lobortis enim vitae purus lobortis faucibus.
                  Nullam vehicula, leo a fringilla consectetur, mauris quam
                  bibendum dolor, at hendrerit arcu lorem vel nisi. Morbi dictum
                  consectetur quam, euismod egestas augue hendrerit vel.
                </p>
              </Fade>
            </div>
          </div>
        </div>
        </>
    )
}

export default Bio;
