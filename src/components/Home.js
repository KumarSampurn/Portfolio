import ParticlesBg from "particles-bg";
import { Fade } from "react-reveal";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowDown } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-scroll';
import './home.css';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center ">
      <ParticlesBg type="fountain" bg={true} num={1}/>
      <div className="banner-text text-white">
        <Fade bottom duration={900}>
          <h1 className="text-5xl font-bold ">Hi!</h1>
        </Fade>
        <Fade bottom duration={1200}>
          <h2 className="text-3xl font-bold">I'm Sampurn</h2>
        </Fade>
        <Fade bottom delay={800} duration={1200}>
          <p className="text-xl font-light mt-4">Front-end web developer | Deep learning and computer vision enthusiast | Aviation enthusiast</p>
        </Fade>
        <hr className="bg-white w-24 mt-6" />
      </div>

      <p className="scrolldown icon-container absolute bottom-0 mb-8">
        <Link to="about" smooth={true} duration={500}>
          <FontAwesomeIcon icon={faCircleArrowDown} size="2x" className="text-white animate-bounce hover:animate-none hover:shadow-lg rounded-full hover:bg-gradient-to-r bg-gradient" />
        </Link>
      </p>
    </div>
  );
};

export default Home;
