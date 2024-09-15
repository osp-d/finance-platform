import { Hono } from "hono";
import { clerkMiddleware, getAuth } from "@hono/clerk-auth";

const app = new Hono();

app.get("/", clerkMiddleware(), (c) => {
  const auth = getAuth(c);

  if (!auth?.userId) {
    return c.json({
      message: "Unauthorized",
    });
  }

  return c.json({
    message: "You are logged in!",
    userId: auth.userId,
  });
});

export default app;
