import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { planets } from "../data/planets";
import ShinyText from './Styles/ShinyText.jsx';
import './Styles/style.css';

const PlanetCarousel  = ({ id }) => {
  // Keep track of which planet is shown on screen
  const [index, setIndex] = useState(0);

    // Tracking scroll direction for animation
  const [direction, setDirection] = useState(1);

  // Current planet based on index
  const planet = planets[index];

  // Move to next planet
  const next = () => {
    setDirection(1);
    setIndex((index + 1) % planets.length);
  };

  // Move to previous planet
  const previous = () => {
    setDirection(-1);
    setIndex((index - 1 + planets.length) % planets.length); // Repeats
  };

  return (
    <section id={id} className="w-screen h-screen text-white flex flex-col items-center justify-center relative overflow-hidden">

      {/* TITLE SECTION */}
      <div className="text-5xl font-bold uppercase font-orbitron absolute top-20">
        <ShinyText
          className="tracking-widest"
          text="The planets of the milky way"
          disabled={false}
          speed={2}
        />
      </div>

      {/* MAIN CAROUSEL CONTENT */}
      <div className="relative w-screen h-screen flex items-center justify-center overflow-hidden text-white">
        
        {/* LEFT INFO */}
        <div className="absolute left-[5vw] top-1/2 -translate-y-1/2 px-8 w-[30vw] max-w-md">
          <AnimatePresence mode="wait">
          <motion.div
              key={index + "-left"}
              initial={{ opacity: 0, x: -direction * 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * 50 }}
              transition={{ duration: 0.4 }}
          >
              <p className="mb-2 text-m font-orbitron">{index + 1}/{planets.length}</p>
              <p className="text-sm mb-4 font-mono font-bold">{planet.description}</p>
          </motion.div>
          </AnimatePresence>
        </div>

        {/* MIDDLE INFO */}
        <motion.div
          key={index + "-img"}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.4 }}
          className="flex flex-col items-center text-center space-y-4 z-10"
        >
          <img src={planet.image} alt={planet.name} className="w-96 h-[600px] object-contain floatingUp" />
          <h2 className="text-7xl font-bold font-orbitron drop-shadow-[0px_0px_24px_rgba(223,209,255,1)]">
          {planet.name}
          </h2>
        </motion.div>

        {/* RIGHT INFO */}
        <div className="absolute right-[5vw] top-1/2 -translate-y-1/2 px-8 w-[20vw] max-w-sm text-right">
          <AnimatePresence mode="wait">
          <motion.div
            key={index + "-right"}
            initial={{ opacity: 0, x: direction * 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -direction * 50 }}
            transition={{ duration: 0.4 }}
            className="text-xl space-y-2"
          >
            <div>
              <p className="font-bold font-orbitron">AGE</p>
              <p className="text-lg font-mono">{planet.age}</p>
            </div>
            <div>
              <p className="font-bold font-orbitron mt-4">STAR TYPE</p>
              <p className="text-lg font-mono">{planet.type}</p>
            </div>
            <div>
              <p className="font-bold font-orbitron mt-4">TEMPERATURE</p>
              <p className="text-lg font-mono">{planet.temperature}</p>
            </div>
          </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* NAV BUTTONS */}
      <div
        key={index + "-nav"}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.4 }}
        className="absolute font-orbitron bottom-10 flex justify-between items-center w-full px-10 drop-shadow-[0px_0px_34px_rgba(223,209,255,1)]"
      >
        <button onClick={previous} className="text-xl flex items-center gap-1 hover:underline">
          ← PREV
        </button>
        <button onClick={next} className="text-xl flex items-center gap-1 hover:underline">
          NEXT →
        </button>
      </div>
    </section>
  );
};

export default PlanetCarousel;
