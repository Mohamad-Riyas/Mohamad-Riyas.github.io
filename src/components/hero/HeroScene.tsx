import { useEffect, useMemo, useRef } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Float, Line } from '@react-three/drei'
import * as THREE from 'three'
import { codeEditorTexture, learnTexture, mobileTexture, whiteboardTexture } from '../../utils/canvasTextures'

interface SceneProps {
  reduced: boolean
  compact: boolean
}

/** A textured panel with a slim border plate behind it. Unlit material keeps text crisp. */
function Panel({ texture, size, position, rotation = [0, 0, 0], reduced, speed = 1 }: {
  texture: THREE.Texture
  size: [number, number]
  position: [number, number, number]
  rotation?: [number, number, number]
  reduced: boolean
  speed?: number
}) {
  return (
    <Float speed={reduced ? 0 : speed} rotationIntensity={reduced ? 0 : 0.25} floatIntensity={reduced ? 0 : 0.6} position={position} rotation={rotation}>
      <mesh position={[0, 0, -0.02]}>
        <planeGeometry args={[size[0] + 0.07, size[1] + 0.07]} />
        <meshBasicMaterial color="#2b3648" />
      </mesh>
      <mesh>
        <planeGeometry args={size} />
        <meshBasicMaterial map={texture} toneMapped={false} />
      </mesh>
    </Float>
  )
}

function DatabaseNode({ position, reduced }: { position: [number, number, number]; reduced: boolean }) {
  return (
    <Float speed={reduced ? 0 : 1.2} floatIntensity={reduced ? 0 : 0.8} rotationIntensity={0} position={position}>
      {[0, 0.34, 0.68].map((y, i) => (
        <mesh key={y} position={[0, y, 0]}>
          <cylinderGeometry args={[0.46, 0.46, 0.24, 32]} />
          <meshStandardMaterial color={i === 1 ? '#06b6d4' : '#10b981'} metalness={0.5} roughness={0.35} emissive={i === 1 ? '#06b6d4' : '#10b981'} emissiveIntensity={0.12} />
        </mesh>
      ))}
    </Float>
  )
}

/** Collaboration network: connected spheres drifting gently. */
function Network({ reduced }: { reduced: boolean }) {
  const group = useRef<THREE.Group>(null)
  const nodes = useMemo<[number, number, number][]>(
    () => [[-0.9, 0.4, 0], [0, 0.9, 0.3], [0.9, 0.3, -0.2], [0.5, -0.6, 0.2], [-0.5, -0.5, -0.1]],
    [],
  )
  const edges: [number, number][] = [[0, 1], [1, 2], [2, 3], [3, 4], [4, 0], [1, 3]]
  useFrame((_, dt) => {
    if (!reduced && group.current) group.current.rotation.y += dt * 0.25
  })
  return (
    <group ref={group} position={[-0.2, 2.1, -1.4]} scale={0.9}>
      {nodes.map((p, i) => (
        <mesh key={i} position={p}>
          <sphereGeometry args={[0.09, 16, 16]} />
          <meshBasicMaterial color={i % 2 ? '#06b6d4' : '#10b981'} />
        </mesh>
      ))}
      {edges.map(([a, b], i) => (
        <Line key={i} points={[nodes[a], nodes[b]]} color="#4b5563" lineWidth={1} transparent opacity={0.7} />
      ))}
    </group>
  )
}

function Particles({ count, reduced }: { count: number; reduced: boolean }) {
  const ref = useRef<THREE.Points>(null)
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      const r = 4 + Math.random() * 4
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta)
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta) * 0.6
      arr[i * 3 + 2] = r * Math.cos(phi) - 2
    }
    return arr
  }, [count])
  useFrame((_, dt) => {
    if (!reduced && ref.current) ref.current.rotation.y += dt * 0.02
  })
  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.03} color="#6ee7b7" transparent opacity={0.55} sizeAttenuation depthWrite={false} />
    </points>
  )
}

