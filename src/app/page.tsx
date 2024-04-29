import { api } from "@/trpc/server";

export default async function Home() {
  const spacecrafts = await api.spacecraft.search();
  console.log(spacecrafts);

  return (
    <div className="flex h-full w-full items-center justify-center text-white">
      HELLO WORLD
    </div>
  );
}
