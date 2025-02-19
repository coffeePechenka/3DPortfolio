import { Html, OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useState } from "react";
import Loader from "../Loader";




function Computers({ isMobile }) {
  const computer = useGLTF('/desktop_pc/scene.gltf')

  return (
    <mesh>
      <hemisphereLight 
      intensity={2} 
      groundColor="black" 
      />
      <pointLight intensity={1} />
      <spotLight 
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive 
        object={computer.scene}
        scale={isMobile ? 0.7 : 0.8}
        position={isMobile ? [0, -3, -2.2] : [0, -2.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
        
      />
    </mesh>
  );
}

export default function ComputerCanvas() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 700px)')

      setIsMobile(mediaQuery.matches)

      const handleMediaQueryChange = (event) => {
        setIsMobile(event.matches)
      }

      mediaQuery.addEventListener('change', handleMediaQueryChange)

      return () => {
        mediaQuery.removeEventListener('change', handleMediaQueryChange)
      }
  }, [])

  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25}}
      gl={{preserveDrawingBuffer: true}}
    >
        <Suspense fallback={<Loader />}>
          <OrbitControls 
          enableZoom={false}
          enablePan={false} 
          maxPolarAngle={Math.PI / 2} 
          minPolarAngle={Math.PI / 2} 
          />
          <Computers isMobile={isMobile}/>
        </Suspense>

        <Preload all />
    </Canvas>
  )
}
