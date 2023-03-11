import React from 'react';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import About from './components/About';
import Home from './components/Home';

const App = () => {
  return (
    <>
      <Navbar />
      <Home/>
      <main className="w-full  relative " >
        <About className=" absolute min-h-screen" />
        <Projects className=" absolute min-h-screen" />
        <Contact className=" absolute min-h-screen" />
      </main>
    </>
  );
};

export default App;
