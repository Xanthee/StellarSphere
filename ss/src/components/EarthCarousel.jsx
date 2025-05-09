import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-200%"]);

  return (
    <section ref={targetRef} className="relative h-[500vh] bg-neutral-900">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          <div className="flex flex-row justify-around">
            <div className="w-[3000px] bg-blue-900 text-6xl">hello</div>
            <div className="w-[3000px] bg-red-900 text-6xl">hello</div>
            <div className="w-[3000px] bg-green-900 text-6xl">hello</div>
            <div className="w-[3000px] bg-yellow-900 text-6xl">hello</div>
            <div className="w-[3000px] bg-orange-900 text-6xl">hello</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HorizontalScrollCarousel;