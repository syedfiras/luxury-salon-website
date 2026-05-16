// components/HeroScene.tsx
'use client'

import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Float, Text3D, Environment, Sparkles } from '@react-three/drei'
import * as THREE from 'three'

// Floating Salon Objects Component
const FloatingObjects = () => {
  const groupRef = useRef<THREE.Group>(null)
  const mouseX = useRef(0)
  const mouseY = useRef(0)

  useFrame((state) => {
    if (groupRef.current) {
      // Smooth follow mouse movement
      groupRef.current.rotation.y = THREE.MathUtils.lerp(
        groupRef.current.rotation.y,
        mouseX.current * 0.5,
        0.05
      )
      groupRef.current.rotation.x = THREE.MathUtils.lerp(
        groupRef.current.rotation.x,
        mouseY.current * 0.3,
        0.05
      )
    }
  })

  useMemo(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.current = (e.clientX / window.innerWidth) * 2 - 1
      mouseY.current = (e.clientY / window.innerHeight) * 2 - 1
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  // Scissors Model
  const Scissors = () => (
    <group position={[-2, 0.5, -1]}>
      <Float speed={2} rotationIntensity={1} floatIntensity={1}>
        <mesh castShadow receiveShadow>
          <boxGeometry args={[0.8, 0.1, 0.1]} />
          <meshStandardMaterial color="#D4AF37" metalness={0.8} roughness={0.2} />
        </mesh>
        <mesh position={[0.4, 0, 0]} castShadow>
          <boxGeometry args={[0.5, 0.05, 0.05]} />
          <meshStandardMaterial color="#D4AF37" metalness={0.8} roughness={0.2} />
        </mesh>
        <mesh position={[-0.2, 0.15, 0]} castShadow>
          <torusGeometry args={[0.15, 0.04, 16, 32]} />
          <meshStandardMaterial color="#D4AF37" metalness={0.9} roughness={0.1} />
        </mesh>
      </Float>
    </group>
  )

  // Hair Dryer Model
  const HairDryer = () => (
    <group position={[2, -0.2, -0.5]} rotation={[0.3, 0.5, 0]}>
      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.8}>
        <mesh castShadow>
          <cylinderGeometry args={[0.3, 0.4, 0.8, 32]} />
          <meshStandardMaterial color="#2A2A2A" metalness={0.7} roughness={0.3} />
        </mesh>
        <mesh position={[0.5, 0, 0]} castShadow>
          <cylinderGeometry args={[0.15, 0.2, 0.4, 32]} />
          <meshStandardMaterial color="#D4AF37" metalness={0.9} roughness={0.1} />
        </mesh>
        <mesh position={[-0.4, 0.2, 0]} castShadow>
          <torusGeometry args={[0.12, 0.05, 16, 32]} />
          <meshStandardMaterial color="#D4AF37" metalness={0.8} roughness={0.2} />
        </mesh>
      </Float>
    </group>
  )

  // Perfume Bottle
  const Perfume = () => (
    <group position={[-1, -0.5, 1]} rotation={[0.2, -0.3, 0.1]}>
      <Float speed={2.5} rotationIntensity={0.8} floatIntensity={1.2}>
        <mesh castShadow>
          <cylinderGeometry args={[0.25, 0.3, 0.6, 32]} />
          <meshStandardMaterial color="#D4AF37" metalness={0.6} roughness={0.2} transparent opacity={0.8} />
        </mesh>
        <mesh position={[0, 0.35, 0]} castShadow>
          <cylinderGeometry args={[0.12, 0.15, 0.2, 32]} />
          <meshStandardMaterial color="#D4AF37" metalness={0.9} roughness={0.1} />
        </mesh>
      </Float>
    </group>
  )

  // Makeup Brush
  const MakeupBrush = () => (
    <group position={[1.5, 1, 0.5]} rotation={[-0.2, 0.4, 0.3]}>
      <Float speed={1.8} rotationIntensity={0.6} floatIntensity={0.9}>
        <mesh castShadow>
          <cylinderGeometry args={[0.08, 0.1, 0.5, 16]} />
          <meshStandardMaterial color="#D4AF37" metalness={0.7} roughness={0.3} />
        </mesh>
        <mesh position={[0, 0.3, 0]} castShadow>
          <sphereGeometry args={[0.12, 16, 16]} />
          <meshStandardMaterial color="#F5F0E6" roughness={0.4} />
        </mesh>
      </Float>
    </group>
  )

  // Beauty Products / Rings
  const BeautyRing = () => (
    <group position={[0, -1, -1.5]}>
      <Float speed={3} rotationIntensity={1.5} floatIntensity={0.5}>
        <mesh castShadow>
          <torusGeometry args={[0.35, 0.05, 32, 100]} />
          <meshStandardMaterial color="#D4AF37" metalness={0.9} roughness={0.1} emissive="#D4AF37" emissiveIntensity={0.2} />
        </mesh>
        <mesh position={[0, 0.1, 0]} castShadow>
          <torusGeometry args={[0.25, 0.04, 32, 100]} />
          <meshStandardMaterial color="#F5E6B8" metalness={0.8} roughness={0.2} />
        </mesh>
      </Float>
    </group>
  )

  return (
    <group ref={groupRef}>
      <Scissors />
      <HairDryer />
      <Perfume />
      <MakeupBrush />
      <BeautyRing />
    </group>
  )
}

// Main Hero Scene Component
const HeroScene = () => {
  return (
    <div className="absolute inset-0 w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 45 }}
        style={{ background: 'radial-gradient(circle at center, #1A1A1A 0%, #0A0A0A 100%)' }}
        shadows
      >
        <ambientLight intensity={0.5} />
        <spotLight position={[5, 5, 5]} angle={0.3} penumbra={1} intensity={1} castShadow />
        <pointLight position={[-3, 2, 4]} intensity={0.8} color="#D4AF37" />
        <pointLight position={[3, -1, 2]} intensity={0.5} color="#F5E6B8" />
        
        <FloatingObjects />
        
        <Sparkles
          count={200}
          scale={10}
          size={0.2}
          speed={0.3}
          color="#D4AF37"
          opacity={0.5}
        />
        
        <Environment preset="night" />
      </Canvas>
    </div>
  )
}

export default HeroScene