import { pgTable, text } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: text("id").notNull().primaryKey(),
  email: text("email").unique(),
  password: text("password").notNull(),
  created_at: text("created_at").default("now()").notNull(),
  updated_at: text("updated_at").default("now()").notNull(),
});