function Rig({ reduced, compact }: SceneProps) {
  const rig = useRef<THREE.Group>(null)
  const light = useRef<THREE.PointLight>(null)
  const { size, invalidate } = useThree()
  const wide = size.width >= 1024
  const scale = THREE.MathUtils.clamp(size.width / (wide ? 1650 : 760), 0.55, 1.05)

  const textures = useMemo(
    () => ({ code: codeEditorTexture(), board: whiteboardTexture(), phone: mobileTexture('NaviGuard'), learn: learnTexture() }),
    [],
  )
  useEffect(() => () => Object.values(textures).forEach((t) => t.dispose()), [textures])

  useFrame((state, dt) => {
    if (reduced || !rig.current) return
    const { x, y } = state.pointer
    rig.current.rotation.y = THREE.MathUtils.damp(rig.current.rotation.y, x * 0.28, 3.5, dt)
    rig.current.rotation.x = THREE.MathUtils.damp(rig.current.rotation.x, -y * 0.16, 3.5, dt)
    rig.current.position.x = THREE.MathUtils.damp(rig.current.position.x, (wide ? 2.0 : 0) + x * 0.35, 3, dt)
    rig.current.position.y = THREE.MathUtils.damp(rig.current.position.y, (compact ? 0.6 : 0) + y * 0.2, 3, dt)
    if (light.current) {
      light.current.position.x = THREE.MathUtils.damp(light.current.position.x, x * 5, 4, dt)
      light.current.position.y = THREE.MathUtils.damp(light.current.position.y, y * 3, 4, dt)
    }
  })

  // With motion reduced the loop is on-demand, so redraw once after layout changes.
  useEffect(() => {
    if (reduced && rig.current) {
      rig.current.position.set(wide ? 2.0 : 0, compact ? 0.6 : 0, 0)
      invalidate()
    }
  }, [reduced, wide, compact, size.width, invalidate])

  return (
    <>
      <ambientLight intensity={0.6} />
      <pointLight ref={light} position={[0, 1, 5]} intensity={26} color="#7dd3fc" distance={16} />
      <group ref={rig} scale={scale} position={[wide ? 2.0 : 0, compact ? 0.6 : 0, 0]}>
        <Panel texture={textures.code} size={[3.7, 2.43]} position={[-0.6, 0.45, 0]} rotation={[0, 0.16, 0]} reduced={reduced} />
        <Panel texture={textures.board} size={[2.9, 2.0]} position={[2.7, 1.5, -1.1]} rotation={[0, -0.22, 0]} reduced={reduced} speed={0.8} />
        <Panel texture={textures.phone} size={[1.1, 2.05]} position={[3.0, -1.3, 0.7]} rotation={[0, -0.3, 0.04]} reduced={reduced} speed={1.2} />
        <Panel texture={textures.learn} size={[2.3, 1.5]} position={[-0.5, -2.25, 0.2]} rotation={[0, 0.2, 0]} reduced={reduced} speed={0.9} />
        <DatabaseNode position={[1.6, -2.7, 0.3]} reduced={reduced} />
        <Network reduced={reduced} />
        <Particles count={compact ? 90 : 220} reduced={reduced} />
      </group>
    </>
  )
}

export default function HeroScene({ reduced, compact, onLost }: SceneProps & { onLost: () => void }) {
  return (
    <Canvas
      frameloop={reduced ? 'demand' : 'always'}
      eventSource={document.body}
      eventPrefix="client"
      dpr={compact ? [1, 1.25] : [1, 1.75]}
      camera={{ position: [0, 0, 9], fov: 45 }}
      gl={{ antialias: !compact, alpha: true, powerPreference: 'high-performance' }}
      onCreated={({ gl }) => {
        gl.domElement.addEventListener('webglcontextlost', (e) => {
          e.preventDefault()
          onLost()
        })
      }}
      aria-hidden="true"
    >
      <Rig reduced={reduced} compact={compact} />
    </Canvas>
  )
}
