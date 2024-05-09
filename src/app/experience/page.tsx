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
} from "@react-three/drei";

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
        decay={light.decay}
      />

      {/* Planet */}
      <mesh position={[ctr.position.x, ctr.position.y, ctr.position.z]}>
        <sphereGeometry />
        <meshStandardMaterial color={ctr.color} />
      </mesh>
    </>
  );
}

const planetControls = {
  position: {
    value: {
      x: 0,
      y: 0,
      z: 0,
    },
    min: -20,
    max: 20,
    step: 0.1,
  },
  rotation: {
    value: {
      x: 0,
      y: 0,
      z: 0,
    },
    min: 0,
    max: 360,
    step: 0.1,
  },
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
  decay: {
    min: 0,
    max: 10,
    value: 2.5,
    step: 0.1,
  },
};
