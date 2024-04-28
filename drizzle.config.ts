import type { Config } from "drizzle-kit";

import { env } from "@/env";

if (!("DATABASE_URL" in env))
  throw new Error("DATABASE_URL not found on .env.development");

export default {
  schema: "./src/server/db/schema.ts",
  out: "./src/drizzle/migrations",
  driver: "pg",
  strict: false,
  dbCredentials: {
    connectionString: env.DATABASE_URL,
  },
  tablesFilter: ["astro-voyager_*"],
} satisfies Config;
