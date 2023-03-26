import React from "react";
import Bio from "./Bio";
import Education from "./Education";
import Skills from "./Skills";
// import Fade from "react-reveal/Fade";
import "./about.css";

const About = () => {
  return (
    <section
      id="about"
      className="bg-gradient-to-r from-dark-1 to-dark-2 text-gray-100 py-20 min-h-screen flex justify-center items-center"
    >
      <div className="container mx-10 ">
        <h2 className="text-center text-4xl font-semibold mx-auto">About</h2>
        <Bio/>
        <Education/>
        <Skills/>
      </div>
    </section>
  );
};

export default About;
