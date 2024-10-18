"use client"

import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

function WaveAnimation() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(time / 4);
      meshRef.current.rotation.y = Math.sin(time / 2);
      const positions = meshRef.current.geometry.attributes.position;
      for (let i = 0; i < positions.count; i++) {
        const x = positions.getX(i);
        const y = positions.getY(i);
        const z = Math.sin((x + time) * 0.3) * 0.4 + Math.sin((y + time) * 0.5) * 0.4;
        positions.setZ(i, z);
      }
      positions.needsUpdate = true;
    }
  });

  return (
    <mesh ref={meshRef}>
      <planeGeometry args={[10, 10, 100, 100]} />
      <meshStandardMaterial color="#4338ca" wireframe />
    </mesh>
  );
}

export default function Home() {
  return (
    <div className="relative h-screen">
      <Canvas className="absolute inset-0">
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <WaveAnimation />
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-4 text-white">Welcome to VoiceNFT</h1>
          <p className="text-xl mb-8 text-gray-200">Discover and trade unique voice NFTs</p>
          <Link href="/marketplace">
            <Button size="lg" className="mr-4">Explore Marketplace</Button>
          </Link>
          <Link href="/create">
            <Button size="lg" variant="outline">Create NFT</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}