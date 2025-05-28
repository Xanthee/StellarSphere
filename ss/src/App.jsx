// PLUGINS
import { useEffect, useState } from 'react';
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Spline from '@splinetool/react-spline';

// COMPONENTS
import EarthCarousel from './components/EarthCarousel';
import SaturnCarousel from './components/SaturnCarousel';
import StarCarousel from './components/StarCarousel';
import ParticleBackground from './components/ParticleBackground';
import PlanetCarousel from './components/PlanetCarousel';
import SpaceAudio from "./components/SpaceAudio";
import Logo from './assets/Logo.png'
import ScrambledText from "./components/Styles/ScrambledText.jsx";
import BGImage from './assets/BackGroundImg.png'


const App = () => {
  {/* ON VIEW EASE IN AND OUT ANIMATION */}
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    setShowNav(true);
  }, []);

  const [showTitle, setShowTitle] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowTitle(true), 300); //delay on purpose
  }, []);

  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    } else {
      controls.start({ opacity: 0, y: 50 });
    }
  }, [inView, controls]);

  return (
    <div className="bg-black m-0 p-0">
      <SpaceAudio />
      <ParticleBackground/>

      {/* INTRO PANEL */}
      <div className="flex h-screen flex-col">

        {/* NAV BAR */}
        <nav
          className= 
            {`transform transition-transform duration-[3000ms] ease-in-out 
            ${ showNav ? 'translate-y-0' : '-translate-y-full' } 
            sticky top-0 z-50 p-6 flex justify-between items-center
            bg-white/10 backdrop-blur-md shadow-lg rounded-2xl`}
        >
          <div>Logo</div>
          <div className="flex text-4xl font-orbitron text-white space-x-4 z-10">
            <button>Earth</button>
            <button>Planets</button>
            <button>Stars</button>
          </div>
        </nav>

        <motion.div 
          ref={ref}
          animate={controls}
          initial={{ opacity: 0, y: 50 }}
          ransition={{ duration: 0.6, ease: "easeOut" }}className="relative flex-1"
        >
          <div className="absolute inset-0 w-full h-full">
            <Spline scene="https://prod.spline.design/6yf5VWqCg3DxPGtL/scene.splinecode" />
          </div>
            <span
              className={`absolute inset-0 font-orbitron text-8xl font-bold uppercase text-white flex pt-36 justify-center z-10 drop-shadow-[0px_0px_34px_rgba(223,209,255,1)]
                transition-all duration-[3000ms] ease-out
                ${showTitle ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
              `}
            >
              Stellar Sphere
            </span>
        </motion.div>
      </div>
      
      <EarthCarousel />

      {/* SECONDARY PANEL */}
      <div className="h-[100vh] m-0 p-0">
        <div className="relative flex-1 flex items-center justify-center">
          <Spline scene="https://prod.spline.design/QoVOa4-ULSebN3cV/scene.splinecode" />
          <ScrambledText
            className="absolute top-[70vh] left-1/2 -translate-x-1/2 font-orbitron text-6xl font-extrabold uppercase text-white opacity-60 z-10 drop-shadow-[0px_0px_34px_rgba(223,209,255,1)] "
            text="Explore Beyond"
          />
          <ScrambledText
            className="absolute top-[80vh] left-1/2 -translate-x-1/2 font-mono text-xl text-white z-10 "
            text="Discover the wonders of space, from distant stars to the mysteries of the planets."
          />
          <button className="text-white font-mono absolute top-[90vh] z-10 rounded-full border border-white bg-transparent text-white px-4 py-2 hover:bg-white hover:text-black transition">View the Universe</button>
        </div>
      </div>

      <PlanetCarousel />

      {/* THIRD PANEL */}
      <div className="flex h-48 h-screen items-center justify-center">
        <span className="font-semibold uppercase text-neutral-500">
          Scroll up
        </span>
      </div>

      <StarCarousel />
    </div>
  );
};

export default App;

