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
  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-28%']);
  const yStar = useTransform(scrollYProgress, [0, 1], [0, -20]); 

  return ( 
    <section ref={targetRef} className="relative h-[150vh]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex flex-col items-center">
          
          {/* MAIN CAROUSEL CONTENT */}
          <div className="flex p-24 flex-row">

            {/* STAR A */}
            <div className="flex flex-col h-[80vh] w-[450px] p-12 items-center mr-[10vw] floatingUp">
              <Spline scene="https://prod.spline.design/XaQc9AIynl4Oi3-x/scene.splinecode" />
              <div className="card flex flex-col mt-10">
                <h1 className="text-3xl font-orbitron uppercase text-white mb-4">Ceres</h1>
                <span className="text-m font-mono text-white mb-4">Ceres is the largest object in the asteroid belt between Mars and Jupiter and the only dwarf planet located in the inner solar system. </span>
                <span className="text-m font-mono text-white">Ceres a target for studying prebiotic chemistry and the potential for life in the solar system.</span>
              </div>
            </div>  

            {/* STAR B */}
            <div className="flex flex-col h-[80vh] w-[450px] p-12 items-center mr-[10vw] floatingDown">
              <Spline scene="https://prod.spline.design/0Pp2WPTLvmAU7I9X/scene.splinecode" />
              <div className="card flex flex-col mt-10">
                <h1 className="text-3xl font-orbitron uppercase text-white mb-4">Vesta</h1>
                <span className="text-m font-mono text-white mb-4">the second-largest object in the asteroid belt between Mars and Jupiter, and one of the most massive asteroids in the solar system. </span>
                <span className="text-m font-mono text-white">Vesta is notable for its brightness, being the only asteroid sometimes visible to the naked eye from Earth.</span>
              </div>
            </div>  

            {/* STAR C */}
            <div className="flex flex-col h-[80vh] w-[450px] p-12 items-center mr-[10vw] floatingUp">
              <Spline scene="https://prod.spline.design/g5yrs242foRKdRSy/scene.splinecode" />
              <div className="card flex flex-col mt-10">
                <h1 className="text-3xl font-orbitron uppercase text-white mb-4">Makemake</h1>
                <span className="text-m font-mono text-white mb-4">Makemake is a dwarf planet in the Kuiper Belt, a region of icy bodies beyond Neptune. It’s one of five dwarf planets recognized by the International Astronomical Union.</span>
                <span className="text-m font-mono text-white"> Named after the Rapa Nui god of fertility, Makemake is notable for its extreme distance and cold environment.</span>
              </div>
            </div>  

            {/* STAR C */}
            <div className="flex flex-col h-[80vh] w-[450px] p-12 items-center mr-[10vw] floatingDown">
              <Spline scene="https://prod.spline.design/MyQnPlUhV-G9qCGr/scene.splinecode" />
              <div className="card flex flex-col mt-10">
                <h1 className="text-3xl font-orbitron uppercase text-white mb-4">Eris</h1>
                <span className="text-m font-mono text-white mb-4">Eris is a dwarf planet in the scattered disc, a distant region of the solar system beyond the Kuiper Belt.</span>
                <span className="text-m font-mono text-white">Eris played a pivotal role in redefining the term "planet," leading to the International Astronomical Union's 2006 decision to classify it, Pluto, and others as dwarf planets.</span>
              </div>
            </div>  

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StarCarousel;