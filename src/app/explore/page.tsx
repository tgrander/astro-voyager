"use client";

import { Canvas } from "@react-three/fiber";

export default function Page() {
  return (
    <div id="canvas-container" className="h-screen w-screen bg-pink-200">
      <Canvas shadows camera={{ position: [0, 0, 10], fov: 75 }}>
        <ambientLight intensity={0.1} />

        <directionalLight position={[0, 10, 5]} intensity={1} castShadow />

        {/* <spotLight position={[10, 10, 10]} angle={0.15} /> */}

        <mesh>
          <sphereGeometry />

          <meshStandardMaterial
            color="blue"
            // wireframe={true}
          />
        </mesh>
      </Canvas>
    </div>
  );
}

function CameraComponent() {
  return (
    <perspectiveCamera
      position={[0, 0, 10]}
      fov={75}
      aspect={window.innerWidth / window.innerHeight}
      near={0.1}
      far={1000}
    />
  );
}
