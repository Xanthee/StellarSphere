import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';
import Spline from '@splinetool/react-spline';

import './Styles/style.css';
import Earth from '../assets/4BEarth.png';

const StarCarousel = () => {

  // Tracking scroll progress
  const targetRef = useRef(null);

  // Using Framer plugin to track horizontal scroll progress
  const { scrollYProgress } = useScroll({ target: targetRef });

    // Scroll based animations 
  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-30.66%']);
  const yStar = useTransform(scrollYProgress, [0, 1], [0, -20]); 

  return (
    <section ref={targetRef} className="relative h-[150vh] bg-black-900">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex w-[300vw] flex-col items-center">
          
          {/* MAIN CAROUSEL CONTENT */}
          <div className="flex w-[300vw] p-24 flex flex-row relative">

            {/* STAR A */}
            <div className="flex flex-col w-[30vw] items-center mr-[10vw]">
              <motion.div style={{ y: yStar }}>
                <img src={Earth} className="h-[450px] w-[450px] mb-12 floatingA" />
              </motion.div>
              <div className="text-white card">
                <h1 className="text-3xl text-white">hello</h1>
              </div>
            </div>  
            
            {/* STAR B */}
            <div className="flex flex-col w-[30vw] items-center mr-[10vw]">
              <motion.div style={{ y: yStar }}>
                <img src={Earth} className="h-[450px] w-[450px] mb-12 floatingB" />
              </motion.div>
              <h1 className="text-white card">hello</h1>
            </div>  

            {/* STAR C */}
            <div className="flex flex-col w-[30vw] items-center">
              <motion.div style={{ y: yStar }}>
                <img src={Earth} className="h-[450px] w-[450px] mb-12 floatingA" />
              </motion.div>
              <h1 className="text-white card">hello</h1>
            </div>  

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StarCarousel;