import { Hono } from "hono";
import { clerkMiddleware, getAuth } from "@hono/clerk-auth";
import { db } from "@/db/drizzle";
import { accounts, insertAccountSchema } from "@/db/schema";
import { eq } from "drizzle-orm";
import { zValidator } from "@hono/zod-validator";
import { createId } from "@paralleldrive/cuid2";

const app = new Hono()
  .get("/", clerkMiddleware(), async (c) => {
    const auth = getAuth(c);

    if (!auth?.userId) {
      return c.json({ error: "Unauthorized" }, 401);
    }

    const data = await db
      .select({ id: accounts.id, name: accounts.name })
      .from(accounts)
      .where(eq(accounts.user_id, auth.userId));

    return c.json({ data });
  })
  .post(
    "/",
    clerkMiddleware(),
    zValidator("json", insertAccountSchema.pick({ name: true })),
    async (c) => {
      const values = c.req.valid("json");
      const auth = getAuth(c);

      if (!auth?.userId) {
        return c.json({ error: "Unauthorized" }, 401);
      }

      const data = await db
        .insert(accounts)
        .values({
          id: createId(),
          user_id: auth.userId,
          ...values,
        })
        .returning();

      return c.json({ data: data[0] });
    },
  );

export default app;
