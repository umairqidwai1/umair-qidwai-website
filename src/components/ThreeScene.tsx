
import { Canvas, useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { Mesh } from 'three';

const FloatingCube = () => {
  const meshRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.5;
    }
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[1.5, 1.5, 1.5]} />
      <meshStandardMaterial 
        color="#10b981" 
        transparent={true}
        opacity={0.6}
        wireframe={true}
      />
    </mesh>
  );
};

const ThreeScene = () => {
  return (
    <Canvas camera={{ position: [0, 0, 5] }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <FloatingCube />
    </Canvas>
  );
};

export default ThreeScene;
