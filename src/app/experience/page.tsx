"use client";

import { useControls } from "leva";
import { Perf } from "r3f-perf";

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

export default function Page() {
  const ctr = useControls("planet", planetControls);
  const ctrDL = useControls("directional light", directionalLightControls);

  return (
    <>
      {/* Performance */}
      {ctr.perf && <Perf position="top-left" />}

      {/* Environment */}
      <Environment>
        <color args={[ctr.background]} attach="background" />
        <Lightformer position-z={-5} scale={10} />
      </Environment>

      <ambientLight intensity={ctr.ambientLight} />
      <directionalLight
        position={[ctrDL.position.x, ctrDL.position.y, ctrDL.position.z]}
        intensity={0.5}
        castShadow
      />

      {/* Planet */}
      <mesh>
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
    value: {
      x: 0,
      y: 10,
      z: 5,
    },
  },
};
