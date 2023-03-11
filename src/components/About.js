import React from "react";
import Fade from "react-reveal/Fade";
import Jump from "react-reveal/Jump";
import './about.css';

const About = () => {
  return (
    <Jump>
      <section id="about" className="bg-gradient-to-r from-dark-1 to-dark-2 text-gray-100 py-20 min-h-screen">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center">
            <div className="w-full md:w-6/12 px-4">
              <Fade left>
                <h2 className="text-4xl font-semibold">About Me</h2>
                <p className="text-lg leading-relaxed mt-4 mb-4">
                  Add your about me content here
                </p>
              </Fade>
            </div>
          </div>
        </div>
      </section>
    </Jump>
  );
};

export default About;
