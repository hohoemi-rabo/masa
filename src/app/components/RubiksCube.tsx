"use client";

import { useRef, useMemo, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
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

// 個別のキューブピース
function CubePiece({ position }: { position: [number, number, number] }) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  // 各面の色を決定
  const materials = useMemo(() => {
    const mats = [];
    const [x, y, z] = position;
    
    // Right face (x = 1)
    mats.push(
      new THREE.MeshStandardMaterial({
        color: x === 1 ? CUBE_COLORS.right : "#1a1a1a",
      })
    );
    
    // Left face (x = -1)
    mats.push(
      new THREE.MeshStandardMaterial({
        color: x === -1 ? CUBE_COLORS.left : "#1a1a1a",
      })
    );
    
    // Top face (y = 1)
    mats.push(
      new THREE.MeshStandardMaterial({
        color: y === 1 ? CUBE_COLORS.top : "#1a1a1a",
      })
    );
    
    // Bottom face (y = -1)
    mats.push(
      new THREE.MeshStandardMaterial({
        color: y === -1 ? CUBE_COLORS.bottom : "#1a1a1a",
      })
    );
    
    // Front face (z = 1)
    mats.push(
      new THREE.MeshStandardMaterial({
        color: z === 1 ? CUBE_COLORS.front : "#1a1a1a",
      })
    );
    
    // Back face (z = -1)
    mats.push(
      new THREE.MeshStandardMaterial({
        color: z === -1 ? CUBE_COLORS.back : "#1a1a1a",
      })
    );
    
    return mats;
  }, [position]);

  return (
    <mesh ref={meshRef} position={position} material={materials}>
      <boxGeometry args={[0.95, 0.95, 0.95]} />
    </mesh>
  );
}

// ルービックキューブ全体
function RubiksCubeModel() {
  const groupRef = useRef<THREE.Group>(null);

  // 自動回転アニメーション
  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.3;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  // 3x3x3のキューブを生成
  const cubes = useMemo(() => {
    const pieces = [];
    for (let x = -1; x <= 1; x++) {
      for (let y = -1; y <= 1; y++) {
        for (let z = -1; z <= 1; z++) {
          // 中心のキューブはスキップ（ルービックキューブには中心がない）
          if (x === 0 && y === 0 && z === 0) continue;
          pieces.push(
            <CubePiece 
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

export default function RubiksCube() {
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
        shadows={!isMobile}
        dpr={isMobile ? [1, 1] : [1, 2]}
        gl={{ 
          antialias: !isMobile,
          alpha: true,
          powerPreference: isMobile ? "low-power" : "high-performance"
        }}
      >
        {/* カメラ設定 */}
        <PerspectiveCamera 
          makeDefault 
          position={[5, 5, 5]} 
          fov={45}
        />
        
        {/* ライティング */}
        <ambientLight intensity={0.5} />
        <directionalLight
          position={[10, 10, 5]}
          intensity={1}
          castShadow
          shadow-mapSize={[1024, 1024]}
        />
        <directionalLight 
          position={[-10, -10, -5]} 
          intensity={0.3} 
        />
        <pointLight 
          position={[0, 10, 0]} 
          intensity={0.5} 
        />
        
        {/* ルービックキューブ */}
        <RubiksCubeModel />
        
        {/* OrbitControls（タッチ/マウス操作用） */}
        <OrbitControls 
          enableZoom={false}
          enablePan={false}
          autoRotate={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 3}
        />
      </Canvas>
    </div>
  );
}