"use client";

import { useRef, useMemo, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera, RoundedBox } from "@react-three/drei";
import * as THREE from "three";

// ルービックキューブの色定義 - 青のグラデーション
const CUBE_COLORS = {
  front: "#0d47a1",  // ダークブルー
  back: "#1565c0",   // ブルー
  top: "#1976d2",    // ライトブルー
  bottom: "#1e88e5", // ブライトブルー
  right: "#2196f3",  // スカイブルー
  left: "#42a5f5",   // ライトスカイブルー
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
        color: x === 1 ? CUBE_COLORS.right : "#0a1929",
        metalness: 0.4,
        roughness: 0.3,
      })
    );
    
    // Left face (x = -1)
    mats.push(
      new THREE.MeshStandardMaterial({
        color: x === -1 ? CUBE_COLORS.left : "#0a1929",
        metalness: 0.4,
        roughness: 0.3,
      })
    );
    
    // Top face (y = 1)
    mats.push(
      new THREE.MeshStandardMaterial({
        color: y === 1 ? CUBE_COLORS.top : "#0a1929",
        metalness: 0.4,
        roughness: 0.3,
      })
    );
    
    // Bottom face (y = -1)
    mats.push(
      new THREE.MeshStandardMaterial({
        color: y === -1 ? CUBE_COLORS.bottom : "#0a1929",
        metalness: 0.4,
        roughness: 0.3,
      })
    );
    
    // Front face (z = 1)
    mats.push(
      new THREE.MeshStandardMaterial({
        color: z === 1 ? CUBE_COLORS.front : "#0a1929",
        metalness: 0.4,
        roughness: 0.3,
      })
    );
    
    // Back face (z = -1)
    mats.push(
      new THREE.MeshStandardMaterial({
        color: z === -1 ? CUBE_COLORS.back : "#0a1929",
        metalness: 0.4,
        roughness: 0.3,
      })
    );
    
    return mats;
  }, [position]);

  return (
    <RoundedBox
      ref={meshRef}
      position={position}
      material={materials}
      args={[0.95, 0.95, 0.95]}
      radius={0.08}
      smoothness={4}
    >
      {/* Material is passed as prop */}
    </RoundedBox>
  );
}

// ルービックキューブ全体
function RubiksCubeModel() {
  const groupRef = useRef<THREE.Group>(null);

  // 自動回転アニメーション - 360度回転
  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.3;  // Y軸回転（水平）
      groupRef.current.rotation.x += delta * 0.2;  // X軸回転（垂直）- 360度回転
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
        {/* カメラ設定 - 少し引いてバランス良く */}
        <PerspectiveCamera 
          makeDefault 
          position={[4.8, 4.8, 4.8]} 
          fov={36}
        />
        
        {/* ライティング - 青のグラデーション */}
        <ambientLight intensity={0.6} />
        <directionalLight
          position={[10, 10, 5]}
          intensity={1.2}
          color="#2196f3"
          castShadow
          shadow-mapSize={[1024, 1024]}
        />
        <directionalLight 
          position={[-10, -10, -5]} 
          intensity={0.6}
          color="#1976d2"
        />
        <pointLight 
          position={[0, 10, 0]} 
          intensity={0.8}
          color="#64b5f6"
        />
        <pointLight 
          position={[5, -5, 5]} 
          intensity={0.5}
          color="#42a5f5"
        />
        
        {/* ルービックキューブ */}
        <RubiksCubeModel />
        
        {/* OrbitControls（タッチ/マウス操作用） - 360度回転可能 */}
        <OrbitControls 
          enableZoom={false}
          enablePan={false}
          autoRotate={false}
          maxPolarAngle={Math.PI}
          minPolarAngle={0}
          enabled={true}
          enableRotate={true}
        />
      </Canvas>
    </div>
  );
}