import React from "react";
import Fade from "react-reveal/Fade";

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4 min-h-screen">
        <div className="flex flex-wrap justify-center mb-10">
          <div className="w-full md:w-8/12 px-4">
            <Fade bottom>
              <h2 className="text-4xl font-semibold text-center">Projects</h2>
            </Fade>
          </div>
        </div>
        <div className="flex flex-wrap">
          {/* Add your project cards here */}
        </div>
      </div>
    </section>
  );
};

export default Projects;
