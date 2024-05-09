"use client";

import { min } from "drizzle-orm";
import { useControls } from "leva";
import { Perf } from "r3f-perf";
import { useEffect, useRef } from "react";
import { DirectionalLightHelper } from "three";

import {
  AccumulativeShadows,
  BakeShadows,
  ContactShadows,
  Environment,
  Lightformer,
  OrbitControls,
  RandomizedLight,
  Sky,
  SoftShadows,
  useHelper,
} from "@react-three/drei";

import type { DirectionalLight } from "three";
export default function Page() {
  // Controls
  const ctr = useControls("planet", planetControls);
  const ctrDL = useControls("directional light", directionalLightControls);

  // Refs
  const directionalLight = useRef<DirectionalLight>(null);

  // Helpers
  useEffect(() => {
    if (directionalLight.current) {
      const helper = new DirectionalLightHelper(directionalLight.current, 1);
      directionalLight.current.add(helper);

      return () => {
        if (directionalLight.current) {
          directionalLight.current.remove(helper);
          helper.dispose();
        }
      };
    }
  }, []);

  return (
    <>
      {/* Orbit Controls */}
      <OrbitControls makeDefault />

      {/* Performance */}
      {ctr.perf && <Perf position="top-left" />}

      {/* Environment */}
      <Environment>
        <color args={[ctr.background]} attach="background" />
        <Lightformer position-z={-5} scale={10} />
      </Environment>

      {/* Light */}
      <ambientLight intensity={ctr.ambientLight} />

      <directionalLight
        ref={directionalLight}
        castShadow
        position={[ctrDL.position.x, ctrDL.position.y, ctrDL.position.z]}
        intensity={ctrDL.intensity}
        shadow-mapSize={[1024, 1024]}
      />

      {/* Planet */}
      <mesh castShadow>
        <sphereGeometry />
        <meshStandardMaterial color={ctr.color} />
      </mesh>
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

const directionalLightControls = {
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
};
