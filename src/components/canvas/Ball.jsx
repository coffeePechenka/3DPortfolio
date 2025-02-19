import { Decal, Float, OrbitControls, Preload, useTexture } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import React, { useRef, Suspense, useState } from "react";
import Loader from "../Loader";

const Ball = ({ imgUrl }) => {
  const [decal] = useTexture([imgUrl]);
  const meshRef = useRef();

  const maxRotation = Math.PI / 10; // Ограничение угла (30°)
  const speed = .5; // Скорость анимации

  useFrame(({ clock }) => {
    if (meshRef.current) {
      // Плавный поворот в пределах -30° ... 30°
      meshRef.current.rotation.y = Math.sin(clock.elapsedTime * speed) * maxRotation;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={2}>
      <ambientLight intensity={1} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh ref={meshRef} castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial color="#fff8eb" polygonOffset polygonOffsetFactor={-5} flatShading />
        <Decal position={[0, 0, 1]} rotation={[0, 0, 0]} flatShading map={decal} />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }) => {
  return (
    <Canvas frameloop="always" gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<Loader />}>
        <OrbitControls enableZoom={false} enablePan={false} />
        <Ball imgUrl={icon} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
