import type { Config } from "drizzle-kit";

import * as dotenv from "dotenv";

import { env } from "@/env";

dotenv.config({ path: "./.env" });

if (!("DATABASE_URL" in env))
  throw new Error("DATABASE_URL not found on .env.development");

export default {
  schema: "./src/server/db/schema.ts",
  out: "./src/db/migrations",
  driver: "pg",
  strict: false,
  dbCredentials: {
    connectionString: env.DATABASE_URL,
  },
  tablesFilter: ["astro-voyager_*"],
} satisfies Config;
