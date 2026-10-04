import React, { useRef, useMemo, useEffect, useState } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'
import { easing } from 'maath'

// Hook compartido: captura posición del cursor O del dedo en móvil
function usePointer(ref) {
  useEffect(() => {
    const onMouse = (e) => {
      ref.current.x = (e.clientX / window.innerWidth) * 2 - 1
      ref.current.y = -(e.clientY / window.innerHeight) * 2 + 1
    }
    const onTouch = (e) => {
      if (e.touches.length > 0) {
        const t = e.touches[0]
        ref.current.x = (t.clientX / window.innerWidth) * 2 - 1
        ref.current.y = -(t.clientY / window.innerHeight) * 2 + 1
      }
    }
    window.addEventListener('mousemove', onMouse, { passive: true })
    window.addEventListener('touchmove', onTouch, { passive: true })
    window.addEventListener('touchstart', onTouch, { passive: true })
    return () => {
      window.removeEventListener('mousemove', onMouse)
      window.removeEventListener('touchmove', onTouch)
      window.removeEventListener('touchstart', onTouch)
    }
  }, [ref])
}

// Partículas interactivas — misma densidad en móvil y desktop
function InteractiveParticles({ count = 800 }) {
  const meshRef = useRef()
  const mouseRef = useRef(new THREE.Vector2(0, 0))
  const smoothMouse = useRef(new THREE.Vector2(0, 0))
  const { viewport } = useThree()

  usePointer(mouseRef)

  const [positions, sizes] = useMemo(() => {
    const pos = new Float32Array(count * 3)
    const sz = new Float32Array(count)
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 18
      pos[i * 3 + 1] = (Math.random() - 0.5) * 12
      pos[i * 3 + 2] = (Math.random() - 0.5) * 8
      sz[i] = Math.random() * 0.03 + 0.005
    }
    return [pos, sz]
  }, [count])

  const originalPositions = useMemo(() => new Float32Array(positions), [positions])

  useFrame((state, delta) => {
    easing.damp2(smoothMouse.current, mouseRef.current, 0.15, delta)

    const posArray = meshRef.current.geometry.attributes.position.array
    const mx = smoothMouse.current.x * viewport.width * 0.5
    const my = smoothMouse.current.y * viewport.height * 0.5
    const t = state.clock.getElapsedTime()

    for (let i = 0; i < count; i++) {
      const i3 = i * 3
      const ox = originalPositions[i3]
      const oy = originalPositions[i3 + 1]
      const oz = originalPositions[i3 + 2]

      const dx = ox - mx
      const dy = oy - my
      const dist = Math.sqrt(dx * dx + dy * dy)
      const influence = Math.max(0, 1 - dist / 3.5)
      const repulsion = influence * influence * 1.8

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
          count={count}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-aSize"
          count={count}
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

// Rejilla de líneas — misma densidad en móvil y desktop
function ConnectionLines() {
  const lineRef = useRef()
  const mouseRef = useRef(new THREE.Vector2(0, 0))
  const smoothMouse = useRef(new THREE.Vector2(0, 0))
  const { viewport } = useThree()

  usePointer(mouseRef)

  const gridSize = 14
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
  }, [])

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
  }, [points])

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
  return (
    <div className="fixed inset-0 z-0" style={{ touchAction: 'pan-y' }}>
      <Canvas
        camera={{ position: [0, 0, 8], fov: 50 }}
        dpr={[1, 1.5]}
        gl={{ powerPreference: 'high-performance', antialias: false, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <ConnectionLines />
        <InteractiveParticles />
      </Canvas>
    </div>
  )
}
