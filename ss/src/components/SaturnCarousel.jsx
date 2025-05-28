import React, { Suspense } from 'react';
import { Canvas, useLoader, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Saturn } from './models/Saturn';
import { Starfield } from './Starfield';

export default function SaturnCarousel() {



  return (
    <section className="relative h-screen bg-black">
      <Canvas  camera={{ position: [0, 0, 10], fov: 75, near: 0.1, far: 1000 }} className="h-[100vh] w-[100vw]">

        <ambientLight intensity={1.5} />
        <OrbitControls />
        <Suspense fallback={null}>
          <Saturn />
          <Starfield />
        </Suspense>
      </Canvas>
    </section>
  );
}
