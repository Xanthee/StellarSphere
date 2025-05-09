import EarthCarousel from './components/EarthCarousel';
import VenusCarousel from './components/VenusCarousel';
import StarCarousel from './components/StarCarousel';
import Spline from '@splinetool/react-spline';
import Logo from './assets/Logo.png'
import BGImage from './assets/BackGroundImg.png'

const Example = () => {
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

        <nav className=" p-8 flex justify-between items-center">
         <div>
            <img
              src={Logo}
              alt="Logo"
              className="h-16 w-auto object-contain"
            />
          </div>
          <div className="flex text-4xl space-x-4">
            <button className="font-orbitron font-black text-white">
              Button A
            </button>
            <button className="font-orbitron font-black text-white">
              Button B
            </button>
            <button className="font-orbitron font-black text-white ">
              Button C
            </button>
          </div>
        </nav>
        <div className="relative flex-1">
          <div className="absolute inset-0 w-full h-full">
            <Spline scene="https://prod.spline.design/6yf5VWqCg3DxPGtL/scene.splinecode" />
          </div>
          <span className="absolute inset-0 font-orbitron text-8xl font-bold uppercase text-white flex pt-12 justify-center z-10 drop-shadow-[0px_0px_34px_rgba(223,209,255,1)]">
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

