import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

const databaseUrl = process.env.DATABASE_URL;
if (!databaseUrl) throw new Error("Database URL not specified");

const client = postgres(databaseUrl);
const db = drizzle({ client });

export default db;
