import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';
import ScrambledText from "./Styles/ScrambledText.jsx";
import ShinyText from './Styles/ShinyText.jsx';
import ParticleBackground from './ParticleBackground';
import Spline from '@splinetool/react-spline';
import './Styles/style.css';
import Earth from '../assets/4BEarth.png';

const EarthCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef });

  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-30.66%']);
  const yEarth = useTransform(scrollYProgress, [0, 1], [0, 200]); 
  const yEarthB = useTransform(scrollYProgress, [0, 1], [0, 150]);  
  const yMoon = useTransform(scrollYProgress, [0, 1], [0, -200]);  
  return (
    <section ref={targetRef} className="relative h-[150vh] bg-black-900">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex w-[300vw] flex-col items-center">
          {/* Carousel Items */}
          <div className="flex w-[300vw]">
            <div className=" w-[300vw] h-[100vh] p-24 flex flex-row relative">
              {/* Earth info A */}
              <div className="flex flex-row w-[30vw] items-center">
                <motion.div style={{ y: yEarth }}>
                  <img src={Earth} className="h-[450px] w-[450px] floatingA" />
                </motion.div>
              </div>  

              <div className="ml-12 flex flex-col w-[15vw]">
                <ShinyText 
                  className="tracking-widest underline text-white font-orbitron text-2xl" 
                  text="Planet earth" 
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
                    <ScrambledText text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."  className="font-mono text-[#B2B5B8] text-m"/>
                  </li>
                </ul>
              </div>
              {/* Earth info B */}

              <div className="flex flex-row w-[30vw] items-center">
                <motion.div style={{ y: yEarthB }}>
                  <img src={Earth} className="h-[300px] w-[300px] ml-12 floatingB" />
                </motion.div>
              </div>

              <motion.div
                className="w-[200px] h-[400px] floatingA"
                style={{ y: yMoon }}
              >
                <Spline scene="https://prod.spline.design/LzhVNa1synAwhP-C/scene.splinecode" />
              </motion.div>

              <div className="ml-12 flex flex-col w-[15vw]">
                <ShinyText 
                  className="tracking-widest underline text-white font-orbitron text-2xl" 
                  text="Planet earth" 
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
                </ul>
              </div>
              {/* Earth info C */}
              <div className="h-[80vh] w-[30vw] ml-12">
              <div className="flex flex-row w-[40vw] ml-20 items-center">
                <motion.div style={{ y: yEarthB }}>
                  <img src={Earth} className="h-[400px] w-[400px] floatingA" />
                </motion.div>
              </div>
              <motion.div
                className="flex items-end w-[200px] h-[400px]"
                style={{ y: yMoon }}
              >
                <Spline scene="https://prod.spline.design/LzhVNa1synAwhP-C/scene.splinecode"/>
              </motion.div>
                            </div>
              <div className="ml-12 flex flex-col w-[15vw]">
                <ShinyText 
                  className="tracking-widest underline text-white font-orbitron text-2xl" 
                  text="Planet earth" 
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
                </ul>
              </div>
              {/* Earth info D */}
              <div className="absolute bottom-[30vh] left-[170vw] flex flex-row w-[70vw] items-center">
                <motion.div style={{ y: yEarthB }}>
                    <img src={Earth} className="h-[95%] w-[95%]"/>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EarthCarousel;