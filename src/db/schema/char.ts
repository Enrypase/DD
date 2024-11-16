import { integer, pgTable, serial, text } from "drizzle-orm/pg-core";

export const char = pgTable("char", {
  // id
  id: serial("id").primaryKey(),
  email: text("email").unique(),
  // first row
  name: text("name").notNull(),
  class: text("class").notNull(),
  background: text("background").notNull(),
  race: text("race").notNull(),
  alignment: text("alignment").notNull(),
  level: integer("level").default(1),
  xp: integer("xp").default(0),
  hp: integer("hp").notNull(),
  currentHp: integer("current_hp").notNull(),
  armorClass: integer("armor_class").notNull(),
  initiative: integer("initiative").notNull(),
  // stats
  strength: integer("strength").default(0),
  dexterity: integer("dexterity").default(0),
  constitution: integer("constitution").default(0),
  intelligence: integer("intelligence").default(0),
  wisdom: integer("wisdom").default(0),
  charisma: integer("charisma").default(0),
});
export type Char = typeof char.$inferSelect;
