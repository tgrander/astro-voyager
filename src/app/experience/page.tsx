"use client";

import { useControls } from "leva";
import { Perf } from "r3f-perf";

export default function Page() {
  const ctr = useControls("planet", controls);

  return (
    <>
      {/* Performance */}
      {ctr.perf && <Perf position="top-left" />}

      <ambientLight intensity={0.1} />
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

const controls = { color: "#ffffff", background: "#0C101E", perf: true };
