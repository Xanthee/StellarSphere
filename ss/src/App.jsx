// PLUGINS
import { useEffect, useState } from 'react';
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Spline from '@splinetool/react-spline';

// COMPONENTS
import EarthCarousel from './components/EarthCarousel';
import DwarfPlanetCarousel from './components/DwarfPlanetCarousel.jsx';
import ParticleBackground from './components/ParticleBackground';
import PlanetCarousel from './components/PlanetCarousel';
import StarPanel from '@/components/StarCarousel/StarPanel';
import SpaceAudio from "./components/SpaceAudio";
import Logo from './assets/Logo.png'
import ScrambledText from "./components/Styles/ScrambledText.jsx";
import ShinyText from "./components/Styles/ShinyText.jsx";


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
      {/* MAIN CONTENT */}
      <div className="flex h-screen flex-col">
        {/* NAV BAR */}
        <nav
          className= 
            {`transform transition-transform duration-[3000ms] ease-in-out 
            ${ showNav ? 'translate-y-0' : '-translate-y-full' } 
            sticky top-0 z-50 p-6 flex justify-between items-center
            bg-white/10 backdrop-blur-md shadow-lg rounded-2xl`}
        >
          <img
            src={Logo}
            className="h-12 w-auto object-contain"
          />
          <div className="flex text-4xl font-orbitron text-white space-x-16 z-10">
            <a href="#earth" className="hover:underline">Earth</a>
            <a href="#planets" className="hover:underline">Planets</a>
            <a href="#dwarfs" className="hover:underline">Dwarf Planets</a>
            <a href="#stars" className="hover:underline">Stars</a>
          </div>
        </nav>

      {/* INTRO PANEL */}
        <motion.div 
          ref={ref}
          animate={controls}
          initial={{ opacity: 0, y: 50 }}
          ransition={{ duration: 0.6, ease: "easeOut" }}className="relative flex-1 flex justify-center"
        >
          <div className="absolute inset-0 w-full h-full">
            <Spline scene="https://prod.spline.design/6yf5VWqCg3DxPGtL/scene.splinecode" />
          </div>
          <div className="flex flex-col items-center justify-center">
            <span
              className={`font-orbitron text-8xl font-bold uppercase text-white flex  items-center z-10 drop-shadow-[0px_0px_34px_rgba(223,209,255,1)]
                transition-all duration-[3000ms] ease-out
                ${showTitle ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
              `}
            >
              Stellar Sphere
            </span>
            <ShinyText 
                className="font-orbitron text-3xl font-bold uppercase text-white flex pt-16 items-center justify-center z-10" 
                text="Explore the universe" 
                disabled={false} 
                speed={3}
            />
          </div>
        </motion.div>
      </div>

      <EarthCarousel id="earth" />

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
          <a href="#planets" className="text-white font-mono absolute top-[90vh] z-10 rounded-full border border-white bg-transparent text-white px-4 py-2 hover:bg-white hover:text-black transition">View the Universe</a>
        </div>
      </div>

      <PlanetCarousel id="planets" />

      {/* THIRD PANEL */}
      <div className="h-[100vh] m-0 p-0">
        <div className="relative flex-1 flex items-right justify-center">
           <Spline scene="https://prod.spline.design/H6HoWib3rDBuDTRd/scene.splinecode" />
          <div className="absolute top-[50vh] right-20 z-10 flex flex-col text-right space-y-4 max-w-md">
            <ScrambledText
              className="font-orbitron text-6xl font-extrabold uppercase text-white drop-shadow-[0px_0px_34px_rgba(223,209,255,1)]"
              text="Venture further"
            />
            <ScrambledText
              className="font-mono text-xl text-white"
              text="Probe the depths of our solar system and the stars beyond"
            />
            <a
              href="#stars"
              className="text-white w-[190px] self-end font-mono inline-block rounded-full border border-white bg-transparent px-4 py-2 hover:bg-white hover:text-black transition"
            >
              Explore the Stars
            </a>
          </div>
        </div>
      </div>

      <DwarfPlanetCarousel id="dwarfs" />

      <div className="w-full h-screen bg-transparent">
        <StarPanel id="stars" />
      </div>
    </div>
  );
};

export default App;

