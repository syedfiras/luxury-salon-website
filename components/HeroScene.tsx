'use client'

import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, Environment, Sparkles, Stars } from '@react-three/drei'
import * as THREE from 'three'

const FloatingObjects = () => {
  const groupRef = useRef<THREE.Group>(null)
  const mouseX = useRef(0)
  const mouseY = useRef(0)

  useFrame((state) => {
    if (groupRef.current) {
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

  const Scissors = () => (
    <group position={[-2.5, 0.5, -1]}>
      <Float speed={2} rotationIntensity={1} floatIntensity={1.5}>
        <mesh castShadow>
          <boxGeometry args={[0.8, 0.08, 0.08]} />
          <meshStandardMaterial color="#D4AF37" metalness={0.9} roughness={0.1} />
        </mesh>
        <mesh position={[0.4, 0, 0]} castShadow>
          <boxGeometry args={[0.5, 0.04, 0.04]} />
          <meshStandardMaterial color="#D4AF37" metalness={0.9} roughness={0.1} />
        </mesh>
        <mesh position={[-0.2, 0.15, 0]} castShadow>
          <torusGeometry args={[0.15, 0.03, 16, 32]} />
          <meshStandardMaterial color="#D4AF37" metalness={0.9} roughness={0.1} emissive="#D4AF37" emissiveIntensity={0.1} />
        </mesh>
      </Float>
    </group>
  )

  const HairDryer = () => (
    <group position={[2.5, -0.2, -0.5]} rotation={[0.3, 0.5, 0]}>
      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
        <mesh castShadow>
          <cylinderGeometry args={[0.3, 0.4, 0.8, 32]} />
          <meshStandardMaterial color="#2A2A2A" metalness={0.8} roughness={0.2} />
        </mesh>
        <mesh position={[0.5, 0, 0]} castShadow>
          <cylinderGeometry args={[0.15, 0.2, 0.4, 32]} />
          <meshStandardMaterial color="#D4AF37" metalness={0.9} roughness={0.1} />
        </mesh>
        <mesh position={[-0.4, 0.2, 0]} castShadow>
          <torusGeometry args={[0.12, 0.04, 16, 32]} />
          <meshStandardMaterial color="#D4AF37" metalness={0.8} roughness={0.2} />
        </mesh>
      </Float>
    </group>
  )

  const Perfume = () => (
    <group position={[-1, -0.5, 1.5]} rotation={[0.2, -0.3, 0.1]}>
      <Float speed={2.5} rotationIntensity={0.8} floatIntensity={1.5}>
        <mesh castShadow>
          <cylinderGeometry args={[0.25, 0.3, 0.6, 32]} />
          <meshStandardMaterial color="#D4AF37" metalness={0.6} roughness={0.2} transparent opacity={0.7} />
        </mesh>
        <mesh position={[0, 0.35, 0]} castShadow>
          <cylinderGeometry args={[0.12, 0.15, 0.2, 32]} />
          <meshStandardMaterial color="#D4AF37" metalness={0.9} roughness={0.1} />
        </mesh>
      </Float>
    </group>
  )

  const MakeupBrush = () => (
    <group position={[1.5, 1, 0.5]} rotation={[-0.2, 0.4, 0.3]}>
      <Float speed={1.8} rotationIntensity={0.6} floatIntensity={1.2}>
        <mesh castShadow>
          <cylinderGeometry args={[0.08, 0.1, 0.5, 16]} />
          <meshStandardMaterial color="#D4AF37" metalness={0.8} roughness={0.2} />
        </mesh>
        <mesh position={[0, 0.3, 0]} castShadow>
          <sphereGeometry args={[0.12, 16, 16]} />
          <meshStandardMaterial color="#F5F0E6" roughness={0.4} />
        </mesh>
      </Float>
    </group>
  )

  const BeautyRing = () => (
    <group position={[0, -1, -2]}>
      <Float speed={3} rotationIntensity={1.5} floatIntensity={0.8}>
        <mesh castShadow>
          <torusGeometry args={[0.35, 0.04, 32, 100]} />
          <meshStandardMaterial color="#D4AF37" metalness={0.9} roughness={0.1} emissive="#D4AF37" emissiveIntensity={0.3} />
        </mesh>
        <mesh position={[0, 0.1, 0]} castShadow>
          <torusGeometry args={[0.25, 0.03, 32, 100]} />
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

const HeroScene = () => {
  return (
    <div className="absolute inset-0 w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 45 }}
        style={{ background: 'radial-gradient(circle at center, #1A1A1A 0%, #0A0A0A 100%)' }}
        shadows
        dpr={[1, 1.5]}
      >
        <ambientLight intensity={0.4} />
        <spotLight position={[5, 5, 5]} angle={0.3} penumbra={1} intensity={1.2} castShadow />
        <pointLight position={[-3, 2, 4]} intensity={0.8} color="#D4AF37" />
        <pointLight position={[3, -1, 2]} intensity={0.4} color="#F5E6B8" />

        <FloatingObjects />

        <Stars
          radius={50}
          depth={50}
          count={500}
          factor={4}
          saturation={0}
          fade
          speed={0.5}
        />

        <Sparkles
          count={300}
          scale={12}
          size={0.15}
          speed={0.2}
          color="#D4AF37"
          opacity={0.4}
        />

        <Environment preset="night" />
      </Canvas>
    </div>
  )
}

export default HeroScene
