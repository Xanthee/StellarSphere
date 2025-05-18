import EarthCarousel from './components/EarthCarousel';
import VenusCarousel from './components/VenusCarousel';
import StarCarousel from './components/StarCarousel';
import Spline from '@splinetool/react-spline';
import Logo from './assets/Logo.png'
import BGImage from './assets/BackGroundImg.png'
import { useEffect, useState } from 'react';



const Example = () => {
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
          style={{
            backgroundImage: `url(${BGImage})`,
            backgroundSize: 'cover', // Adjusts image to cover the entire div
            backgroundPosition: 'center', // Centers the image
            backgroundRepeat: 'no-repeat', // Prevents image from repeating
          }}
      >
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
      <div className="flex h-48 h-screen items-center justify-center">
        <span className="font-semibold uppercase text-neutral-500">
          Scroll up
        </span>
      </div>
      <VenusCarousel />
      <div className="flex h-48 h-screen items-center justify-center">
        <span className="font-semibold uppercase text-neutral-500">
          Scroll up
        </span>
      </div>
      <StarCarousel />
    </div>
  );
};

export default Example;

