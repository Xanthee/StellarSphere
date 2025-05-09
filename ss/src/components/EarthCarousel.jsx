import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';
import Earth from '../assets/4BEarth.png';
import ParticleBackground from './particleBackground.jsx';

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });
  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-66.66%']);
  const [activeIndex, setActiveIndex] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const index = Math.min(Math.floor(latest * 3), 2);
    setActiveIndex(index);
  });

  const timelineEvents = [
    {
      id: 1,
      content: (
        <div className="flex flex-row">
        <motion.img
          src={Earth}
          alt="Earth 1"
          className="w- object-contain"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        />
        <h1 className="text-white">
          hello
        </h1>
        </div>
      ),
      label: 'Earth 4 billion years ago',
    },
    {
      id: 2,
      content: (
        <motion.img
          src={Earth}
          alt="Earth 2"
          className="w-64 object-contain"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        />
      ),
      label: 'Milestone 2',
    },
    {
      id: 3,
      content: (
        <motion.img
          src={Earth}
          alt="Earth 3"
          className="w-64 object-contain"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        />
      ),
      label: 'Milestone 3',
    },
  ];

  return (

    <section ref={targetRef} className="relative h-[200vh] bg-neutral-900">
      <ParticleBackground/>

      <div className="sticky top-0 flex h-screen items-center overflow-hidden">

        <motion.div style={{ x }} className="flex w-[300vw] flex-col items-center">
          
          {/* Carousel Items */}
          <div className="flex w-[300vw]">
            {timelineEvents.map((event) => (
              <div key={event.id} className="w-screen flex justify-center items-center">
                <div className="text-center">
                  {event.content}
                  <div className="mt-4 text-sm text-white/80">{event.label}</div>
                </div>
              </div>
            ))}
          </div>
          {/* Timeline */}
          <div className="w-[300vw] h-16 relative mt-4">



            <div className="absolute top-1/4 left-0 right-0 h-1 bg-white/50 transform -translate-y-1/2"></div>
            <div className="absolute inset-0">
              {Array.from({ length: 3 }).map((_, index) => (
                <motion.svg
                  key={index}
                  className="absolute w-4 h-4"
                  style={{
                    left: `${((index + 0.5) / 3) * 100}%`,
                    transform: 'translateX(-50%)',
                  }}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  animate={{
                    scale: index === activeIndex ? 3 : 3,
                    fill: 'rgb(255, 255, 255)', // All stars fully white
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <path
                    d="M12 2 L15 9 L22 9 L17 14 L19 21 L12 17 L5 21 L7 14 L2 9 L9 9 Z"
                  />
                </motion.svg>
              ))}
            </div>
          </div>



        </motion.div>

      </div>
    </section>
  );
};

export default HorizontalScrollCarousel;