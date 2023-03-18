import React from "react";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Navbar = () => {
  return (
    <nav className="flex items-center justify-between flex-wrap py-6 px-6 z-10 fixed top-0 left-0 right-0">
      <div className="flex items-center flex-shrink-0 text-white -mr-9 text-left">
        <a href="/" className="font-semibold text-xl tracking-tight">
        <FontAwesomeIcon icon={faHome} size="sm" className="text-white" />
        </a>
      </div>

      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto justify-center mr-6 ">
        <div className="text-sm lg:flex-grow flex justify-center">
          <a href="#about" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-800 mr-4">
            About
          </a>
          <a href="#projects" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-800 mr-4">
            Projects
          </a>
          <a href="#contact" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-800">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};


export default Navbar;