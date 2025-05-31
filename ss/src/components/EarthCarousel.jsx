// Plugins
import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';

// File imports
import ScrambledText from "./Styles/ScrambledText.jsx";
import ShinyText from './Styles/ShinyText.jsx';
import './Styles/style.css';
import Spline from '@splinetool/react-spline';
import Earth4B from '../assets/EarthTimelineA.png';
import Earth2B from '../assets/EarthTimelineB.png';
import Earth from '../assets/Earth.png';

const EarthCarousel = ({ id }) => {

  // Tracking scroll progress
  const targetRef = useRef(null);

  // Using Framer plugin to track horizontal scroll progress
  const { scrollYProgress } = useScroll({ target: targetRef });

  // Carousel Width
  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-30.66%']);

  // Scroll based animations 
  const yEarthDown = useTransform(scrollYProgress, [0, 1], [0, 200]); 
  const yEarthUp = useTransform(scrollYProgress, [0, 1], [0, -150]);  
  const yMoon = useTransform(scrollYProgress, [0, 1], [0, -200]);  

  return (
    <section id={id} ref={targetRef} className="relative h-[150vh] bg-black-900">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">

        {/* MAIN CAROUSEL CONTENT */}
        <motion.div style={{ x }} className="flex w-[300vw] flex-col items-center">
          <div className=" w-[300vw] h-[100vh] p-24 flex flex-row relative">
             
            {/* CONTENT A */}
            <div className="flex flex-row w-[30vw] items-center">
              <motion.div style={{ y: yEarthDown }}>
                <img src={Earth4B} className="h-[450px] w-[450px] floatingUp" />
              </motion.div>
            </div>  

            <div className="ml-12 flex flex-col w-[15vw]">
              <ShinyText 
                className="tracking-widest underline text-white font-orbitron text-2xl" 
                text="Earth 4 billion years ago" 
                disabled={false} 
                speed={3}
              />
              <ul className="list-disc list-inside text-white">
                <li>
                  <ScrambledText text="4 billion years ago" className="font-mono text-[#B2B5B8]"/>
                </li>
                <li>
                  <ScrambledText text="The surface was still extremely hot, with volcanic activity, molten rock, and frequent asteroid impacts."  className="font-mono text-[#B2B5B8] text-m"/>
                </li>
                <li>
                  <ScrambledText text="No oxygen in the air — just toxic gases like CO₂ and methane."  className="font-mono text-[#B2B5B8] text-m"/>
                </li>
                <li>
                  <ScrambledText text="Liquid water may have existed — Earth's first oceans were forming."  className="font-mono text-[#B2B5B8] text-m"/>
                </li>
                <li>
                  <ScrambledText text="Some evidence suggests primitive life may have begun."  className="font-mono text-[#B2B5B8] text-m"/>
                </li>
              </ul>
            </div>

            {/* CONTENT B */}
            <div className="flex flex-row w-[30vw] items-center">
              <motion.div style={{ y: yEarthUp }}>
                <img src={Earth2B} className="h-[600px] w-[600px] ml-12 floatingDown object-contain" />
              </motion.div>
            </div>
            <motion.div
              className="w-[200px] h-[400px] floatingUp"
              style={{ y: yMoon }}
            >
              <Spline scene="https://prod.spline.design/LzhVNa1synAwhP-C/scene.splinecode" />
            </motion.div>

            <div className="ml-12 flex flex-col w-[15vw]">
              <ShinyText 
                className="tracking-widest underline text-white font-orbitron text-2xl" 
                text="2 Billion years ago" 
                disabled={false} 
                speed={3}
              />
              <ul className="list-disc list-inside text-white">
                <li>
                  <ScrambledText text="For the first time, oxygen began to accumulate in the atmosphere." className="font-mono text-[#B2B5B8]"/>
                </li>
                <li>
                  <ScrambledText text="Oxygen was toxic to many early anaerobic life forms — causing mass extinctions."  className="font-mono text-[#B2B5B8] text-m"/>
                </li>
                <li>
                  <ScrambledText text="Earth may have experienced one of its first major ice ages, called the Huronian glaciation (~2.4–2.1 billion years ago)."  className="font-mono text-[#B2B5B8] text-m"/>
                </li>
                <li>
                  <ScrambledText text="Life was still unicellular, mostly prokaryotes (like bacteria and archaea)."  className="font-mono text-[#B2B5B8] text-m"/>
                </li>
                <li>
                  <ScrambledText text="It was one of Earth’s first supercontinents, made of joined ancient landmasses."  className="font-mono text-[#B2B5B8] text-m"/>
                </li>
              </ul>
            </div>

            {/* CONTENT C*/}
            <div className="h-[80vh] w-[30vw] ml-12">
              <div className="flex flex-row w-[40vw] ml-20 items-center">
                <motion.div style={{ y: yEarthDown }}>
                  <img src={Earth} className="h-[400px] w-[400px] floatingUp" />
                </motion.div>
              </div>
              <motion.div
                className="flex items-end w-[200px] h-[400px] floatingDown"
                style={{ y: yMoon }}
              >
                <Spline scene="https://prod.spline.design/LzhVNa1synAwhP-C/scene.splinecode"/>
              </motion.div>                                
            </div>

            <div className="ml-12 flex flex-col w-[15vw]">
              <ShinyText 
                className="tracking-widest underline text-white font-orbitron text-2xl" 
                text="Earth today" 
                disabled={false} 
                speed={3}
              />
              <ul className="list-disc list-inside text-white">
                <li>
                  <ScrambledText text="Biosphere includes life in oceans, air, soil, and extreme environments (like deep-sea vents.)" className="font-mono text-[#B2B5B8]"/>
                </li>
                <li>
                  <ScrambledText text="Atmosphere: ~78% nitrogen, ~21% oxygen, ~1% other gases"  className="font-mono text-[#B2B5B8] text-m"/>
                </li>
                <li>
                  <ScrambledText text="Home to ~8.7 million estimated species (many still undiscovered)"  className="font-mono text-[#B2B5B8] text-m"/>
                </li>
                <li>
                  <ScrambledText text="Average surface temperature: ~15°C (59°F)"  className="font-mono text-[#B2B5B8] text-m"/>
                </li>
                <li>
                  <ScrambledText text="Humans have reshaped ecosystems, built massive cities, and sent probes to other planets"  className="font-mono text-[#B2B5B8] text-m"/>
                </li>
              </ul>
            </div>

            {/* CONTENT D */}
            <div className="absolute bottom-0- left-[160vw] flex flex-row w-[70vw] items-center">
              <motion.div style={{ y: yEarthUp }}>
                  <img src={Earth} className="h-[95%] w-[95%]"/>
              </motion.div>
            </div>
            
          </div>         
        </motion.div>
      </div>
    </section>
  );
};

export default EarthCarousel;