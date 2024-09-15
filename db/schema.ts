import { pgTable, text } from "drizzle-orm/pg-core";

export const accounts = pgTable("accounts", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  user_id: text("user_id").notNull(),
});
