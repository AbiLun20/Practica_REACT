import { useState, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Environment } from '@react-three/drei'
import type { Mesh } from 'three'

function Rectangulo() {
  const rectangulo = useRef<Mesh>(null)
  const [color] = useState('deepskyblue')
  const [encima, setEncima] = useState(false)

  useFrame((_, delta) => {
    if (rectangulo.current) {
      rectangulo.current.rotation.y += delta
    }
  })

  return (
    <mesh
      ref={rectangulo}
      position={[-2, 0, -3]}
      scale={encima ? [2.2, 1.1, 0.2] : [1.8, 0.8, 0.2]}
      onPointerOver={() => setEncima(true)}
      onPointerOut={() => setEncima(false)}
    >
      <boxGeometry />
      <meshStandardMaterial color={color} />
    </mesh>
  )
}

function Triangulo() {
  const triangulo = useRef<Mesh>(null)
  const [color] = useState('limegreen')
  const [encima, setEncima] = useState(false)

useFrame((_, delta) => {
  if (triangulo.current) {
    triangulo.current.rotation.y += delta
  }
})

  return (
    <mesh
      ref={triangulo}
      position={[2, 0, -3]}
      rotation={[0, 0, 0]}
      scale={encima ? 1.4 : 1}
      onPointerOver={() => setEncima(true)}
      onPointerOut={() => setEncima(false)}
    >
      <tetrahedronGeometry />
      <meshStandardMaterial color={color} />
    </mesh>
  )
}

function App() {
  return (
    <Canvas camera={{ position: [0, 0, 0.1] }}>
      <Environment files="/360.jpg" background />
      <Rectangulo />
      <Triangulo />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        rotateSpeed={-0.4}
      />
    </Canvas>
  )
}

export default App
