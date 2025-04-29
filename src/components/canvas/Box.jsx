import React, { Suspense, useRef, useEffect, useState } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
  RoundedBox,
} from '@react-three/drei';
import * as THREE from 'three';
import Loader from '../Loader';


const Box = ({ imgUrl }) => {
  // Attendre que la texture soit complètement chargée avant de l'appliquer
  const [textureLoaded, setTextureLoaded] = useState(false);
  const [decalTexture] = useTexture([imgUrl], (textures) => {
    // Callback appelé quand la texture est chargée
    setTextureLoaded(true);
  });
  
  const meshRef = useRef();
  const cubeSize = 3.5;
  const faceOffset = cubeSize / 2; // Position exacte du centre de chaque face
  
  // Ajuster l'échelle des decals pour s'adapter à la taille du cube
  const decalScale = [3.4, 3.4, 3.4]; // Légèrement plus petit que la face pour éviter les débordements
  
  const glowColor = new THREE.Color('#0099ff');

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.5;

      // Effet pulsant
      const t = performance.now() * 0.001;
      meshRef.current.material.emissiveIntensity = 0.4 + Math.sin(t * 4) * 0.2;
    }
  });

  // S'assurer que les textures sont bien chargées
  useEffect(() => {
    if (decalTexture) {
      decalTexture.needsUpdate = true;
      
      // Optimiser la texture pour les decals
      decalTexture.generateMipmaps = true;
      decalTexture.minFilter = THREE.LinearMipMapLinearFilter;
      decalTexture.magFilter = THREE.LinearFilter;
      decalTexture.anisotropy = 16;
    }
  }, [decalTexture]);

  return (
    <>
      <ambientLight intensity={0.2} />
      <directionalLight position={[5, 5, 5]} intensity={1.5} color={'#437ec4'} />
      <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
        <RoundedBox
          ref={meshRef}
          args={[cubeSize, cubeSize, cubeSize]}
          radius={0.25}
          smoothness={1}
          castShadow
          receiveShadow
        >
          <meshStandardMaterial
            color="#5863d7"
            emissive={glowColor}
            emissiveIntensity={0.2}
            metalness={0
            }
            roughness={0.9}
            polygonOffset
            polygonOffsetFactor={5} // Augmenté pour éviter le z-fighting
          />
          
          {textureLoaded && (
            <>
              {/* Face avant (Z+) */}
              <Decal 
                position={[0, 0, faceOffset]} 
                rotation={[0, 0, 0]} 
                scale={decalScale}
                map={decalTexture}
                polygonOffset={true}
                polygonOffsetFactor={-1}
              />
              
              {/* Face arrière (Z-) */}
              <Decal 
                position={[0, 0, -faceOffset]} 
                rotation={[0, Math.PI, 0]} 
                scale={decalScale}
                map={decalTexture}
                polygonOffset={true}
                polygonOffsetFactor={-1}
              />
              
              {/* Face droite (X+) */}
              <Decal 
                position={[faceOffset, 0, 0]} 
                rotation={[0, Math.PI / 2, 0]} 
                scale={decalScale}
                map={decalTexture}
                polygonOffset={true}
                polygonOffsetFactor={-1}
              />
              
              {/* Face gauche (X-) */}
              <Decal 
                position={[-faceOffset, 0, 0]} 
                rotation={[0, -Math.PI / 2, 0]} 
                scale={decalScale}
                map={decalTexture}
                polygonOffset={true}
                polygonOffsetFactor={-1}
              />
              
              {/* Face supérieure (Y+) */}
              <Decal 
                position={[0, faceOffset, 0]} 
                rotation={[-Math.PI / 2, 0, 0]} 
                scale={decalScale}
                map={decalTexture}
                polygonOffset={true}
                polygonOffsetFactor={-1}
              />
              
              {/* Face inférieure (Y-) */}
              <Decal 
                position={[0, -faceOffset, 0]} 
                rotation={[Math.PI / 2, 0, 0]} 
                scale={decalScale}
                map={decalTexture}
                polygonOffset={true}
                polygonOffsetFactor={-1}
              />
            </>
          )}
        </RoundedBox>
      </Float>
    </>
  );
};

const BoxCanva = ({ icon }) => {
  return (
    <Canvas
      frameloop="always"
      gl={{ 
        preserveDrawingBuffer: true,
        antialias: true,
        powerPreference: 'high-performance'
      }}
      dpr={[1, 2]} // Optimisation pour différentes densités d'écran
    >
      <Suspense fallback={<Loader />}>
        <OrbitControls enableZoom={false} />
        <Box imgUrl={icon} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default BoxCanva;
