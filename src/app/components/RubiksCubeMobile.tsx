"use client";

import { useRef, useMemo, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import * as THREE from "three";

// ルービックキューブの色定義
const CUBE_COLORS = {
  front: "#ff0000",  // 赤
  back: "#ff8800",   // オレンジ
  top: "#ffffff",    // 白
  bottom: "#ffff00", // 黄
  right: "#00ff00",  // 緑
  left: "#0000ff",   // 青
};

// 簡略化された個別のキューブピース（モバイル用）
function SimpleCubePiece({ position }: { position: [number, number, number] }) {
  const materials = useMemo(() => {
    const [x, y, z] = position;
    
    return [
      new THREE.MeshBasicMaterial({ color: x === 1 ? CUBE_COLORS.right : "#1a1a1a" }),
      new THREE.MeshBasicMaterial({ color: x === -1 ? CUBE_COLORS.left : "#1a1a1a" }),
      new THREE.MeshBasicMaterial({ color: y === 1 ? CUBE_COLORS.top : "#1a1a1a" }),
      new THREE.MeshBasicMaterial({ color: y === -1 ? CUBE_COLORS.bottom : "#1a1a1a" }),
      new THREE.MeshBasicMaterial({ color: z === 1 ? CUBE_COLORS.front : "#1a1a1a" }),
      new THREE.MeshBasicMaterial({ color: z === -1 ? CUBE_COLORS.back : "#1a1a1a" }),
    ];
  }, [position]);

  return (
    <mesh position={position} material={materials}>
      <boxGeometry args={[0.95, 0.95, 0.95]} />
    </mesh>
  );
}

// モバイル用ルービックキューブ
function MobileRubiksCubeModel() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.2;
    }
  });

  const cubes = useMemo(() => {
    const pieces = [];
    for (let x = -1; x <= 1; x++) {
      for (let y = -1; y <= 1; y++) {
        for (let z = -1; z <= 1; z++) {
          if (x === 0 && y === 0 && z === 0) continue;
          pieces.push(
            <SimpleCubePiece 
              key={`${x}-${y}-${z}`} 
              position={[x, y, z]} 
            />
          );
        }
      }
    }
    return pieces;
  }, []);

  return <group ref={groupRef}>{cubes}</group>;
}

export default function RubiksCubeMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener("resize", checkMobile);
    
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full">
      <Canvas
        dpr={isMobile ? [1, 1] : [1, 2]}
        gl={{ 
          antialias: !isMobile,
          alpha: true,
          powerPreference: isMobile ? "low-power" : "high-performance"
        }}
      >
        <PerspectiveCamera 
          makeDefault 
          position={[5, 5, 5]} 
          fov={45}
        />
        
        {/* シンプルなライティング（モバイル用） */}
        <ambientLight intensity={0.8} />
        <directionalLight position={[5, 5, 5]} intensity={0.5} />
        
        <MobileRubiksCubeModel />
      </Canvas>
    </div>
  );
}