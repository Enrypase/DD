import { defineConfig } from "drizzle-kit";

const host = process.env.DB_HOST || "localhost";
const port = process.env.DB_PORT || "5432";
const user = process.env.DB_USER || "postgres";
const password = process.env.DB_PASSWORD;
const database = process.env.DB_DATABASE;
if (!password || !database) throw new Error("Passowrd or Database not found");

export default defineConfig({
  out: "./drizzle",
  schema: "./src/db/schema",
  dialect: "postgresql",
  dbCredentials: {
    host,
    port: parseInt(port),
    user,
    password,
    database,
    ssl: false,
  },
});
