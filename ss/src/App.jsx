import EarthCarousel from './components/EarthCarousel';
import SaturnCarousel from './components/SaturnCarousel';
import StarCarousel from './components/StarCarousel';
import ParticleBackground from './components/ParticleBackground';
import Spline from '@splinetool/react-spline';
import Logo from './assets/Logo.png'
import ScrambledText from "./components/Styles/ScrambledText.jsx";
import BGImage from './assets/BackGroundImg.png'
import { useEffect, useState } from 'react';



const App = () => {
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    // Trigger the animation on mount
    setShowNav(true);
  }, []);

  const [showTitle, setShowTitle] = useState(false);

  useEffect(() => {
    // Trigger animation on mount
    setTimeout(() => setShowTitle(true), 300); // small delay to sync with nav
  }, []);

  return (
    <div className="bg-black">
      <div className="flex h-screen flex-col"
      
      >
              <ParticleBackground/>
      <nav
        className={`transform transition-transform duration-[3000ms] ease-in-out ${
          showNav ? 'translate-y-0' : '-translate-y-full'
        } sticky top-0 z-50 p-6 flex justify-between items-center
          bg-white/10 backdrop-blur-md shadow-lg rounded-2xl`}
      >
        <div className="text-white text-2xl">Logo</div>
        <div className="flex text-4xl space-x-4 z-10">
          <button className="text-white">Button A</button>
          <button className="text-white">Button B</button>
          <button className="text-white">Button C</button>
        </div>
      </nav>
        <div className="relative flex-1">
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
        </div>
      </div>
      <EarthCarousel />
      <div className="flex h-[100vh] items-center justify-center">
        <div className="relative flex-1">
          <Spline scene="https://prod.spline.design/QoVOa4-ULSebN3cV/scene.splinecode" />
          <ScrambledText
            className="absolute top-[70vh] left-1/2 -translate-x-1/2 font-orbitron text-6xl font-extrabold uppercase text-white opacity-60 z-10 drop-shadow-[0px_0px_34px_rgba(223,209,255,1)] "
            text="Explore more planets"
          />
        </div>
      </div>
      <SaturnCarousel />
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

