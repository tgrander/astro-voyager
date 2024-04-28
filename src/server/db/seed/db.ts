import dotenv from "dotenv";
import { drizzle } from "drizzle-orm/node-postgres";
import pg from "pg";

import * as schema from "../schema";

const { Pool } = pg;

// env variables
dotenv.config({ path: "./.env" });

// Check if DATABASE_URL is set
if (!("DATABASE_URL" in process.env))
  throw new Error("DATABASE_URL not found on .env");

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

export const db = drizzle(pool, { schema });
