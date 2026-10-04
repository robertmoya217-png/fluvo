import React, { useRef, useMemo, useEffect, useState } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'
import { easing } from 'maath'

// Partículas interactivas que siguen el cursor
function InteractiveParticles({ count = 800, isMobile }) {
  const meshRef = useRef()
  const mouseRef = useRef(new THREE.Vector2(0, 0))
  const smoothMouse = useRef(new THREE.Vector2(0, 0))
  const { viewport } = useThree()

  const actualCount = isMobile ? Math.floor(count * 0.4) : count

  const [positions, sizes, opacities] = useMemo(() => {
    const pos = new Float32Array(actualCount * 3)
    const sz = new Float32Array(actualCount)
    const op = new Float32Array(actualCount)
    for (let i = 0; i < actualCount; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 18
      pos[i * 3 + 1] = (Math.random() - 0.5) * 12
      pos[i * 3 + 2] = (Math.random() - 0.5) * 8
      sz[i] = Math.random() * 0.03 + 0.005
      op[i] = Math.random() * 0.6 + 0.1
    }
    return [pos, sz, op]
  }, [actualCount])

  const originalPositions = useMemo(() => new Float32Array(positions), [positions])

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseRef.current.x = (e.clientX / window.innerWidth) * 2 - 1
      mouseRef.current.y = -(e.clientY / window.innerHeight) * 2 + 1
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  useFrame((state, delta) => {
    // Suavizar movimiento del mouse con maath/easing
    easing.damp2(smoothMouse.current, mouseRef.current, 0.15, delta)

    const posArray = meshRef.current.geometry.attributes.position.array
    const mx = smoothMouse.current.x * viewport.width * 0.5
    const my = smoothMouse.current.y * viewport.height * 0.5
    const t = state.clock.getElapsedTime()

    for (let i = 0; i < actualCount; i++) {
      const i3 = i * 3
      const ox = originalPositions[i3]
      const oy = originalPositions[i3 + 1]
      const oz = originalPositions[i3 + 2]

      // Distancia al cursor en espacio 3D
      const dx = ox - mx
      const dy = oy - my
      const dist = Math.sqrt(dx * dx + dy * dy)
      const influence = Math.max(0, 1 - dist / 3.5)
      const repulsion = influence * influence * 1.8

      // Empujar partículas desde el cursor + movimiento orgánico sutil
      posArray[i3] = ox + (dx / (dist + 0.001)) * repulsion + Math.sin(t * 0.3 + i * 0.01) * 0.02
      posArray[i3 + 1] = oy + (dy / (dist + 0.001)) * repulsion + Math.cos(t * 0.25 + i * 0.015) * 0.02
      posArray[i3 + 2] = oz + Math.sin(t * 0.15 + i * 0.02) * 0.08
    }

    meshRef.current.geometry.attributes.position.needsUpdate = true
  })

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={actualCount}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-aSize"
          count={actualCount}
          array={sizes}
          itemSize={1}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#ffffff"
        size={0.035}
        sizeAttenuation
        transparent
        opacity={0.5}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  )
}

// Líneas de conexión minimalistas que se iluminan cerca del cursor
function ConnectionLines({ isMobile }) {
  const lineRef = useRef()
  const mouseRef = useRef(new THREE.Vector2(0, 0))
  const smoothMouse = useRef(new THREE.Vector2(0, 0))
  const { viewport } = useThree()

  const gridSize = isMobile ? 8 : 14
  const spacing = 1.4

  const points = useMemo(() => {
    const pts = []
    for (let x = 0; x < gridSize; x++) {
      for (let y = 0; y < gridSize; y++) {
        pts.push(new THREE.Vector3(
          (x - gridSize / 2) * spacing,
          (y - gridSize / 2) * spacing,
          0
        ))
      }
    }
    return pts
  }, [gridSize, spacing])

  const [linePositions, lineColors] = useMemo(() => {
    const positions = []
    const colors = []
    for (let i = 0; i < points.length; i++) {
      for (let j = i + 1; j < points.length; j++) {
        const d = points[i].distanceTo(points[j])
        if (d < spacing * 1.5) {
          positions.push(points[i].x, points[i].y, points[i].z)
          positions.push(points[j].x, points[j].y, points[j].z)
          colors.push(1, 1, 1, 1, 1, 1)
        }
      }
    }
    return [new Float32Array(positions), new Float32Array(colors)]
  }, [points, spacing])

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseRef.current.x = (e.clientX / window.innerWidth) * 2 - 1
      mouseRef.current.y = -(e.clientY / window.innerHeight) * 2 + 1
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  useFrame((state, delta) => {
    easing.damp2(smoothMouse.current, mouseRef.current, 0.12, delta)
    if (!lineRef.current) return

    const colArray = lineRef.current.geometry.attributes.color.array
    const posArray = lineRef.current.geometry.attributes.position.array
    const mx = smoothMouse.current.x * viewport.width * 0.5
    const my = smoothMouse.current.y * viewport.height * 0.5

    for (let i = 0; i < posArray.length / 3; i++) {
      const px = posArray[i * 3]
      const py = posArray[i * 3 + 1]
      const dx = px - mx
      const dy = py - my
      const dist = Math.sqrt(dx * dx + dy * dy)
      const glow = Math.max(0.03, Math.min(0.35, 1 - dist / 5))
      colArray[i * 3] = glow
      colArray[i * 3 + 1] = glow
      colArray[i * 3 + 2] = glow
    }

    lineRef.current.geometry.attributes.color.needsUpdate = true
  })

  return (
    <lineSegments ref={lineRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={linePositions.length / 3} array={linePositions} itemSize={3} />
        <bufferAttribute attach="attributes-color" count={lineColors.length / 3} array={lineColors} itemSize={3} />
      </bufferGeometry>
      <lineBasicMaterial vertexColors transparent opacity={0.6} depthWrite={false} blending={THREE.AdditiveBlending} />
    </lineSegments>
  )
}

export default function InteractiveBackground() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 50 }}
        dpr={isMobile ? 1 : [1, 1.5]}
        gl={{ powerPreference: 'high-performance', antialias: false, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <ConnectionLines isMobile={isMobile} />
        <InteractiveParticles isMobile={isMobile} />
      </Canvas>
    </div>
  )
}
