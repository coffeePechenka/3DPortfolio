import { PointMaterial, Points, Preload } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import React, { Suspense, useRef } from "react";
import * as random from "maath/random/dist/maath-random.esm";

function Stars(props) {
  const ref = useRef();
  
  // Генерация 5000 точек (x, y, z) => 15000 значений
  const sphere = random.inSphere(new Float32Array(15000), { radius: 1.2 });

  // Анимация вращения звезд
  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10
    ref.current.rotation.y -= delta / 10
  });

  return (
    <group>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial 
          transparent
          color="#f272c8"
          size={0.002}
          sizeAttenuation
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

const StarsCanvas = () => {
  return (
    <div className="w-full h-full absolute inset-0 z-[-1]">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <Stars />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;
