CREATE TABLE IF NOT EXISTS "char" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"class" text NOT NULL,
	"background" text NOT NULL,
	"race" text NOT NULL,
	"alignment" text NOT NULL,
	"level" integer DEFAULT 1,
	"xp" integer DEFAULT 0,
	"hp" integer NOT NULL,
	"current_hp" integer NOT NULL,
	"armor_class" integer NOT NULL,
	"initiative" integer NOT NULL,
	"strength" integer DEFAULT 0,
	"dexterity" integer DEFAULT 0,
	"constitution" integer DEFAULT 0,
	"intelligence" integer DEFAULT 0,
	"wisdom" integer DEFAULT 0,
	"charisma" integer DEFAULT 0
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "session" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);
