import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';
import ParticleBackground from './ParticleBackground';
import Spline from '@splinetool/react-spline';
import './style.css';
import Earth from '../assets/4BEarth.png';

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef });

  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-66.66%']);
  const yEarth = useTransform(scrollYProgress, [0, 1], [0, 200]); 
  const yEarthB = useTransform(scrollYProgress, [0, 1], [0, 150]);  
  const yMoon = useTransform(scrollYProgress, [0, 1], [0, -300]);  
  return (
    <section ref={targetRef} className="relative h-[200vh] bg-black-900">
      <ParticleBackground/>
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex w-[300vw] flex-col items-center">
          {/* Carousel Items */}
          <div className="flex w-[300vw]">
            <div className=" w-[300vw] h-[100vh] p-24 flex flex-row relative">
              {/* Earth info A */}
              <div className="flex flex-row w-[70vw] items-center">
                <motion.div style={{ y: yEarth }}>
                  <img src={Earth} className="" />
                </motion.div>
                <div className="card ml-12 flex flex-col">
                  <h1 className="text-white text-xl">
                    4 billion years ago
                  </h1>
                  <p className="text-white text-m">
                    The surface was still extremely hot, with volcanic activity, molten rock, and frequent asteroid impacts.
                  </p>
                </div>
              </div>      
              {/* Earth info B */}
              <div className="absolute bottom-1/3 left-[85vw] flex flex-row w-[70vw] items-center">
                <motion.div style={{ y: yEarthB }}>
                  <img src={Earth} className="h-[400px] w-[400px]" />
                </motion.div>
              </div>
              <motion.div
                className="absolute bottom-0 left-1/4 transform w-[200px] h-[400px]"
                style={{ y: yMoon }}
              >
                <Spline scene="https://prod.spline.design/LzhVNa1synAwhP-C/scene.splinecode" />
              </motion.div>
              <div className="card absolute left-[40vw] ml-12 flex flex-col">
                <h1 className="text-white text-xl">
                  4 billion years ago
                </h1>
                <p className="text-white text-m">
                  The surface was still extremely hot, with volcanic activity, molten rock, and frequent asteroid impacts.
                </p>
              </div>
              {/* Earth info C */}
              <div className="absolute bottom-1/3 left-[150vw] flex flex-row w-[70vw] items-center">
                <motion.div style={{ y: yEarthB }}>
                  <img src={Earth} className="h-[300px] w-[300px]" />
                </motion.div>
              </div>
              <motion.div
                className="absolute bottom-[3/4] left-[145vw] transform w-[200px] h-[400px]"
                style={{ y: yMoon }}
              >
                <Spline scene="https://prod.spline.design/LzhVNa1synAwhP-C/scene.splinecode" />
              </motion.div>
              <div className="card absolute left-[100vw] ml-12 flex flex-col">
                <h1 className="text-white text-xl">
                  4 billion years ago
                </h1>
                <p className="text-white text-m">
                  The surface was still extremely hot, with volcanic activity, molten rock, and frequent asteroid impacts.
                </p>
              </div>
              {/* Earth info D */}
              <div className="absolute bottom-[20vh] left-[270vw] flex flex-row w-[70vw] items-center">
                <motion.div style={{ y: yEarthB }}>
                    <img src={Earth} className="h-[800px] w-[800px]" />
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HorizontalScrollCarousel;