"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float, Icosahedron, Torus } from "@react-three/drei";
import { MotionValue } from "framer-motion";
import * as THREE from "three";

interface Story3DSceneProps {
  scrollYProgress: MotionValue<number>;
}

function CoreNode({ scrollYProgress }: Story3DSceneProps) {
  const meshRef = useRef<THREE.Group>(null);
  const outerRingRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (!meshRef.current || !outerRingRef.current) return;
    
    const scroll = scrollYProgress.get();
    const time = performance.now() * 0.001;
    meshRef.current.rotation.y = scroll * Math.PI * 6 + (time * 0.2);
    meshRef.current.rotation.x = scroll * Math.PI * 2 + (time * 0.1);
    outerRingRef.current.rotation.x = scroll * Math.PI * -4 + (time * 0.3);
    outerRingRef.current.rotation.z = scroll * Math.PI * 2 + (time * 0.2);
  });

  return (
    <group>
      <group ref={meshRef}>
        <Icosahedron args={[1.5, 1]}>
          <meshBasicMaterial 
            color="#a855f7" 
            wireframe={true} 
            transparent 
            opacity={0.15} 
          />
        </Icosahedron>
        <Icosahedron args={[2.2, 0]}>
          <meshBasicMaterial 
            color="#c084fc" 
            wireframe={true} 
            transparent 
            opacity={0.25} 
          />
        </Icosahedron>
      </group>
      <Torus args={[3.5, 0.01, 16, 100]} ref={outerRingRef}>
        <meshBasicMaterial 
          color="#3b82f6" 
          transparent
          opacity={0.4}
        />
      </Torus>
    </group>
  );
}

export function Story3DScene({ scrollYProgress }: Story3DSceneProps) {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-30 md:opacity-50">
      <div className="sticky top-0 w-full h-screen flex items-center justify-center overflow-hidden">
        <div className="w-full h-full">
          <Canvas camera={{ position: [0, 0, 10], fov: 35 }}>
          <Float speed={2} rotationIntensity={0.5} floatIntensity={1.5}>
            <CoreNode scrollYProgress={scrollYProgress} />
          </Float>
        </Canvas>
      </div>
    </div>
    </div>
  );
}
