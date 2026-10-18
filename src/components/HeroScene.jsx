import React, { useRef, useState, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, MeshTransmissionMaterial, OrbitControls, Icosahedron, Torus } from '@react-three/drei'

function GlassObject({ isMobile }) {
  const mainRef = useRef()
  const ring1Ref = useRef()
  const ring2Ref = useRef()
  const [hovered, setHovered] = useState(false)

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    if (mainRef.current) {
      mainRef.current.rotation.x = Math.sin(t * 0.25) * 0.4
      mainRef.current.rotation.y = t * 0.15
      mainRef.current.rotation.z = Math.cos(t * 0.2) * 0.15
    }
    if (ring1Ref.current) {
      ring1Ref.current.rotation.x = t * 0.35
      ring1Ref.current.rotation.z = Math.sin(t * 0.18) * 0.6
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.y = t * 0.25
      ring2Ref.current.rotation.x = Math.cos(t * 0.15) * 0.8
    }
  })

  return (
    <group scale={isMobile ? 1.3 : 1.7}>
      {/* Flotación suave y pausada de estética zen */}
      <Float speed={0.65} rotationIntensity={0.45} floatIntensity={0.7}>
        <Icosahedron
          ref={mainRef}
          args={[1, isMobile ? 4 : 8]}
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}
        >
          {/* Material ultra-cristalino de alta refracción y reflejos nítidos */}
          <MeshTransmissionMaterial
            backside
            backsideThickness={0.25}
            samples={isMobile ? 2 : 4}
            resolution={isMobile ? 128 : 256}
            transmission={0.98}
            roughness={0.02}
            clearcoat={1}
            clearcoatRoughness={0.02}
            ior={1.22}
            chromaticAberration={0.02}
            anisotropy={0.1}
            distortion={0.25}
            distortionScale={0.15}
            temporalDistortion={0.08}
            color={hovered ? "#ffffff" : "#f1f5f9"}
          />
        </Icosahedron>
      </Float>

      {/* Anillo orbital 1 */}
      <Torus ref={ring1Ref} args={[1.8, 0.025, 12, 48]} rotation={[Math.PI / 2.5, 0, 0]}>
        <meshPhysicalMaterial
          transmission={0.85}
          roughness={0.02}
          ior={1.5}
          thickness={0.3}
          color="#ffffff"
          clearcoat={1}
          opacity={0.7}
          transparent
        />
      </Torus>

      {/* Anillo orbital 2 */}
      <Torus ref={ring2Ref} args={[2.2, 0.015, 12, 60]} rotation={[Math.PI / 1.5, Math.PI / 4, 0]}>
        <meshPhysicalMaterial
          transmission={0.9}
          roughness={0.02}
          ior={1.5}
          thickness={0.2}
          color="#ffffff"
          clearcoat={1}
          opacity={0.4}
          transparent
        />
      </Torus>
    </group>
  )
}

export default function HeroScene() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  return (
    <div className="w-full h-[420px] md:h-[520px] relative">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 42 }}
        dpr={isMobile ? 1 : [1, 1.5]}
        performance={{ min: 0.5 }}
        gl={{ powerPreference: "high-performance", antialias: false, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={1.1} />
        {/* Luces direccionales neutras + acentos cian y esmeralda tecnológicos */}
        <directionalLight position={[8, 8, 8]} intensity={2.8} color="#ffffff" />
        <directionalLight position={[-6, 6, 4]} intensity={1.5} color="#06b6d4" />
        <directionalLight position={[5, -5, -3]} intensity={1.2} color="#10b981" />

        <GlassObject isMobile={isMobile} />

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.3}
          maxPolarAngle={Math.PI / 1.7}
          minPolarAngle={Math.PI / 2.3}
        />
      </Canvas>
    </div>
  )
}
