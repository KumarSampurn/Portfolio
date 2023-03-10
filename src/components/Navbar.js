import React from "react";
import ParticlesBg from "particles-bg";
import Fade from "react-reveal";

const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50 flex flex-col justify-center items-center h-screen bg-black text-white font-montserrat">
      <ParticlesBg type="lines" numq={100} bg={true} />

      <nav className="flex items-center justify-between flex-wrap py-6 px-6" style={{ position: 'fixed', top: 0, left: 0, right: 0 }}>
      <div className="flex items-center flex-shrink-0 text-white mr-6 text-left">
  <a href="/" className="font-semibold text-xl tracking-tight">
    Your Logo
  </a>
</div>

  <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto justify-center">
    <div className="text-sm lg:flex-grow flex justify-center">
      <a href="#about" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-800 mr-4">
        About
      </a>
      <a href="#resume" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-800 mr-4">
        Resume
      </a>
      <a href="#portfolio" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-800 mr-4">
        Projects
      </a>
      <a href="#contact" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-800">
        Contact
      </a>
    </div>
  </div>
</nav>


      <div className="row banner flex flex-col justify-center items-start text-left">
        <div className="banner-text text-white">
          <Fade bottom>
            <h1 className="text-5xl font-bold">Hi!</h1>
          </Fade>
          <Fade bottom duration={1200}>
            <h2 className="text-3xl font-bold">I'm Sampurn</h2>
          </Fade>
          <Fade bottom delay={800} duration={1200}>
            <p className="text-xl font-light mt-4">Front-end web developer | Deep learning and computer vision enthusiast | Aviation enthusiast</p>
          </Fade>
          <hr className="bg-white w-24 mt-6" />
        </div>
      </div>

      <p className="scrolldown">
        <a className="smoothscroll" href="#about">
          <i className="icon-down-circle text-white"></i>
        </a>
      </p>
    </header>
  );
};

export default Header;
