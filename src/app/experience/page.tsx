"use client";

import { useControls } from "leva";
import { Perf } from "r3f-perf";
import { AmbientLight } from "three";

import type { Schema } from "leva/src/types";
export default function Page() {
  const ctr = useControls("planet", controls);

  return (
    <>
      {/* Performance */}
      {ctr.perf && <Perf position="top-left" />}

      <ambientLight intensity={ctr.ambientLight} />
      <directionalLight position={[0, 10, 5]} intensity={1} castShadow />
      <color attach="background" args={[ctr.background]} />

      {/* Planet */}
      <mesh>
        <sphereGeometry />
        <meshStandardMaterial color={ctr.color} />
      </mesh>
    </>
  );
}

const controls = {
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
