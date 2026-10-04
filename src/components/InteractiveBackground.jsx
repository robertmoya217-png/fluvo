import React, { useRef, useMemo, useEffect } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'
import { easing } from 'maath'

// Hook de puntero con throttling para evitar cálculos innecesarios por evento
function usePointer(ref) {
  useEffect(() => {
    let ticking = false
    const onPointerMove = (e) => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const clientX = e.touches ? e.touches[0].clientX : e.clientX
          const clientY = e.touches ? e.touches[0].clientY : e.clientY
          ref.current.x = (clientX / window.innerWidth) * 2 - 1
          ref.current.y = -(clientY / window.innerHeight) * 2 + 1
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('mousemove', onPointerMove, { passive: true })
    window.addEventListener('touchmove', onPointerMove, { passive: true })
    window.addEventListener('touchstart', onPointerMove, { passive: true })
    return () => {
      window.removeEventListener('mousemove', onPointerMove)
      window.removeEventListener('touchmove', onPointerMove)
      window.removeEventListener('touchstart', onPointerMove)
    }
  }, [ref])
}

// Partículas interactivas optimizadas
function InteractiveParticles({ count = 500 }) {
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
      const distSq = dx * dx + dy * dy

      // Optimización: Si está fuera del radio de influencia (3.5^2 = 12.25), cálculo mínimo
      if (distSq < 12.25) {
        const dist = Math.sqrt(distSq)
        const influence = 1 - dist / 3.5
        const repulsion = influence * influence * 1.8
        const invDist = 1 / (dist + 0.001)

        posArray[i3] = ox + (dx * invDist) * repulsion + Math.sin(t * 0.3 + i * 0.01) * 0.02
        posArray[i3 + 1] = oy + (dy * invDist) * repulsion + Math.cos(t * 0.25 + i * 0.015) * 0.02
      } else {
        posArray[i3] = ox + Math.sin(t * 0.3 + i * 0.01) * 0.02
        posArray[i3 + 1] = oy + Math.cos(t * 0.25 + i * 0.015) * 0.02
      }
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

// Rejilla de líneas optimizada (10x10 para mantener estética limpia sin saturar GPU)
function ConnectionLines() {
  const lineRef = useRef()
  const mouseRef = useRef(new THREE.Vector2(0, 0))
  const smoothMouse = useRef(new THREE.Vector2(0, 0))
  const { viewport } = useThree()

  usePointer(mouseRef)

  const gridSize = 10
  const spacing = 1.8

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
    const totalPoints = posArray.length / 3

    for (let i = 0; i < totalPoints; i++) {
      const px = posArray[i * 3]
      const py = posArray[i * 3 + 1]
      const dx = px - mx
      const dy = py - my
      const distSq = dx * dx + dy * dy

      // Optimización: Distancia al cuadrado evita raíces innecesarias (5^2 = 25)
      const glow = distSq < 25 ? Math.max(0.03, Math.min(0.35, 1 - Math.sqrt(distSq) / 5)) : 0.03
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
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 50 }}
        dpr={1} // Forzar DPR a 1 para eliminar cuello de botella en pantallas Retina 4K/móviles
        gl={{ 
          powerPreference: 'high-performance', 
          antialias: false, 
          alpha: true,
          stencil: false,
          depth: false // Fondo no requiere depth testing
        }}
        style={{ background: 'transparent' }}
      >
        <ConnectionLines />
        <InteractiveParticles />
      </Canvas>
    </div>
  )
}
