"use client";

import { useRef, useMemo, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera, RoundedBox } from "@react-three/drei";
import * as THREE from "three";

// ルービックキューブの色定義 - 銀色メタリック
const CUBE_COLORS = {
  front: "#e8e8e8",   // ライトシルバー
  back: "#d0d0d0",    // シルバー
  top: "#f5f5f5",     // ブライトシルバー
  bottom: "#c8c8c8",  // ダークシルバー
  right: "#e0e0e0",   // シルバーグレー
  left: "#d8d8d8",    // ミディアムシルバー
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
        color: x === 1 ? CUBE_COLORS.right : "#b0b0b0",
        metalness: 0.9,
        roughness: 0.1,
      })
    );
    
    // Left face (x = -1)
    mats.push(
      new THREE.MeshStandardMaterial({
        color: x === -1 ? CUBE_COLORS.left : "#b0b0b0",
        metalness: 0.9,
        roughness: 0.1,
      })
    );
    
    // Top face (y = 1)
    mats.push(
      new THREE.MeshStandardMaterial({
        color: y === 1 ? CUBE_COLORS.top : "#b0b0b0",
        metalness: 0.9,
        roughness: 0.1,
      })
    );
    
    // Bottom face (y = -1)
    mats.push(
      new THREE.MeshStandardMaterial({
        color: y === -1 ? CUBE_COLORS.bottom : "#b0b0b0",
        metalness: 0.9,
        roughness: 0.1,
      })
    );
    
    // Front face (z = 1)
    mats.push(
      new THREE.MeshStandardMaterial({
        color: z === 1 ? CUBE_COLORS.front : "#b0b0b0",
        metalness: 0.9,
        roughness: 0.1,
      })
    );
    
    // Back face (z = -1)
    mats.push(
      new THREE.MeshStandardMaterial({
        color: z === -1 ? CUBE_COLORS.back : "#b0b0b0",
        metalness: 0.9,
        roughness: 0.1,
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
        
        {/* ライティング - メタリック反射用 */}
        <ambientLight intensity={0.3} />
        <directionalLight
          position={[10, 10, 5]}
          intensity={2.0}
          color="#ffffff"
          castShadow
          shadow-mapSize={[2048, 2048]}
        />
        <directionalLight 
          position={[-10, -10, -5]} 
          intensity={1.0}
          color="#f0f0f0"
        />
        <pointLight 
          position={[0, 15, 0]} 
          intensity={1.5}
          color="#ffffff"
        />
        <pointLight 
          position={[10, -5, 10]} 
          intensity={0.8}
          color="#e0e0e0"
        />
        <pointLight 
          position={[-10, 5, -10]} 
          intensity={0.6}
          color="#f5f5f5"
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