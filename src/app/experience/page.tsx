"use client";

import { useControls } from "leva";
import { Perf } from "r3f-perf";
import { useEffect, useRef } from "react";
import * as THREE from "three";

import {
  Environment,
  Lightformer,
  OrbitControls,
  PivotControls,
  useHelper,
} from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

import type { DirectionalLight } from "three";

export default function Page() {
  // Controls
  const ctr = useControls("planet", planetControls);
  const light = useControls("light", lightControls);

  // Refs
  const pointLight = useRef<THREE.PointLight>(null);

  // Helpers
  useEffect(() => {
    if (pointLight.current) {
      const helper = new THREE.PointLightHelper(pointLight.current, 1);
      pointLight.current.add(helper);

      return () => {
        if (pointLight.current) {
          pointLight.current.remove(helper);
          helper.dispose();
        }
      };
    }
  }, []);

  useFrame((state, delta) => {
    // console.log("state", state);
  });

  return (
    <>
      {/* Orbit Controls */}
      <OrbitControls makeDefault />

      {/* Pivot Controls */}

      {/* Performance */}
      {ctr.perf && <Perf position="top-left" />}

      {/* Environment */}
      <Environment>
        <color args={[ctr.background]} attach="background" />
        <Lightformer position-z={-5} scale={10} />
      </Environment>

      {/* Light */}
      <pointLight
        ref={pointLight}
        position={[light.position.x, light.position.y, light.position.z]}
        intensity={light.intensity}
      />

      {/* Planet */}
      <PivotControls anchor={[0, 0, 0]} depthTest={false} lineWidth={4}>
        <mesh>
          <sphereGeometry />
          <meshStandardMaterial color={ctr.color} />
        </mesh>
      </PivotControls>
    </>
  );
}

const planetControls = {
  color: "#ffffff",
  background: "#0C101E",
  perf: true,
  ambientLight: {
    min: 0,
    max: 5,
    value: 0.1,
    step: 0.1,
  },
};

const lightControls = {
  position: {
    value: { x: 8, y: 20, z: -6 },
    min: -10,
    max: 20,
    step: 0.1,
  },
  intensity: {
    min: 0,
    max: 10,
    value: 2.5,
    step: 0.1,
  },
  shadowRadius: {
    min: 0,
    max: 50,
    value: 10,
    step: 0.1,
  },
  shadowsPosition: {
    value: { x: 0, y: -0.99, z: 0 },
    min: -10,
    max: 10,
    step: 0.1,
  },
};
