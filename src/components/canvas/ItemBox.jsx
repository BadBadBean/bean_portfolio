import { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import {
  Float,
  Decal,
  Preload,
  useTexture,
  Stars,
} from '@react-three/drei';
import * as THREE from 'three';
import Loader from '../Loader';

const ItemBox = ({ imgUrl, color = '#88ccff' }) => {
  const texture = useTexture(imgUrl);
  const meshRef = useRef();
  const lightRef = useRef();

  // Rotation & pulsation
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.8;
    }

    if (lightRef.current) {
      const time = state.clock.getElapsedTime();
      lightRef.current.intensity = 1.5 + Math.sin(time * 4) * 0.5;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.2} />
      <spotLight
        ref={lightRef}
        position={[5, 5, 5]}
        angle={0.3}
        penumbra={1}
        intensity={1.5}
        castShadow
        color="#ffffff"
      />
      <Stars radius={50} depth={20} count={50} factor={4} fade />

      <mesh ref={meshRef} castShadow receiveShadow>
        {/* Boîte avec couleur */}
        <boxGeometry args={[3, 3, 3]} />
        <meshStandardMaterial
          color={color}
          metalness={0.3}
          roughness={0.4}
        />

        {/* Décals (icônes) sur chaque face */}
        <Decal
          map={texture}
          position={[0, 0, 1.5]}
          rotation={[0, 0, 0]}
          scale={2}
        />
        <Decal
          map={texture}
          position={[0, 0, -1.5]}
          rotation={[0, Math.PI, 0]}
          scale={1.5}
        />
        <Decal
          map={texture}
          position={[1.5, 0, 0]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={1.5}
        />
        <Decal
          map={texture}
          position={[-1.5, 0, 0]}
          rotation={[0, Math.PI / 2, 0]}
          scale={1.5}
        />
        <Decal
          map={texture}
          position={[0, 1.5, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={1.5}
        />
        <Decal
          map={texture}
          position={[0, -1.5, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={1.5}
        />
      </mesh>
    </Float>
  );
};

const ItemBoxCanvas = ({ icon, color }) => {
  return (
    <Canvas frameloop="always" gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<Loader />}>
        <ItemBox imgUrl={icon} color={color} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ItemBoxCanvas;
