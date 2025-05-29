import { useState } from "react";
import StarCarousel from '@/components/StarCarousel/StarCarousel'
import Spline from '@splinetool/react-spline';
import ScrambledText from '../Styles/ScrambledText';

export default function StarPanel() {
  const [clicked, setClicked] = useState(false);

  if (!clicked) {
    // Initial state: show Spline, texts, and Explore button
    return (
      <div className="w-full h-screen text-white flex flex-col items-left justify-center relative">
        <Spline scene="https://prod.spline.design/LEmKBoQX0flCDwnp/scene.splinecode" />
        <div className="flex flex-col h-[50vh] w-[40vw] ml-[10vw] absolute z-10">
          <h1 className="font-orbitron text-6xl font-extrabold uppercase text-white z-10 drop-shadow-[0px_0px_34px_rgba(223,209,255,1)]"> Journey through the infinite cosmos</h1>
          <h2 className="font-mono text-4xl text-white opacity-60 z-10 drop-shadow-[0px_0px_34px_rgba(223,209,255,1)]"> Unveiling the Brilliance of the Night Sky</h2>
          <button
            className="text-2xl w-[10vw] font-mono z-10 rounded-full border border-white bg-transparent text-white px-4 py-2 hover:bg-white hover:text-black transition mt-10"
            onClick={() => {
              console.log("Button was clicked");
              setClicked(true);
            }}
          >
            Explore
          </button>
        </div>
      </div>
    );
  }

  // When clicked === true: only show StarCarousel and Back controls
  return (
    <div className="w-full h-screen bg-black text-white flex flex-col items-center justify-center">
      <StarCarousel onBack={() => setClicked(false)} />
    </div>
  );
}
