import React from "react";
import Fade from "react-reveal/Fade";

const Contact = () => {
  return (
    <section id="contact" className="relative bg-gray-100 py-20 min-h-screen">
    
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center">
          <div className="w-full md:w-6/12 px-4">
            <Fade left>
              <h2 className="text-4xl font-semibold text-center text-white">
                Contact Me
              </h2>
              <p className="text-lg leading-relaxed mt-4 mb-4 text-gray-300">
                Add your contact information here
              </p>
            </Fade>
          </div>
        </div>
        <div className="flex flex-wrap mt-12 justify-center">
          {/* Add your contact form here */}
        </div>
      </div>
    </section>
  );
};

export default Contact;
